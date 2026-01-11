import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = resolve(fileURLToPath(import.meta.url), '..');

const platforms = [
  'radreel',
  'flickreels',
  'dotdrama',
  'netshort',
  'shortmax',
  'starshort',
  'stardusttv',
  'dramadash',
  'dramawave',
  'dramabox',
  'viglo',
  'micro',
  'melolo',
  'meloshort',
  'reelife'
];

export default {
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        ...platforms.reduce((acc, platform) => {
          acc[platform] = resolve(__dirname, `src/platforms/${platform}/index.html`);
          return acc;
        }, {})
      },
      output: {
        entryFileNames: '[name]/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: false,
    middleware: true
  }
};
