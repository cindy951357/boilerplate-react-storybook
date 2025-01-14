import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel'

export default defineConfig({
  plugins: [
    react(),
    babel({
      babelConfig: {
        presets: [
          [
            '@babel/preset-react', // 修正格式，應該是一個數組
            {
              runtime: 'automatic', // 適配 React JSX
            },
          ],
        ],
      },
      include: [
        /src\/libs\/react-big-calendar-embed\/.*\.js$/, // 僅針對目標目錄應用
      ],
    }),
  ],
  resolve: {
    alias: {
      'react-big-calendar-embed': '/src/libs/react-big-calendar-embed',
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 確保支持所有文件類型
  },
  esbuild: {
    loader: 'tsx',
    include: [
      /src\/.*\.[tj]sx?$/,
      /src\/libs\/react-big-calendar-embed\/.*\.js$/,
    ],
  },
})
