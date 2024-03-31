import '@react-navigation/native';

export type ThemeMode = 'light' | 'dark';
export type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;

    text: string;
    textPale: string;
    textPlaceholder: string;

    background: string;
    backgroundSecondary: string;

    white: (opacity?: number) => string;
    black: (opacity?: number) => string;
    contrast: (opacity?: number) => string;

    border: string;
    notification: string;
    card: string;
  };
};

declare module '@react-navigation/native' {
  export type ThemeExtend = Theme;
  export function useTheme(): ThemeExtend;
}
