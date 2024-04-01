import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {GtText, GtTouch, GtView} from '@components/commons';
import {AppDrawerRowProps} from './index.type';

export const AppDrawerRow = ({
  title,
  text = '',
  titleProps,
  textProps,
  viewProps,
  height = 30,
  ...props
}: AppDrawerRowProps) => {
  const {colors} = useTheme();

  const {style: viewStyle, ...omitViewProps} = viewProps || {};

  return (
    <GtTouch color={colors.backgroundSecondary} height={height} {...props}>
      <GtView
        style={StyleSheet.compose(styles.row, viewStyle)}
        {...omitViewProps}>
        <GtText medium {...titleProps}>
          {title}
        </GtText>
        <GtText {...textProps}>{text}</GtText>
      </GtView>
    </GtTouch>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export type {AppDrawerRowProps};
