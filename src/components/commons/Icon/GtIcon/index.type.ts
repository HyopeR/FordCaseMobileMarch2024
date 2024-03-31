import {SvgProps} from 'react-native-svg';
import * as Icons from '@components/icons';

export type GtIconKey = keyof typeof Icons;
export type GtIconProps = {
  name: GtIconKey;
  size?: number;
  color?: string;
} & SvgProps;
