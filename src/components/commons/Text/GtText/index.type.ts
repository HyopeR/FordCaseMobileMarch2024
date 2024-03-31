import {TextProps} from 'react-native';

export type GtTextProps = {
  color?: string;
  size?: number;
  medium?: boolean;
  bold?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  underline?: boolean;
} & TextProps;
