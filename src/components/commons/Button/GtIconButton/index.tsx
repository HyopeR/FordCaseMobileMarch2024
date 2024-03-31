import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import GtIcon from '../../Icon/GtIcon';
import {fontStyles} from '@styles';
import {GtIconButtonProps} from './index.type';

const GtIconButton = ({
  color,
  width,
  height,
  icon,
  iconProps,
  style,
  ...props
}: GtIconButtonProps) => {
  const {colors} = useTheme();

  const {color: iColor, size: iSize, ...omitIconProps} = iconProps || {};

  const iconColor = iColor || colors.white();
  const iconSize = iSize || fontStyles.big;

  const styleCustom = useMemo(() => {
    return [
      color && {backgroundColor: color},
      width && {width},
      height && {height},
    ] as any;
  }, [color, height, width]);

  return (
    <TouchableOpacity
      style={StyleSheet.compose([styles.wrapper, styleCustom], style)}
      {...props}>
      <GtIcon
        name={icon}
        color={iconColor}
        size={iconSize}
        {...omitIconProps}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GtIconButton;
export type {GtIconButtonProps};
