<img width="3188" height="1202" alt="frame (3)" src="https://github.com/user-attachments/assets/517ad8e9-ad22-457d-9538-a9e62d137cd7" />


# LatherMind - AI Soap Analysis Application 🎯


## Basic Details


### Members
- Thomson Leo Thomas - Viswajyothi College of Engineering and Technology

### Project Description
LatherMind is the world’s first AI-powered soap evaluation platform — yes, we rate soap. 🧼🚀
Classifies bar or liquid, then uses machine learning + OpenCV to analyze colour, shape, and sharpness, delivering a Soapliness Score with an official certificate.
Because hygiene deserved its own moon landing.

### The Problem (that doesn't exist )
We’ve mastered space travel.
We’ve mapped the human genome.
We can 3D-print organs.

And yet…
Humanity still has no precise, scientific way to know if a bar of soap or bottle of hand wash is truly living up to its potential.

This isn’t just a gap in hygiene.
It’s a gap in human progress.

### The Solution that nobody asked for(But You’ll Brag About Anyway)
We pointed cutting-edge tech at… soap.
Because why not?

Here’s the mission plan:

1. Snap a pic — bar 🧼 or liquid 🧴, no judgment.


2. Machine Learning model swoops in to classify your soap type like it’s identifying rare wildlife.


3. OpenCV magic runs colour calibration (because “Lemon Fresh” ≠ random yellow blob).


4. Shape geometry analysis checks if your soap is a sleek oval or a rebellious rectangle.


5. Sharpness detection ensures your soap looks HD enough for a shampoo commercial.


6. Crunches all that into next-level calculations to spit out your Soapliness Score.



End result?
A certificate proving your soap is objectively legendary.

## Technical Details
### Technologies/Components Used
Frontend
React 18 - Modern UI framework

TypeScript - Type-safe development

Vite - Fast build tool and dev server

Tailwind CSS - Utility-first styling

shadcn/ui - Accessible UI components

Machine Learning & Computer Vision

TensorFlow.js - Browser-based ML inference

OpenCV.js - Computer vision processing

Teachable Machine - Custom model integration

## 🧼 Features

  AI-Powered Soap Classification**: Uses TensorFlow.js with Teachable Machine models to identify soap types
  
  Advanced Image Processing**: OpenCV.js integration for color analysis, edge detection, and shape assessment
  
  Real-time Analysis**: Browser-based processing for instant results
  
  4-Column Image Processing Panel**: Original Image, Binary Mask, Canny Edges, and Color Histogram visualization
  
  Downloadable Certificates**: Generate shareable PNG certificates with scoring details
  
  Responsive Design**: Optimized for desktop and mobile devices

### Implementation
Installation
Clone the repository
Install dependencies
npm install
Start development server
npm run dev
Open your browser Navigate to http://localhost:5000


🧪 Image Processing Pipeline
LatherMind performs comprehensive image analysis through four main components:

Original Image: User-uploaded soap image
Binary Mask: Thresholded shape analysis using OpenCV
Canny Edges: Edge detection for outline quality assessment
Color Histogram: HSV/RGB color distribution analysis

🏆 Soapliness Index™ Scoring
The scoring algorithm evaluates:

Classification Confidence (40%) - ML model certainty
Color Quality (25%) - Dominant color assessment
Shape Analysis (20%) - Edge clarity and contour smoothness
Image Sharpness (15%) - Laplacian variance calculation


# Screenshots (Add at least 3)
https://drive.google.com/file/d/1K2Lbt2rLxOkFzzlzoMfbxzbrwlRTu4Zm/view?usp=drivesdk
the main character
https://drive.google.com/file/d/1K35dA3Bd8Pf02XSZxBWnoOI1DbcAu9Oy/view?usp=drivesdk
the training phase
https://drive.google.com/file/d/1KMNZldRPhiUedka3MKjDdCNypV6EYG4-/view?usp=drivesdk
the certificate
https://drive.google.com/file/d/1KKLa_ZQ_rTxaUn-anPHqxhlw76F84SBf/view?usp=drivesdk
the home page
# Diagrams
https://drive.google.com/file/d/1JszXWO9rosHHyqlTxWJvV-ahjglRZJFq/view?usp=drivesdk


