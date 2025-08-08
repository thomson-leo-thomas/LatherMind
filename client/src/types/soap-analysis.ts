export interface Prediction {
  className: string;
  confidence: number;
}

export interface OpenCVAnalysis {
  colorHistogram: number[];
  dominantColor: string;
  shapeQuality: string;
  contourCount: number;
  laplacianVariance: number;
  binaryMask?: ImageData;
  edges?: ImageData;
}

export interface ScoreBreakdown {
  class: {
    value: string;
    score: number;
  };
  color: {
    value: string;
    score: number;
  };
  shape: {
    value: string;
    score: number;
  };
  sharpness: {
    value: string;
    score: number;
  };
}

export interface AnalysisResult {
  predictions: Prediction[];
  topPrediction: Prediction;
  openCVAnalysis: OpenCVAnalysis;
  breakdown: ScoreBreakdown;
  finalScore: number;
  nickname: string;
  timestamp: Date;
  originalImageUrl: string;
}

export interface CertificateData {
  soapImage: string;
  class: string;
  confidence: string;
  nickname: string;
  score: number;
  color: string;
  shape: string;
  contours: number;
  sharpness: string;
  timestamp: string;
}