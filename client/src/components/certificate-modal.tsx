import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { AnalysisResult, CertificateData } from '../types/soap-analysis';
import { useToast } from '@/hooks/use-toast';

interface CertificateModalProps {
  result: AnalysisResult;
  onClose: () => void;
}

export default function CertificateModal({ result, onClose }: CertificateModalProps) {
  const certificateRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const certificateData: CertificateData = {
    soapImage: '', // Would be the original uploaded image
    class: result.breakdown.class.value,
    confidence: `${Math.round(result.topPrediction.confidence * 100)}%`,
    nickname: result.nickname,
    score: result.finalScore,
    color: result.breakdown.color.value,
    shape: result.breakdown.shape.value,
    contours: result.openCVAnalysis.contourCount,
    sharpness: result.breakdown.sharpness.value,
    timestamp: result.timestamp.toLocaleDateString()
  };

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;

    try {
      // Use html2canvas to capture the certificate
      const html2canvas = (window as any).html2canvas;
      if (!html2canvas) {
        throw new Error('html2canvas not loaded');
      }

      const canvas = await html2canvas(certificateRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true
      });

      // Create download link
      const link = document.createElement('a');
      link.download = `soapliness-certificate-${result.nickname.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Certificate downloaded!",
        description: "Your Soapliness Certificate has been saved as PNG",
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download failed",
        description: "Please try again or check your browser settings",
        variant: "destructive"
      });
    }
  };

  const shareCertificate = () => {
    const message = `🧼 I got a Soapliness Score of ${result.finalScore}/100 for my "${result.nickname}"! Check out LatherMind - AI-powered soap analysis at ${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
      data-testid="certificate-modal"
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Soapliness Certificate</h3>
            <button 
              className="text-gray-400 hover:text-gray-600"
              onClick={onClose}
              data-testid="button-close-certificate"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          {/* Certificate Design */}
          <div 
            ref={certificateRef}
            className="bg-gradient-to-br from-blue-50 to-purple-50 border-4 border-primary rounded-xl p-8 text-center"
            data-testid="certificate-content"
          >
            <div className="mb-6">
              <div className="bg-primary text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-soap text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-2">🧼 SOAPLINESS CERTIFICATE</h2>
              <p className="text-gray-600">© 2025 LatherMind</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <p className="text-gray-600">📸 Soap Snapshot:</p>
                  <div className="bg-gray-100 rounded mt-2 aspect-square w-24 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Image</span>
                  </div>
                </div>
                <div className="text-left space-y-2">
                  <p><span className="text-gray-600">🔤 Class:</span> <span className="font-medium">{certificateData.class}</span></p>
                  <p><span className="text-gray-600">💯 Certainty:</span> <span className="font-medium">{certificateData.confidence}</span></p>
                  <p><span className="text-gray-600">🏷️ Title:</span> <span className="font-medium">{certificateData.nickname}</span></p>
                  <p><span className="text-gray-600">📊 Soapliness Index™:</span> <span className="font-bold text-primary text-xl">{certificateData.score}</span></p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">🔍 ANALYSIS BREAKDOWN</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-left">
                <p><span className="text-gray-600">🎨 Dominant Color:</span> <span>{certificateData.color}</span></p>
                <p><span className="text-gray-600">🧪 Detected Shape:</span> <span>{certificateData.shape}</span></p>
                <p><span className="text-gray-600">📈 Contours:</span> <span>{certificateData.contours.toLocaleString()}</span></p>
                <p><span className="text-gray-600">📉 Sharpness:</span> <span>{certificateData.sharpness}</span></p>
              </div>
            </div>
            
            <div className="gradient-primary text-white rounded-lg p-6 mb-6">
              <h4 className="font-bold text-lg mb-2">FINAL SOAPLINESS INDEX™</h4>
              <p className="text-4xl font-bold">🧼 {certificateData.score} / 100.0 🧼</p>
            </div>
            
            <div className="text-xs text-gray-500 border-t pt-4">
              <p>© 2025 LatherMind — Certificate of Cleanliness</p>
              <p>Officially audited by the Soapliness Authority™.</p>
              <p>Made with love, bubbles, and client-side code — proudly created by Thomson.</p>
            </div>
          </div>
          
          <div className="flex gap-4 mt-6">
            <Button 
              onClick={downloadCertificate}
              className="flex-1 bg-primary hover:bg-primary-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
              data-testid="button-download-certificate"
            >
              <i className="fas fa-download mr-2"></i>Download PNG
            </Button>
            <Button 
              onClick={shareCertificate}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
              data-testid="button-share-certificate"
            >
              <i className="fab fa-whatsapp mr-2"></i>Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}