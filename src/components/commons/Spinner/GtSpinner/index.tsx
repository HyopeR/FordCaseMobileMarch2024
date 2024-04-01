import React from 'react';
import * as Spinners from 'react-native-animated-spinkit';
import {useTheme} from '@react-navigation/native';
import {fontStyles} from '@styles';
import {GtSpinnerKey, GtSpinnerProps} from './index.type';

const GtSpinner = ({
  name = 'Circle',
  size,
  color,
  ...props
}: GtSpinnerProps) => {
  const {colors} = useTheme();

  const iconColor = color || colors.text;
  const iconSize = size || fontStyles.icon;

  const TargetIcon = Spinners[name];
  return TargetIcon ? (
    <TargetIcon
      height={iconSize}
      width={iconSize}
      color={iconColor}
      {...props}
    />
  ) : (
    <></>
  );
};

export default GtSpinner;
export type {GtSpinnerProps, GtSpinnerKey};
