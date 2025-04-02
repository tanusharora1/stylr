# Stylr Mobile App

## Deployment Guide

### Prerequisites

- Node.js and npm installed
- Expo CLI: `npm install -g expo-cli`
- For iOS: Xcode and Apple Developer account
- For Android: Android Studio and Google Play Developer account

### Building for Production

#### iOS

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build for iOS:
   ```bash
   expo build:ios
   ```
   - Choose between Archive (App Store) or Simulator
   - Follow prompts to sign in with your Apple Developer account
   - Configure certificates and provisioning profiles

3. Submit to App Store:
   - Open Xcode
   - Use Archive Manager to upload to App Store Connect
   - Complete app metadata and screenshots in App Store Connect
   - Submit for review

#### Android

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build for Android:
   ```bash
   expo build:android
   ```
   - Choose between APK or Android App Bundle (preferred)
   - Follow prompts to configure keystore

3. Submit to Google Play:
   - Log in to Google Play Console
   - Create a new app release
   - Upload the AAB file
   - Complete store listing, content rating, and pricing
   - Submit for review

### Environment Setup

1. Create a keystore for Android:
   ```bash
   expo fetch:android:keystore
   ```

2. Set up iOS certificates:
   ```bash
   expo fetch:ios:certs
   ```

### App Store Assets

- App Icon: Located in `./assets/icon.svg`
- Screenshots: Minimum 3 screenshots per device type
- App description and keywords
- Privacy policy URL
- Support contact information

### Version Management

- Update version numbers in `app.json`
- iOS: Update `buildNumber`
- Android: Increment `versionCode`

### Testing

Before submission:
1. Test on multiple devices
2. Verify all features work offline
3. Check performance and memory usage
4. Validate data privacy compliance