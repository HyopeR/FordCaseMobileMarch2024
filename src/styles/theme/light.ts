import {Theme} from './index.type';

export default {
  dark: false,
  colors: {
    primary: 'rgb(238, 85, 39)',
    primaryLight: 'rgb(255,133,94)',
    primaryDark: 'rgb(163, 61, 28)',

    text: 'rgb(28, 28, 28)',
    textPale: 'rgb(58, 58, 58)',
    textPlaceholder: 'rgb(88, 88, 88)',

    background: 'rgb(255, 255, 255)',
    backgroundSecondary: 'rgb(240, 240, 240)',

    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(25, 25, 25, ${opacity})`,
    contrast: (opacity = 1) => `rgba(25, 25, 25, ${opacity})`,

    border: 'rgb(78, 78, 78)',
    notification: 'rgb(204, 36, 36)',
    card: 'rgba(225, 225, 225)',
  },
} as Theme;