### Project Demo
# Video
https://drive.google.com/file/d/1JpEmx1RkDiSXiZudyB8ZbyKtfdrQPEzZ/view?usp=drivesdk
How LatherMind Works (Step by Step)

From the video/demo flow, here’s what’s happening when someone uses LatherMind:

1. User Chooses an Input

They either upload a soap image or use the live camera.

The app instantly displays the original photo in the Live Preview Panel.



2. ML Classification (Teachable Machine + TensorFlow.js)

The image is sent to a pre-trained ML model (hosted right in the browser).

The model predicts one of three classes:
🧼 Brick of Purity (Bar Soap)
🧴 Potion of Cleanliness (Liquid Soap)
🧽 Soap Doppelgänger (Not Soap)

A confidence graph shows the probability of each result.



3. OpenCV.js Image Processing

The same image is analyzed for visual metrics:

Color Histogram → Determines the dominant colors and matches them to the Color Interpretation Table.

Canny Edge Detection → Finds the soap’s edges to check shape precision.

Contour Analysis → Rates the smoothness of the soap’s outline.

Laplacian Variance → Measures image sharpness (blurry vs. crisp).




4. Soapliness Index™ Calculation

Each analysis result contributes points:

finalScore = classScore + colorScore + shapeScore + sharpnessScore;

The total is your Soapliness Score (0–100).



5. Results Display

Breakdown table shows exactly how each factor scored.

Processed image views (Binary Mask, Edges, Histogram) are shown side-by-side.

A PNG certificate is generated (via HTML2Canvas) so you can brag about your soap’s glory on WhatsApp or anywhere else.

# Additional Demos

https://drive.google.com/file/d/1KPwMTwjl2crzxi9imuxYXmXQFvAVCAQy/view?usp=drivesdk

How Teachable Machine Works in LatherMind

Teachable Machine is Google’s no-code tool for training machine learning models. In your project, it’s the “brain” that figures out what kind of soap it’s looking at.

How it works in general:

1. Image Collection & Labeling – You feed Teachable Machine example images, grouped into categories (called “classes”).


2. Model Training – Behind the scenes, it uses a convolutional neural network (CNN) to learn the visual patterns that separate each class.


3. Export – Once trained, you can export the model for web use (model.json + metadata.json + weights.bin).





How you used it in LatherMind:

1. Created 3 Classes:

🧼 Brick of Purity — bar soap

🧴 Potion of Cleanliness — liquid soap

🧽 Soap Doppelgänger — not soap (to catch imposters)



2. Trained the Model:

Uploaded multiple images for each class to Teachable Machine.

Made sure to include different angles, lighting, and backgrounds so the model could recognise soap in various real-world conditions.



3. Exported for Web:

Downloaded the TensorFlow.js model files (model.json, metadata.json, weights.bin).



4. Integrated into LatherMind:

Loaded the model in-browser with TensorFlow.js.

When the user uploads or streams an image, the model runs inference in real time.

It outputs probabilities for each class, which are displayed in your Confidence Graph.



5. Feeds Into Scoring:

The predicted class gives a Class Score, which is combined with OpenCV’s colour, shape, and sharpness analysis to produce the final Soapliness Index™.


Note: All commits made under the two email addresses associated with this repository are by me. Both emails are my own, and no other individual has access to them.

hosted at
https://lathermind.onrender.com/

## 🐛 Known Issues

- OpenCV.js model loading may show warnings in console (normal behavior)
- Large images may take longer to process
- Some edge cases in color detection for transparent soaps
---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--25-25?link=https%3A%2F%2Fwww.tinkerhub.org%2Fevents%2FQ2Q1TQKX6Q%2FUseless%2520Projects)
