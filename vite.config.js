import imagemin from "vite-plugin-imagemin";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";

export default {
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(ico|png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name)) {
            return 'assets/img/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
        chunkFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
  plugins: [
    imagemin({
      verbose: true,
      gifsicle: {
        optimizationLevel: 3
      },
      optipng: {
        optimizationLevel: 5
      },
      mozjpeg: {
        quality: 75
      },
      pngquant: {
        quality: [0.6, 0.8],
        speed: 4
      },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false }
        ]
      }
    }),
    react(),
  ],
}
