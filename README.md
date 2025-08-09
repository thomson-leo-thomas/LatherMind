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

  **AI-Powered Soap Classification**: Uses TensorFlow.js with Teachable Machine models to identify soap types
  **Advanced Image Processing**: OpenCV.js integration for color analysis, edge detection, and shape assessment
  **Real-time Analysis**: Browser-based processing for instant results
  **4-Column Image Processing Panel**: Original Image, Binary Mask, Canny Edges, and Color Histogram visualization
  **Downloadable Certificates**: Generate shareable PNG certificates with scoring details
  **Responsive Design**: Optimized for desktop and mobile devices

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
![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

# Diagrams
![Workflow](Add your workflow/architecture diagram here)
*Add caption explaining your workflow*

For Hardware:

# Schematic & Circuit
![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

# Build Photos
![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

### Project Demo
# Video
[Add your demo video link here]
*Explain what the video demonstrates*

# Additional Demos
[Add any extra demo materials/links]


## 🐛 Known Issues

- OpenCV.js model loading may show warnings in console (normal behavior)
- Large images may take longer to process
- Some edge cases in color detection for transparent soaps
---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--25-25?link=https%3A%2F%2Fwww.tinkerhub.org%2Fevents%2FQ2Q1TQKX6Q%2FUseless%2520Projects)
