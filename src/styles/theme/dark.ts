import {Theme} from './index.type';

export default {
  dark: true,
  colors: {
    primary: 'rgb(238, 85, 39)',
    primaryLight: 'rgb(231, 130, 98)',
    primaryDark: 'rgb(163, 61, 28)',

    text: 'rgb(235, 235, 235)',
    textPale: 'rgb(195, 195, 195)',
    textPlaceholder: 'rgb(155, 155, 155)',

    background: 'rgb(25, 25, 25)',
    backgroundSecondary: 'rgb(40, 40, 40)',

    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(25, 25, 25, ${opacity})`,
    contrast: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

    border: 'rgb(185, 185, 185)',
    notification: 'rgb(204, 36, 36)',
    card: 'rgba(55, 55, 55)',
  },
} as Theme;
