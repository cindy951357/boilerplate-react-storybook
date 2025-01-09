export default {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // 引入 jest.setup.js
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // 使用 Babel
    },
  };