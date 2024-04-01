import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import GtText from '../../Text/GtText';
import GtView from '../../View/GtView';
import {GtEmptyProps} from './index.type';

const GtEmpty = ({
  text = 'No data found.',
  textColor,
  textProps,
  style,
  children,
  ...props
}: GtEmptyProps) => {
  const {colors} = useTheme();

  let _textColor = textColor ? textColor : colors.textPale;

  return (
    <GtView style={[styles.wrapper, style]} {...props}>
      <GtView>
        <GtText uppercase color={_textColor} {...textProps}>
          {text}
        </GtText>
      </GtView>

      {children}
    </GtView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    flexDirection: 'column',
  },
});

export default GtEmpty;
export type {GtEmptyProps};
