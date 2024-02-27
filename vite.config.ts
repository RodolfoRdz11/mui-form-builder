import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'], insertTypesEntry: true }),
    svgr({ include: '**/*.svg' })
  ],
  resolve: {
    alias: {
      'src': '/src'
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@mui/material',
      '@emotion/react',
      '@emotion/styled',
      '@mui/icons-material',
      '@mui/x-date-pickers',
      'react/jsx-runtime',
      'tss-react'
    ]
  },
  build: {
    lib: {
      name: '@kredimx/form-builder',
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
      fileName: format => `index.${format}.js`
    },
    target: 'esnext',
    minify: true,
    copyPublicDir: false,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-is',
        '@mui/material',
        '@emotion/react',
        '@emotion/styled',
        '@mui/icons-material',
        '@mui/x-date-pickers',
        'react/jsx-runtime',
        'tss-react'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-is': 'reactIs',
          '@mui/material': 'mui',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
          '@mui/icons-material': 'muiIcons',
          '@mui/x-date-pickers': 'xDatePickers',
          'react/jsx-runtime': 'jsxRuntime',
          'tss-react': 'tssReact'
        }
      }
    }
  },
})
