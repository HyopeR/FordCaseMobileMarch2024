import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {GtTouchProps} from './index.type';

const GtTouch = ({
  color,
  width,
  height,
  style,
  children,
  ...props
}: GtTouchProps) => {
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
      <>{children}</>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
  },
});

export default GtTouch;
export type {GtTouchProps};
