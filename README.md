# LatherMind - AI Soap Analysis Application

![LatherMind Logo](https://via.placeholder.com/800x200/4f46e5/ffffff?text=LatherMind)

LatherMind is a React web application that combines Machine Learning (TensorFlow.js) and Computer Vision (OpenCV.js) to analyze soap images and generate a "Soapliness Index™" score. The application classifies soap types, performs advanced image analysis, and produces downloadable certificates with humorous nicknames and detailed scoring breakdowns.

## 🧼 Features

- **AI-Powered Soap Classification**: Uses TensorFlow.js with Teachable Machine models to identify soap types
- **Advanced Image Processing**: OpenCV.js integration for color analysis, edge detection, and shape assessment
- **Real-time Analysis**: Browser-based processing for instant results
- **4-Column Image Processing Panel**: Original Image, Binary Mask, Canny Edges, and Color Histogram visualization
- **Downloadable Certificates**: Generate shareable PNG certificates with scoring details
- **Responsive Design**: Optimized for desktop and mobile devices


## 🛠 Technology Stack

### Frontend
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible UI components

### Machine Learning & Computer Vision
- **TensorFlow.js** - Browser-based ML inference
- **OpenCV.js** - Computer vision processing
- **Teachable Machine** - Custom model integration

### Backend
- **Express.js** - Node.js web framework
- **Drizzle ORM** - Type-safe database toolkit
- **PostgreSQL** - Relational database


LatherMind performs comprehensive image analysis through four main components:

1. **Original Image**: User-uploaded soap image
2. **Binary Mask**: Thresholded shape analysis using OpenCV
3. **Canny Edges**: Edge detection for outline quality assessment
4. **Color Histogram**: HSV/RGB color distribution analysis

## 🏆 Soapliness Index™ Scoring

The scoring algorithm evaluates:
- **Classification Confidence** (40%) - ML model certainty
- **Color Quality** (25%) - Dominant color assessment
- **Shape Analysis** (20%) - Edge clarity and contour smoothness
- **Image Sharpness** (15%) - Laplacian variance calculation

## 📁 Project Structure

```
lathermind/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── lib/           # Utility functions
│   │   ├── types/         # TypeScript definitions
│   │   └── pages/         # Route components
├── server/                # Express.js backend
├── shared/                # Shared types and schemas
├── .github/workflows/     # GitHub Actions
├── vercel.json           # Vercel deployment config
└── netlify.toml          # Netlify deployment config
```

## 🤝 Acknowledgments

- [TensorFlow.js](https://www.tensorflow.org/js) - Machine learning framework
- [OpenCV.js](https://docs.opencv.org/3.4/d5/d10/tutorial_js_root.html) - Computer vision library
- [Teachable Machine](https://teachablemachine.withgoogle.com/) - Model training platform
- [shadcn/ui](https://ui.shadcn.com/) - UI component library

## 🐛 Known Issues

- OpenCV.js model loading may show warnings in console (normal behavior)
- Large images may take longer to process
- Some edge cases in color detection for transparent soaps



Made with 🧼 and ❤️ by [Thomson Leo Thomas]