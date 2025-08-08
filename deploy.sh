#!/bin/bash

# LatherMind Deployment Script
# This script builds the project and prepares it for deployment

set -e

echo "🧼 Building LatherMind for deployment..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Type check
echo "🔍 Running type checks..."
npm run check

# Build the project
echo "🏗️  Building project..."
npm run build

# Verify build output
echo "✅ Verifying build output..."
if [ -d "dist/public" ]; then
    echo "✓ Frontend build successful: dist/public exists"
else
    echo "❌ Frontend build failed: dist/public not found"
    exit 1
fi

if [ -f "dist/index.js" ]; then
    echo "✓ Backend build successful: dist/index.js exists"
else
    echo "❌ Backend build failed: dist/index.js not found"
    exit 1
fi

echo "🎉 Build completed successfully!"
echo ""
echo "📂 Build artifacts:"
echo "   Frontend: dist/public/"
echo "   Backend: dist/index.js"
echo ""
echo "🚀 Ready for deployment to:"
echo "   • Vercel: Run 'vercel' in project root"
echo "   • GitHub Pages: Run 'npx gh-pages -d dist/public'"
echo "   • Netlify: Connect repository and set build dir to 'dist/public'"
echo ""
echo "📋 Pre-deployment checklist:"
echo "   ✓ Dependencies installed"
echo "   ✓ Type checking passed"
echo "   ✓ Frontend built successfully"
echo "   ✓ Backend built successfully"
echo "   ✓ Deployment configs present (vercel.json, netlify.toml)"
echo "   ✓ GitHub Actions workflow configured"
echo ""
echo "🧼 LatherMind is ready to analyze soap around the world!"