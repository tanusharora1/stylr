# Stylr Deployment Guide

## Web Application (Next.js)

### Prerequisites
- Node.js and npm installed
- Vercel account
- Git repository

### Deployment Steps

1. **Prepare for Deployment**
   ```bash
   # Install dependencies
   npm install

   # Build the application
   npm run build
   ```

2. **Deploy to Vercel**
   - Install Vercel CLI: `npm i -g vercel`
   - Login to Vercel: `vercel login`
   - Deploy: `vercel`
   - For production: `vercel --prod`

3. **Environment Variables**
   - Set up environment variables in Vercel dashboard
   - Ensure all API keys and secrets are properly configured

4. **Domain Configuration**
   - Add custom domain in Vercel dashboard
   - Configure DNS settings
   - Enable HTTPS

5. **Post-Deployment**
   - Verify all routes work correctly
   - Check image optimization
   - Test performance using Vercel Analytics

## Mobile Application

### Prerequisites
- Node.js and npm installed
- Expo CLI: `npm install -g expo-cli`
- Apple Developer account (for iOS)
- Google Play Developer account (for Android)

### iOS Deployment

1. **Prepare App Store Assets**
   - App Icon: Use `./mobile/assets/icon.svg`
   - Screenshots (minimum 3 per device)
   - App description and keywords
   - Privacy policy

2. **Build for iOS**
   ```bash
   cd mobile
   npm install
   expo build:ios
   ```

3. **Submit to App Store**
   - Use Xcode to upload build
   - Configure App Store Connect
   - Submit for review

### Android Deployment

1. **Prepare Play Store Assets**
   - App Icon: Use `./mobile/assets/icon.svg`
   - Feature graphic
   - Screenshots (minimum 3 per device)
   - App description

2. **Build for Android**
   ```bash
   cd mobile
   npm install
   expo build:android
   ```

3. **Submit to Play Store**
   - Upload AAB to Google Play Console
   - Complete store listing
   - Submit for review

### Version Management

1. **Web Version**
   - Update version in `package.json`
   - Tag releases in Git

2. **Mobile Version**
   - Update version in `mobile/app.json`
   - iOS: Update `buildNumber`
   - Android: Increment `versionCode`

### Monitoring

1. **Web Application**
   - Use Vercel Analytics
   - Monitor error rates
   - Track performance metrics

2. **Mobile Application**
   - Use App Store Connect analytics
   - Monitor Google Play Console metrics
   - Track crash reports

### Security Considerations

- Keep all API keys secure
- Use environment variables
- Regular security updates
- SSL/TLS configuration
- Data encryption in transit