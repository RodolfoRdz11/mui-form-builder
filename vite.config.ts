import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'MuiFormbuilder',
      formats: ['es', 'umd'],
      fileName: (format) => `mui-form-builder.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@mui/styles',
        '@mui/material',
        '@mui/styled-engine',
        '@emotion/react',
        '@emotion/styled'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/styles': 'MuiStyles',
          '@mui/material': 'Mui',
          '@mui/styled-engine': 'MuiStyledEngine',
          '@emotion/react': 'EmotionReact',
          '@emotion/styled': 'EmotionStyled'
        },
      },
    },
  },
})
