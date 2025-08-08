# LatherMind - AI Soap Analysis Application

## Overview

LatherMind is a React web application that combines Machine Learning (TensorFlow.js) and Computer Vision (OpenCV.js) to analyze soap images and generate a "Soapliness Index™" score. The application classifies soap types, performs image analysis, and produces downloadable certificates with funny nicknames and detailed scoring breakdowns. Built with modern web technologies including React 18, TypeScript, Vite, and Tailwind CSS, the application runs entirely in the browser for instant analysis.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a modern React component-based architecture built with Vite for fast development and optimized builds. The UI is constructed using shadcn/ui components with Tailwind CSS for styling, providing a responsive and accessible interface. The client-side routing is handled by Wouter, a lightweight React router, with the main application flow being a single-page experience.

### Machine Learning Pipeline
The ML classification system integrates TensorFlow.js to run pre-trained Teachable Machine models directly in the browser. The model classifies images into three soap categories: "Brick of Purity" (bar soap), "Potion of Cleanliness" (liquid soap), and "Soap Doppelgänger" (not soap). The system includes fallback mock model creation for demonstration purposes when external models aren't available.

### Computer Vision Processing
OpenCV.js handles advanced image processing tasks including color histogram analysis, edge detection using Canny algorithms, contour analysis for shape evaluation, and Laplacian variance calculation for sharpness assessment. The system processes images to extract measurable visual data that feeds into the scoring algorithm.

### Scoring Algorithm
The Soapliness Index™ combines ML classification confidence with computer vision metrics. The scoring system evaluates class type, dominant colors, shape quality, and image sharpness, each contributing weighted points to generate a final score between 0-100. The algorithm also assigns humorous nicknames from a predefined list.

### Certificate Generation
The application uses html2canvas to convert DOM elements into downloadable PNG certificates. This allows users to share their soap analysis results as image files, complete with scoring breakdowns and visual branding.

### Backend Architecture
The server follows an Express.js pattern with TypeScript support. The architecture includes a modular route registration system, middleware for request logging, and error handling. The backend is designed to be minimal, focusing on serving the React application and providing API endpoints for potential future features.

### State Management
The application uses React Query (@tanstack/react-query) for server state management and caching, though the current implementation is primarily client-side. Local component state manages UI interactions, image uploads, and analysis results.

### Database Layer
The project includes Drizzle ORM configuration with PostgreSQL support, though the current implementation uses in-memory storage. The schema defines a basic user system with id, username, and password fields, prepared for future authentication features.

## External Dependencies

### Machine Learning Services
- **TensorFlow.js**: Provides browser-based machine learning inference capabilities
- **Teachable Machine**: Integration point for custom-trained image classification models
- **OpenCV.js**: Computer vision library for advanced image processing

### UI and Styling Libraries
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Icon library providing consistent iconography
- **html2canvas**: DOM-to-canvas conversion for certificate generation

### Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin support
- **TypeScript**: Static type checking for improved code reliability
- **PostCSS**: CSS processing with Tailwind integration

### Database and ORM
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database service (configured via @neondatabase/serverless)

### Utility Libraries
- **Wouter**: Lightweight client-side routing
- **date-fns**: Date manipulation utilities
- **clsx & tailwind-merge**: Conditional CSS class management
- **nanoid**: Unique ID generation

### External CDN Resources
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library via CDN
- **OpenCV.js**: Loaded via CDN for computer vision capabilities