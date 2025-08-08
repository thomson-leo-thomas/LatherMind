import { Prediction, OpenCVAnalysis, ScoreBreakdown } from '../types/soap-analysis';

export const SOAP_CLASSES = [
  {
    id: 'brick_of_purity',
    name: 'Brick of Purity',
    emoji: '🧼',
    description: 'Bar Soap',
    score: 30
  },
  {
    id: 'potion_of_cleanliness',
    name: 'Potion of Cleanliness',
    emoji: '🧴',
    description: 'Liquid Soap',
    score: 25
  },
  {
    id: 'soap_doppelganger',
    name: 'Soap Doppelgänger',
    emoji: '🧽',
    description: 'Not Soap (Imposter!)',
    score: 0
  }
];

export const COLOR_SCORING = {
  'Bright Blue/White': { interpretation: 'Cosmically Pure', score: 20 },
  'Light Pink/Yellow': { interpretation: 'Spiritually Acceptable', score: 15 },
  'Grey/Dull': { interpretation: 'Mundane & Earthly', score: 10 },
  'Muddy/Dark': { interpretation: 'Soap of the Underworld', score: 0 }
};

export const SHAPE_SCORING = {
  'Smooth Solid Contours': { interpretation: 'Sacredly Formed', score: 20 },
  'Wobbly/Irregular Edge': { interpretation: 'Spiritually Incomplete', score: 10 },
  'Fragmented/No Shape': { interpretation: 'Chaotic Foam Entity', score: 0 }
};

export const SHARPNESS_SCORING = {
  'High': { interpretation: 'Crystal Clear', score: 10 },
  'Medium': { interpretation: 'Slightly Fogged', score: 5 },
  'Low': { interpretation: 'Fuzzy Suds', score: 0 }
};

const SOAP_NICKNAMES = [
  'Slippy Suddington',
  'Bubblicious McFoam',
  'Sir Lathers-a-Lot',
  'Captain Squeaky Clean',
  'The Sudsy Sage',
  'Foam Ranger',
  'Bubble Master Supreme',
  'The Cleanliness Crusader',
  'Squeaky McGee',
  'Professor Pristine'
];

function getRandomNickname(): string {
  return SOAP_NICKNAMES[Math.floor(Math.random() * SOAP_NICKNAMES.length)];
}

function classifyDominantColor(colorHistogram: number[]): string {
  // Simplified color classification based on RGB histogram
  const [red, green, blue] = colorHistogram.slice(0, 3);
  const total = red + green + blue;
  
  if (total === 0) return 'Muddy/Dark';
  
  const rRatio = red / total;
  const gRatio = green / total;
  const bRatio = blue / total;
  
  // High overall brightness indicates white/bright colors
  if (total > 0.7) {
    if (bRatio > 0.4) return 'Bright Blue/White';
    if (rRatio > 0.4 && gRatio > 0.3) return 'Light Pink/Yellow';
  }
  
  // Medium brightness
  if (total > 0.4) {
    return 'Grey/Dull';
  }
  
  // Low brightness
  return 'Muddy/Dark';
}

function classifyShapeQuality(contourCount: number, laplacianVariance: number): string {
  if (laplacianVariance > 1000 && contourCount < 100) {
    return 'Smooth Solid Contours';
  } else if (laplacianVariance > 100 && contourCount < 500) {
    return 'Wobbly/Irregular Edge';
  } else {
    return 'Fragmented/No Shape';
  }
}

function classifySharpness(laplacianVariance: number): string {
  if (laplacianVariance > 1000) return 'High';
  if (laplacianVariance > 100) return 'Medium';
  return 'Low';
}

export function calculateSoaplinessScore(
  topPrediction: Prediction,
  analysis: OpenCVAnalysis
): { breakdown: ScoreBreakdown; finalScore: number; nickname: string } {
  // Find the soap class
  const soapClass = SOAP_CLASSES.find(c => 
    c.name.toLowerCase().includes(topPrediction.className.toLowerCase()) ||
    topPrediction.className.toLowerCase().includes(c.name.toLowerCase())
  ) || SOAP_CLASSES[2]; // Default to Soap Doppelgänger

  // Classify analysis results
  const dominantColorCategory = classifyDominantColor(analysis.colorHistogram);
  const shapeQuality = classifyShapeQuality(analysis.contourCount, analysis.laplacianVariance);
  const sharpnessLevel = classifySharpness(analysis.laplacianVariance);

  // Build breakdown
  const breakdown: ScoreBreakdown = {
    class: {
      value: soapClass.name,
      score: soapClass.score
    },
    color: {
      value: dominantColorCategory,
      score: COLOR_SCORING[dominantColorCategory as keyof typeof COLOR_SCORING].score
    },
    shape: {
      value: shapeQuality,
      score: SHAPE_SCORING[shapeQuality as keyof typeof SHAPE_SCORING].score
    },
    sharpness: {
      value: sharpnessLevel,
      score: SHARPNESS_SCORING[sharpnessLevel as keyof typeof SHARPNESS_SCORING].score
    }
  };

  // Calculate final score
  const finalScore = breakdown.class.score + breakdown.color.score + breakdown.shape.score + breakdown.sharpness.score;

  return {
    breakdown,
    finalScore,
    nickname: getRandomNickname()
  };
}
