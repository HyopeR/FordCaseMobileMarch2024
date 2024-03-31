module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json',
        ],
        alias: {
          'react-native-sqlite-storage': 'react-native-quick-sqlite',
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@core': './src/core',
          '@helpers': './src/helpers',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@stores': './src/stores',
          '@actions': './src/stores/actions',
          '@reducers': './src/stores/reducers',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
