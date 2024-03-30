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
        alias: {
          'react-native-sqlite-storage': 'react-native-quick-sqlite',
        },
      },
    ],
  ],
};
