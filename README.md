# LatherMind - AI Soap Analysis Application

LatherMind is a React web application that combines Machine Learning (TensorFlow.js) and Computer Vision (OpenCV.js) to analyze soap images and generate a "Soapliness Index™" score. The application classifies soap types, performs image analysis, and produces downloadable certificates with funny nicknames and detailed scoring breakdowns.

## Features

- **Image Upload & Camera Support**: Upload soap images or use device camera
- **ML Classification**: TensorFlow.js-powered classification into 3 soap categories:
  - 🧼 Brick of Purity (Bar Soap)
  - 🧴 Potion of Cleanliness (Liquid Soap)  
  - 🧽 Soap Doppelgänger (Not Soap)
- **Computer Vision Analysis**: OpenCV.js processes images for:
  - Color histogram analysis
  - Edge detection (Canny algorithm)
  - Contour analysis for shape evaluation
  - Laplacian variance for sharpness assessment
- **Soapliness Index™ Scoring**: Combines ML and CV metrics for 0-100 score
- **Certificate Generation**: Downloadable PNG certificates with humor nicknames
- **WhatsApp Sharing**: Share results on social media

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI**: Tailwind CSS, shadcn/ui components
- **Machine Learning**: TensorFlow.js, Teachable Machine integration
- **Computer Vision**: OpenCV.js
- **Certificate Generation**: html2canvas
- **Backend**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL support

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## Usage

1. **Upload an Image**: Click "Upload Image" or drag & drop a soap image
2. **Use Camera**: Click "Use Camera" for real-time capture
3. **View Results**: See classification confidence, OpenCV analysis, and Soapliness Score
4. **Generate Certificate**: Download a shareable PNG certificate
5. **Share on WhatsApp**: Share your results with friends

## Project Structure

```
├── client/src/
│   ├── components/     # React components
│   ├── lib/           # TensorFlow.js, OpenCV.js, scoring logic
│   ├── pages/         # Application pages
│   └── types/         # TypeScript type definitions
├── server/            # Express.js backend
└── shared/            # Shared schemas and types
```

## Deployment

### Vercel Deployment

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Configure environment variables in Vercel dashboard if needed

### GitHub Deployment

The project is ready for GitHub Pages or other static hosting:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

## Development

### Adding New Soap Classifications

1. Update `SOAP_CLASSES` in `client/src/lib/scoring.ts`
2. Modify the scoring algorithm as needed
3. Update TypeScript types in `client/src/types/soap-analysis.ts`

### Customizing Analysis

- **TensorFlow Model**: Update the model URL in `client/src/lib/tensorflow.ts`
- **OpenCV Processing**: Modify image processing in `client/src/lib/opencv.ts`
- **Scoring Algorithm**: Adjust weights in `client/src/lib/scoring.ts`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please create a GitHub issue or contact the development team.