import { useState } from 'react';
import { AnalysisResult } from '../types/soap-analysis';
import UploadSection from '../components/upload-section';
import ResultsSection from '../components/results-section';
import CertificateModal from '../components/certificate-modal';
import ScoringTables from '../components/scoring-tables';

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisResult(result);
    setIsAnalyzing(false);
  };

  const handleAnalyzeAnother = () => {
    setAnalysisResult(null);
    setShowCertificate(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-glass border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="gradient-primary p-2 rounded-xl">
                <i className="fas fa-soap text-white text-2xl"></i>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900" data-testid="app-title">LatherMind</h1>
                <p className="text-sm text-gray-600">Advancing civilization, one bar at a time</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button 
                className="text-gray-600 hover:text-primary transition-colors"
                data-testid="button-github"
              >
                <i className="fab fa-github text-xl"></i>
              </button>
              <button 
                className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
                data-testid="button-share"
              >
                <i className="fas fa-share-alt mr-2"></i>Share
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-testid="text-hero-title">
            AI-Powered Soap Analysis
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto" data-testid="text-hero-description">
            The world can 3D print organs… but still can't judge your soap. Upload a photo and get your Soapliness Score in seconds using ML classification and computer vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-8">
            <span className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
              <i className="fas fa-brain text-primary mr-2"></i>ML Classification
            </span>
            <span className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
              <i className="fas fa-search text-secondary mr-2"></i>OpenCV Analysis
            </span>
            <span className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
              <i className="fas fa-chart-bar text-accent mr-2"></i>Soapliness Index
            </span>
            <span className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
              <i className="fas fa-certificate text-green-500 mr-2"></i>Certificate
            </span>
          </div>
        </div>

        {/* Upload Section */}
        <UploadSection 
          onAnalysisComplete={handleAnalysisComplete}
          isAnalyzing={isAnalyzing}
          setIsAnalyzing={setIsAnalyzing}
        />

        {/* Results Section */}
        {analysisResult && (
          <ResultsSection 
            result={analysisResult}
            onGenerateCertificate={() => setShowCertificate(true)}
            onAnalyzeAnother={handleAnalyzeAnother}
          />
        )}

        {/* Scoring Tables */}
        <ScoringTables />
      </main>

      {/* Certificate Modal */}
      {showCertificate && analysisResult && (
        <CertificateModal 
          result={analysisResult}
          onClose={() => setShowCertificate(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="gradient-primary p-2 rounded-xl">
                  <i className="fas fa-soap text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold">LatherMind</h3>
                  <p className="text-gray-400 text-sm">Advancing civilization, one bar at a time</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                AI-powered soap analysis using machine learning and computer vision. 
                Get your Soapliness Score and celebrate the art of cleanliness.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-github">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-twitter">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-linkedin">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Technology</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>TensorFlow.js</li>
                <li>OpenCV.js</li>
                <li>React + TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Vercel Deployment</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Setup Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub Repository</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 LatherMind. Made with love, bubbles, and client-side code — proudly created by Thomson.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
