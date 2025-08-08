import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnalysisResult } from '../types/soap-analysis';

interface ResultsSectionProps {
  result: AnalysisResult;
  onGenerateCertificate: () => void;
  onAnalyzeAnother: () => void;
}

export default function ResultsSection({ result, onGenerateCertificate, onAnalyzeAnother }: ResultsSectionProps) {
  const { predictions, breakdown, finalScore, nickname, openCVAnalysis } = result;
  


  const shareOnWhatsApp = () => {
    const message = `🧼 My soap got a Soapliness Score of ${finalScore}/100! Check out LatherMind - AI-powered soap analysis at ${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-8 mb-16" data-testid="results-section">
      {/* ML Classification Results */}
      <Card className="shadow-lg border border-gray-200">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <i className="fas fa-brain text-primary mr-3"></i>ML Classification Results
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Predicted Class */}
            <div>
              <h4 className="text-lg font-medium text-gray-700 mb-4">Predicted Class</h4>
              <div className="space-y-3">
                {predictions.map((prediction, index) => (
                  <div 
                    key={prediction.className}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      index === 0 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                    data-testid={`prediction-${index}`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">
                        {prediction.className.includes('Brick') ? '🧼' : 
                         prediction.className.includes('Potion') ? '🧴' : '🧽'}
                      </span>
                      <span className={`font-medium ${
                        index === 0 ? 'text-green-800' : 'text-gray-600'
                      }`}>
                        {prediction.className}
                      </span>
                    </div>
                    <span className={`font-semibold ${
                      index === 0 ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {Math.round(prediction.confidence * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Confidence Graph */}
            <div>
              <h4 className="text-lg font-medium text-gray-700 mb-4">Confidence Graph</h4>
              <div className="space-y-4">
                {predictions.map((prediction, index) => (
                  <div key={prediction.className} data-testid={`confidence-bar-${index}`}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>
                        {prediction.className.includes('Brick') ? '🧼' : 
                         prediction.className.includes('Potion') ? '🧴' : '🧽'} {prediction.className}
                      </span>
                      <span className="font-medium">{Math.round(prediction.confidence * 100)}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${
                          index === 0 ? 'bg-green-500' : 
                          index === 1 ? 'bg-blue-500' : 'bg-orange-500'
                        }`}
                        style={{ width: `${prediction.confidence * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Image Processing Panel */}
      <Card className="shadow-lg border border-gray-200">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <i className="fas fa-search text-secondary mr-3"></i>Image Processing Analysis
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Original Image */}
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Original Image</h4>
              <div className="bg-gray-100 rounded-lg p-3 aspect-square flex items-center justify-center overflow-hidden">
                <img 
                  src={result.originalImageUrl} 
                  alt="Original soap" 
                  className="max-w-full max-h-full object-cover rounded"
                  data-testid="img-original-soap"
                />
              </div>
            </div>

            {/* Binary Mask */}
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Binary Mask</h4>
              <div className="bg-gray-900 rounded-lg p-3 aspect-square flex items-center justify-center">
                {openCVAnalysis.binaryMask ? (
                  <canvas 
                    width={100} 
                    height={100}
                    className="max-w-full max-h-full"
                    ref={(canvas) => {
                      if (canvas && openCVAnalysis.binaryMask) {
                        const ctx = canvas.getContext('2d');
                        if (ctx) {
                          ctx.putImageData(openCVAnalysis.binaryMask, 0, 0);
                        }
                      }
                    }}
                  />
                ) : (
                  <div className="bg-white rounded-lg w-3/4 h-3/4" />
                )}
              </div>
            </div>

            {/* Canny Edges */}
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Canny Edges</h4>
              <div className="bg-gray-900 rounded-lg p-3 aspect-square flex items-center justify-center">
                {openCVAnalysis.edges ? (
                  <canvas 
                    width={100} 
                    height={100}
                    className="max-w-full max-h-full"
                    ref={(canvas) => {
                      if (canvas && openCVAnalysis.edges) {
                        const ctx = canvas.getContext('2d');
                        if (ctx) {
                          ctx.putImageData(openCVAnalysis.edges, 0, 0);
                        }
                      }
                    }}
                  />
                ) : (
                  <div className="border-2 border-white rounded-lg w-3/4 h-3/4" />
                )}
              </div>
            </div>

            {/* Color Histogram */}
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Color Histogram</h4>
              <div className="bg-gray-100 rounded-lg p-3 aspect-square flex items-end justify-center">
                <div className="flex items-end space-x-1 h-full">
                  {openCVAnalysis.colorHistogram.slice(0, 4).map((value, index) => (
                    <div 
                      key={index}
                      className={`w-2 ${
                        index === 0 ? 'bg-red-400' :
                        index === 1 ? 'bg-green-400' :
                        index === 2 ? 'bg-blue-500' : 'bg-yellow-400'
                      }`}
                      style={{ height: `${value * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Soapliness Index Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Score Breakdown */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <i className="fas fa-chart-line text-accent mr-3"></i>Soapliness Index™ Breakdown
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg" data-testid="score-class">
                <div>
                  <span className="text-sm text-gray-600">Class</span>
                  <p className="font-medium">{breakdown.class.value}</p>
                </div>
                <span className="text-2xl font-bold text-green-600">+{breakdown.class.score}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg" data-testid="score-color">
                <div>
                  <span className="text-sm text-gray-600">Color</span>
                  <p className="font-medium">{breakdown.color.value}</p>
                </div>
                <span className="text-2xl font-bold text-blue-600">+{breakdown.color.score}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg" data-testid="score-shape">
                <div>
                  <span className="text-sm text-gray-600">Shape</span>
                  <p className="font-medium">{breakdown.shape.value}</p>
                </div>
                <span className="text-2xl font-bold text-purple-600">+{breakdown.shape.score}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg" data-testid="score-sharpness">
                <div>
                  <span className="text-sm text-gray-600">Sharpness</span>
                  <p className="font-medium">{breakdown.sharpness.value}</p>
                </div>
                <span className="text-2xl font-bold text-orange-600">+{breakdown.sharpness.score}</span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between p-4 gradient-primary rounded-lg text-white" data-testid="score-final">
                  <span className="text-lg font-semibold">Final Score</span>
                  <span className="text-3xl font-bold">{finalScore}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Soap Profile Card */}
        <Card className="shadow-lg gradient-secondary text-white">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🧼</span>
              </div>
              <h3 className="text-2xl font-bold mb-2" data-testid="text-soap-nickname">{nickname}</h3>
              <p className="text-blue-100">The Purifying Legend</p>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-blue-200">Contours Detected:</span>
                <span className="font-medium" data-testid="text-contours">{openCVAnalysis.contourCount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Dominant Color:</span>
                <span className="font-medium" data-testid="text-dominant-color">{openCVAnalysis.dominantColor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Shape Quality:</span>
                <span className="font-medium" data-testid="text-shape-quality">{openCVAnalysis.shapeQuality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Confidence Level:</span>
                <span className="font-medium" data-testid="text-confidence-level">{Math.round(result.topPrediction.confidence * 100)}%</span>
              </div>
            </div>
            
            <Button 
              onClick={onGenerateCertificate}
              className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold mt-6 hover:bg-blue-50 transition-colors flex items-center justify-center"
              data-testid="button-generate-certificate"
            >
              <i className="fas fa-certificate mr-2"></i>Generate Certificate
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={shareOnWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center"
          data-testid="button-share-whatsapp"
        >
          <i className="fab fa-whatsapp mr-2"></i>Share on WhatsApp
        </Button>
        <Button 
          onClick={onAnalyzeAnother}
          className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center"
          data-testid="button-analyze-another"
        >
          <i className="fas fa-redo mr-2"></i>Analyze Another Soap
        </Button>
      </div>
    </div>
  );
}