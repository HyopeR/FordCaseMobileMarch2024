import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import GtView from '../../View/GtView';
import GtText from '../../Text/GtText';
import {GtButtonProps} from './index.type';
import {fontStyles} from '@styles';

const GtButton = ({
  color,
  width,
  height,
  text,
  textColor,
  style,
  ...props
}: GtButtonProps) => {
  const {colors} = useTheme();

  const contentColor = textColor || colors.white();

  const styleCustom = useMemo(() => {
    return [
      {backgroundColor: color || colors.primary},
      width && {width},
      height && {height},
    ] as any;
  }, [color, colors.primary, height, width]);

  return (
    <TouchableOpacity
      style={StyleSheet.compose([styles.wrapper, styleCustom], style)}
      {...props}>
      <GtView style={styles.body}>
        <GtText style={styles.text} color={contentColor}>
          {text}
        </GtText>
      </GtView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fontStyles.subTitle,
  },
});

export default GtButton;
export type {GtButtonProps};
