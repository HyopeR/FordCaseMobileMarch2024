import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {GtViewProps} from './index.type';

const GtView = ({
  color,
  width,
  height,
  style,
  children,
  ...props
}: GtViewProps) => {
  const styleCustom = useMemo(() => {
    return [
      color && {backgroundColor: color},
      width && {width},
      height && {height},
    ] as any;
  }, [color, height, width]);

  return (
    <View style={StyleSheet.compose(styleCustom, style)} {...props}>
      {children}
    </View>
  );
};

export default GtView;
export type {GtViewProps};
