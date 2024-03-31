import {TouchableOpacityProps} from 'react-native';
import {GtIconKey, GtIconProps} from '@components/commons/Icon/GtIcon';

export type GtIconButtonProps = {
  color?: any;
  width?: number | string;
  height?: number | string;
  icon: GtIconKey;
  iconProps?: Omit<GtIconProps, 'name'>;
} & TouchableOpacityProps;
