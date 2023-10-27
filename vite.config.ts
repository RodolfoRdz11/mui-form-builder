import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import glob from 'glob'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src']
    })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
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
      // input: Object.fromEntries(
      //   glob.sync('src/**/*.{ts,tsx}').map(file => [
      //     // The name of the entry point
      //     // lib/nested/foo.ts becomes nested/foo
      //     relative(
      //       'src',
      //       file.slice(0, file.length - extname(file).length)
      //     ),
      //     // The absolute path to the entry file
      //     // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
      //     fileURLToPath(new URL(file, import.meta.url))
      //   ])
      // ),
      // output: {
      //   globals: {
      //     react: 'React',
      //     'react-dom': 'ReactDOM',
      //     '@mui/styles': 'MuiStyles',
      //     '@mui/material': 'Mui',
      //     '@mui/styled-engine': 'MuiStyledEngine',
      //     '@emotion/react': 'EmotionReact',
      //     '@emotion/styled': 'EmotionStyled'
      //   },
      //   // entryFileNames: '[name].js',
      // },
    },
  },
})
