import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { classifyImage } from '../lib/tensorflow';
import { analyzeImage } from '../lib/opencv';
import { calculateSoaplinessScore } from '../lib/scoring';
import { AnalysisResult } from '../types/soap-analysis';

interface UploadSectionProps {
  onAnalysisComplete: (result: AnalysisResult) => void;
  isAnalyzing: boolean;
  setIsAnalyzing: (analyzing: boolean) => void;
}

export default function UploadSection({ onAnalysisComplete, isAnalyzing, setIsAnalyzing }: UploadSectionProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [usingCamera, setUsingCamera] = useState(false);
  const { toast } = useToast();

  const analyzeImageFile = useCallback(async (imageElement: HTMLImageElement) => {
    try {
      setIsAnalyzing(true);
      
      toast({
        title: "Analyzing soap...",
        description: "Running ML classification and OpenCV analysis",
      });

      // Run ML classification
      const predictions = await classifyImage(imageElement);
      const topPrediction = predictions[0];

      // Run OpenCV analysis
      const openCVAnalysis = await analyzeImage(imageElement);

      // Calculate score
      const { breakdown, finalScore, nickname } = calculateSoaplinessScore(topPrediction, openCVAnalysis);



      const result: AnalysisResult = {
        predictions,
        topPrediction,
        openCVAnalysis,
        breakdown,
        finalScore,
        nickname,
        timestamp: new Date(),
        originalImageUrl: imageElement.src
      };

      onAnalysisComplete(result);
      
      toast({
        title: "Analysis complete!",
        description: `Your Soapliness Score is ${finalScore}/100`,
      });

    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis failed",
        description: "Please try again with a different image",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  }, [onAnalysisComplete, setIsAnalyzing, toast]);

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file",
        description: "Please select an image file",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      setUploadedImage(imageUrl);
      
      // Create image element for analysis
      const img = new Image();
      img.onload = () => analyzeImageFile(img);
      img.src = imageUrl;
    };
    reader.readAsDataURL(file);
  }, [analyzeImageFile, toast]);

  const handleFileUpload = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setUsingCamera(true);
      }
    } catch (error) {
      console.error('Camera access error:', error);
      toast({
        title: "Camera access denied",
        description: "Please allow camera access to capture soap images",
        variant: "destructive"
      });
    }
  }, [toast]);

  const capturePhoto = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);
        
        // Convert to blob and create image URL
        canvas.toBlob((blob) => {
          if (blob) {
            const imageUrl = URL.createObjectURL(blob);
            setUploadedImage(imageUrl);
            
            // Stop camera
            const stream = video.srcObject as MediaStream;
            stream?.getTracks().forEach(track => track.stop());
            setUsingCamera(false);
            
            // Analyze the captured image  
            const img = new Image();
            img.onload = () => analyzeImageFile(img);
            img.src = imageUrl;
          }
        });
      }
    }
  }, [analyzeImageFile]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* Upload Area */}
      <div className="lg:col-span-2">
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6" data-testid="text-upload-title">
              Upload Your Soap
            </h3>
            
            {!usingCamera ? (
              <div 
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-all cursor-pointer ${
                  dragOver 
                    ? 'border-primary bg-primary-50' 
                    : 'border-gray-300 bg-gray-50 hover:border-primary-400 hover:bg-gray-100'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleFileUpload}
                data-testid="upload-area"
              >
                <div className="mb-4">
                  <i className="fas fa-cloud-upload-alt text-6xl text-gray-400"></i>
                </div>
                <h4 className="text-xl font-medium text-gray-700 mb-2">
                  {isAnalyzing ? 'Analyzing...' : 'Drop your soap image here'}
                </h4>
                <p className="text-gray-500 mb-4">or click to browse files</p>
                <div className="flex justify-center gap-4">
                  <Button 
                    onClick={(e) => { e.stopPropagation(); handleFileUpload(); }}
                    disabled={isAnalyzing}
                    className="bg-primary hover:bg-primary-600"
                    data-testid="button-upload-photo"
                  >
                    <i className="fas fa-camera mr-2"></i>
                    {isAnalyzing ? 'Analyzing...' : 'Upload Photo'}
                  </Button>
                  <Button 
                    onClick={(e) => { e.stopPropagation(); startCamera(); }}
                    disabled={isAnalyzing}
                    className="bg-secondary hover:bg-secondary-600"
                    data-testid="button-use-camera"
                  >
                    <i className="fas fa-video mr-2"></i>Use Camera
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h4 className="text-lg font-medium text-gray-700 mb-4">Camera Active</h4>
                <video 
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full max-w-md mx-auto rounded-lg mb-4"
                  data-testid="video-camera"
                />
                <div className="flex justify-center gap-4">
                  <Button 
                    onClick={capturePhoto}
                    className="bg-primary hover:bg-primary-600"
                    data-testid="button-capture-photo"
                  >
                    <i className="fas fa-camera mr-2"></i>Capture Photo
                  </Button>
                  <Button 
                    onClick={() => {
                      const stream = videoRef.current?.srcObject as MediaStream;
                      stream?.getTracks().forEach(track => track.stop());
                      setUsingCamera(false);
                    }}
                    variant="outline"
                    data-testid="button-cancel-camera"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            {/* Image Preview */}
            {uploadedImage && (
              <div className="mt-6" data-testid="image-preview">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Uploaded Image</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded soap" 
                    className="w-full h-64 object-cover rounded-lg"
                    data-testid="img-uploaded-soap"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Info Panel */}
      <div className="space-y-6">
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-info-circle text-primary mr-2"></i>How It Works
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">1</span>
                <span>Upload or capture soap image</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">2</span>
                <span>AI classifies soap type with confidence</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">3</span>
                <span>OpenCV analyzes color, shape & sharpness</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">4</span>
                <span>Get your Soapliness Score & certificate</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg gradient-accent text-white">
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <i className="fas fa-star mr-2"></i>Soap Classes
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>🧼 Brick of Purity</span>
                <span className="font-medium">Bar Soap</span>
              </div>
              <div className="flex items-center justify-between">
                <span>🧴 Potion of Cleanliness</span>
                <span className="font-medium">Liquid Soap</span>
              </div>
              <div className="flex items-center justify-between">
                <span>🧽 Soap Doppelgänger</span>
                <span className="font-medium">Not Soap</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileSelect(file);
        }}
        className="hidden"
        data-testid="input-file-upload"
      />

      {/* Hidden canvas for photo capture */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}