import {Theme} from '@styles/theme';
import {fontStyles} from '@styles';

export const getRouteStyle = (colors: Theme['colors']) => {
  return {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white(),
      fontSize: fontStyles.title,
    },
  };
};
