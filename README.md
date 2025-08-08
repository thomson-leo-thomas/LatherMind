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

## 🚀 Live Demo

- **Vercel**: [lathermind.vercel.app](https://lathermind.vercel.app)
- **GitHub Pages**: [your-username.github.io/lathermind](https://your-username.github.io/lathermind)

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

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/lathermind.git
   cd lathermind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 🔧 Build & Deployment

### Development
```bash
npm run dev        # Start development server
npm run check      # Type checking
```

### Production Build
```bash
npm run build      # Build for production
npm run start      # Start production server
npm run preview    # Preview production build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel`

### Deploy to GitHub Pages
1. Build the project: `npm run build`
2. Deploy: `npx gh-pages -d dist/public`

## 🧪 Image Processing Pipeline

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

## 🔍 API Endpoints

- `GET /` - Serve React application
- `POST /api/analyze` - Process soap image analysis
- `GET /api/health` - Health check endpoint

## 🧩 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Acknowledgments

- [TensorFlow.js](https://www.tensorflow.org/js) - Machine learning framework
- [OpenCV.js](https://docs.opencv.org/3.4/d5/d10/tutorial_js_root.html) - Computer vision library
- [Teachable Machine](https://teachablemachine.withgoogle.com/) - Model training platform
- [shadcn/ui](https://ui.shadcn.com/) - UI component library

## 🐛 Known Issues

- OpenCV.js model loading may show warnings in console (normal behavior)
- Large images may take longer to process
- Some edge cases in color detection for transparent soaps

## 📧 Support

For questions or support, please open an issue on GitHub or contact [your-email@example.com](mailto:your-email@example.com).

---

Made with 🧼 and ❤️ by [Your Name]