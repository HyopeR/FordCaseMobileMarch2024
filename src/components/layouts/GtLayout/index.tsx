import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GtView} from '@components/commons';
import {GtLayoutProps} from './index.type';

const GtLayout = ({
  edges = ['bottom'],
  style,
  children,
  ...props
}: GtLayoutProps) => {
  const insets = useSafeAreaInsets();

  const wrapperStyle = useMemo(() => {
    return edges?.reduce((prev, edge) => {
      const key = 'padding'.concat(edge.toCapitalize());
      return {[key]: insets[edge], ...prev};
    }, {});
  }, [edges, insets]);

  return (
    <GtView
      style={StyleSheet.compose([styles.wrapper, wrapperStyle], style)}
      {...props}>
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
