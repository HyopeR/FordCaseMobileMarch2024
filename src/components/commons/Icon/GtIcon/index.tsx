import React from 'react';
import {useTheme} from '@react-navigation/native';
import * as Icons from '@components/icons';
import {fontStyles} from '@styles';
import {GtIconProps, GtIconKey} from './index.type';

const GtIcon = ({name, size, color, ...props}: GtIconProps) => {
  const {colors} = useTheme();

  const iconColor = color || colors.text;
  const iconSize = size || fontStyles.icon;

  const TargetIcon = Icons[name];
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

export default GtIcon;
export type {GtIconProps, GtIconKey};
