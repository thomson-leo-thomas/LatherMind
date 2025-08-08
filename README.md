# 🧼 LatherMind - AI Soap Analysis

LatherMind is a React web application that uses Machine Learning (TensorFlow.js) and Computer Vision (OpenCV.js) to analyze soap images and generate Soapliness Index™ scores with downloadable certificates.

## ✨ Features

- **🧠 ML Classification** - Powered by Teachable Machine & TensorFlow.js
- **🔍 Shape + Color Analysis** - OpenCV.js live processing  
- **📊 Confidence Graph** - Class probability visualization
- **🎭 Funny Nicknames** - Every soap gets a title
- **🖼️ Live Preview Panel** - Original, Binary Mask, Edges, Color Histogram
- **📄 Downloadable PNG Certificate** - Shareable on WhatsApp
- **⚡ Instant Score** - Soapliness Index (0–100)

## 🛠️ Tech Stack

### Frontend
- **React 18 + TypeScript** - Component-based UI
- **Vite** - Fast dev server & build tool  
- **Tailwind CSS** - Utility-first styling
- **TensorFlow.js** - Runs ML inference in the browser
- **OpenCV.js** - Image processing
- **HTML2Canvas** - Certificate generation

### Libraries
- **@tensorflow/tfjs** - Machine learning in the browser
- **OpenCV.js** - Computer vision processing
- **html2canvas** - DOM to canvas conversion
- **React Query** - Data fetching and caching
- **Wouter** - Lightweight routing
- **Shadcn/UI** - Modern component library

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/lathermind.git
cd lathermind
