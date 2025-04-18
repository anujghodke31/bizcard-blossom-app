
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.871ad6160d62457aa712b6ecc8a90125',
  appName: 'bizcard-blossom-app',
  webDir: 'dist',
  server: {
    url: 'https://871ad616-0d62-457a-a712-b6ecc8a90125.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      androidxCore: '1.5.0',
      androidxAppCompat: '1.3.0',
      androidxWebkit: '1.4.0'
    }
  }
};

export default config;
