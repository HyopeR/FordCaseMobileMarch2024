import React from 'react';
import {RefreshControl} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {GtRefreshControlProps} from './index.type';

const GtRefreshControl = ({colors, ...props}: GtRefreshControlProps) => {
  const {colors: themeColors} = useTheme();

  const tintColors = Array.isArray(colors) ? colors : [themeColors.primary];
  const tintColor = tintColors[0];

  return (
    <RefreshControl colors={tintColors} tintColor={tintColor} {...props} />
  );
};

export default GtRefreshControl;
export type {GtRefreshControlProps};
