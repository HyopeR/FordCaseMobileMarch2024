import * as Spinners from 'react-native-animated-spinkit';
import {SvgProps} from 'react-native-svg';

export type GtSpinnerKey = keyof typeof Spinners;
export type GtSpinnerProps = {
  name?: GtSpinnerKey;
  size?: number;
  color?: string;
  animating?: boolean;
  hidesWhenStopped?: boolean;
} & SvgProps;
