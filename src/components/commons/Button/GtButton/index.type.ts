import {TouchableOpacityProps} from 'react-native';

export type GtButtonProps = {
  color?: any;
  width?: number | string;
  height?: number | string;
  text?: string;
  textColor?: string;
} & TouchableOpacityProps;
