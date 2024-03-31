import React, {useMemo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {GtTextProps} from './index.type';
import {useTheme} from '@react-navigation/native';

const GtText = ({
  color,
  size,
  medium,
  bold,
  uppercase,
  lowercase,
  capitalize,
  underline,
  style,
  children,
  ...props
}: GtTextProps) => {
  const {colors} = useTheme();

  const styleCustom = useMemo(() => {
    return [
      {color: color || colors.text},
      color && {color},
      size && {fontSize: size},
      medium && styles.medium,
      bold && styles.bold,
      uppercase && styles.uppercase,
      lowercase && styles.lowercase,
      capitalize && styles.capitalize,
      underline && styles.underline,
    ] as any;
  }, [
    color,
    colors.text,
    size,
    medium,
    bold,
    uppercase,
    lowercase,
    capitalize,
    underline,
  ]);

  return (
    <Text style={StyleSheet.compose(styleCustom, style)} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  // weights
  medium: {
    fontWeight: '700',
  },
  bold: {
    fontWeight: '900',
  },

  // decorators
  uppercase: {
    textTransform: 'uppercase',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default GtText;
export type {GtTextProps};
