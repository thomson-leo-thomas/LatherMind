# LatherMind Deployment Guide

This guide covers deploying LatherMind to various platforms including Vercel, GitHub Pages, and other hosting services.

## Pre-Deployment Checklist

✅ All TypeScript errors resolved  
✅ TensorFlow.js and OpenCV.js loading correctly  
✅ Image upload and camera functionality working  
✅ Certificate generation functional  
✅ WhatsApp sharing implemented  
✅ Responsive design verified  

## Vercel Deployment (Recommended)

Vercel provides excellent support for React + Express.js applications.

### Setup

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

### Configuration

Create `vercel.json` in project root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "client/**/*",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/client/dist/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### Environment Variables

Set in Vercel dashboard:
- `NODE_ENV=production`
- Any API keys if using external ML models

## GitHub Pages Deployment

For static deployment (client-only):

### Setup

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deployment script** to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v2
      
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Netlify Deployment

### Setup

1. **Connect repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy**

### Configuration

Create `netlify.toml`:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Railway Deployment

For full-stack deployment:

### Setup

1. **Install Railway CLI**:
   ```bash
   npm install -g @railway/cli
   ```

2. **Login**:
   ```bash
   railway login
   ```

3. **Initialize project**:
   ```bash
   railway init
   ```

4. **Deploy**:
   ```bash
   railway up
   ```

### Configuration

Create `railway.json`:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm run dev",
    "healthcheckPath": "/",
    "healthcheckTimeout": 300
  }
}
```

## Digital Ocean App Platform

### Setup

1. **Connect repository** to Digital Ocean
2. **Configure build**:
   - Build command: `npm run build`
   - Output directory: `dist`
3. **Deploy**

### Environment Variables

Set in Digital Ocean dashboard:
- `NODE_ENV=production`

## Performance Optimization

### Build Optimization

1. **Vite optimization** is already configured
2. **TensorFlow.js** loads from CDN for better caching
3. **OpenCV.js** loads from CDN

### CDN Integration

Consider using a CDN for static assets:
- Images: Upload sample soap images to CDN
- Libraries: Use CDN versions of TensorFlow.js and OpenCV.js

## SSL/HTTPS

Most platforms provide automatic SSL:
- ✅ Vercel: Automatic
- ✅ Netlify: Automatic  
- ✅ Railway: Automatic
- ✅ Digital Ocean: Automatic

## Custom Domain

### Vercel
1. Add domain in Vercel dashboard
2. Configure DNS records
3. SSL automatically provisioned

### GitHub Pages
1. Add `CNAME` file to repository
2. Configure DNS A records
3. Enable HTTPS in repository settings

## Monitoring

### Health Checks

The application includes basic health endpoints:
- `/`: Main application
- `/api/health`: API health check

### Error Tracking

Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Google Analytics for usage metrics

## Backup Strategy

### Code
- Repository automatically backed up on GitHub
- Use protected branches for production

### Data
- User uploads are processed client-side (no server storage)
- ML models loaded from external sources

## Security Considerations

1. **CORS**: Configured for production domains
2. **CSP**: Consider Content Security Policy headers
3. **Rate Limiting**: Implement if needed for API endpoints
4. **Input Validation**: Image file type validation implemented

## Troubleshooting

### Common Issues

1. **TensorFlow.js model fails to load**:
   - Check model URL accessibility
   - Verify CORS settings
   - Use fallback mock model for demo

2. **OpenCV.js fails to load**:
   - Check CDN availability
   - Implement fallback for demos

3. **Certificate generation fails**:
   - Verify html2canvas compatibility
   - Check canvas permissions

### Debug Mode

Enable debug logging in production:
```javascript
// In tensorflow.ts or opencv.ts
const DEBUG = process.env.NODE_ENV === 'development';
if (DEBUG) console.log('Debug info:', data);
```

## Post-Deployment Verification

1. ✅ Application loads correctly
2. ✅ Image upload works
3. ✅ Camera functionality works  
4. ✅ ML classification running
5. ✅ OpenCV analysis functional
6. ✅ Certificate generation works
7. ✅ WhatsApp sharing works
8. ✅ Mobile responsive design
9. ✅ Performance acceptable (<3s load)
10. ✅ Error handling graceful

## Updates and Maintenance

### Automated Deployments
- Configure CI/CD for automatic deployments
- Use staging environments for testing
- Implement rollback strategies

### Dependency Updates
- Regular security updates
- TensorFlow.js version compatibility
- OpenCV.js stability checks

---

For additional support, refer to platform-specific documentation or create an issue in the repository.