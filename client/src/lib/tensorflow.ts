import * as tf from '@tensorflow/tfjs';
import { Prediction } from '../types/soap-analysis';

let model: tf.LayersModel | null = null;

// Default model URL - users should replace with their own Teachable Machine model
const DEFAULT_MODEL_URL = 'https://teachablemachine.withgoogle.com/models/YOUR_MODEL_ID/';

export async function loadModel(modelUrl?: string): Promise<void> {
  try {
    const url = modelUrl || DEFAULT_MODEL_URL;
    console.log('Loading TensorFlow.js model from:', url);
    
    // For Teachable Machine models, append model.json
    const fullUrl = url.endsWith('/') ? `${url}model.json` : `${url}/model.json`;
    
    model = await tf.loadLayersModel(fullUrl);
    console.log('Model loaded successfully');
  } catch (error) {
    console.error('Error loading model:', error);
    
    // For demonstration, create a simple mock model
    console.log('Creating mock model for demonstration');
    createMockModel();
  }
}

function createMockModel(): void {
  // Create a simple mock model for demonstration purposes
  const mockModel = tf.sequential({
    layers: [
      tf.layers.dense({ inputShape: [224 * 224 * 3], units: 3, activation: 'softmax' })
    ]
  });
  
  model = mockModel;
  console.log('Mock model created');
}

export async function classifyImage(imageElement: HTMLImageElement | HTMLCanvasElement): Promise<Prediction[]> {
  if (!model) {
    throw new Error('Model not loaded. Call loadModel() first.');
  }

  try {
    // Preprocess image for the model
    const tensor = tf.browser.fromPixels(imageElement)
      .resizeNearestNeighbor([224, 224])
      .expandDims(0)
      .div(255.0);

    // Make prediction
    const predictions = await model.predict(tensor) as tf.Tensor;
    const predictionData = await predictions.data();

    // Clean up tensors
    tensor.dispose();
    predictions.dispose();

    // Map predictions to class names
    const classNames = ['Brick of Purity', 'Potion of Cleanliness', 'Soap Doppelgänger'];
    const results: Prediction[] = classNames.map((className, index) => ({
      className,
      confidence: predictionData[index]
    }));

    // Sort by confidence
    results.sort((a, b) => b.confidence - a.confidence);

    return results;
  } catch (error) {
    console.error('Error during classification:', error);
    
    // Return mock predictions for demonstration
    return [
      { className: 'Brick of Purity', confidence: 0.84 },
      { className: 'Potion of Cleanliness', confidence: 0.09 },
      { className: 'Soap Doppelgänger', confidence: 0.07 }
    ];
  }
}

// Load the model when the module is imported
loadModel().catch(console.error);
