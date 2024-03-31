import React from 'react';
import {StyleSheet} from 'react-native';
import {GtView} from '@components/commons';
import {GtLayoutProps} from './index.type';

const GtLayout = ({style, children, ...props}: GtLayoutProps) => {
  return (
    <GtView style={StyleSheet.compose(styles.wrapper, style)} {...props}>
      {children}
    </GtView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default GtLayout;
export type {GtLayoutProps};
