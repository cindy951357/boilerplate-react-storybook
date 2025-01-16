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
        /src\/libs\/react-big-calendar-manual\/.*\.js$/, // 僅針對目標目錄應用
      ],
    }),
  ],
  resolve: {
    alias: {
      'react-big-calendar-manual': './src/libs/react-big-calendar-manual/src',
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 確保支持所有文件類型
  },
  optimizeDeps: {
    include: ["react-big-calendar-manual"],
  },
  server: {
    // fs: {
    //   allow: ["./src/libs/react-big-calendar"],
    // },
  },
  /*
  esbuild: {
    loader: 'tsx',
    include: [
      /src\/.*\.[tj]sx?$/,
      /src\/libs\/react-big-calendar\/.*\.js$/,
    ],
  },*/
})
