import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'it.lola.games',
  appName: 'lolachess',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
