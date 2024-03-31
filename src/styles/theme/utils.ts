import Dark from './dark';
import Light from './light';
import {ThemeMode} from './index.type';

const Themes = {dark: Dark, light: Light};

export const getTheme = (mode: ThemeMode) => Themes[mode];
