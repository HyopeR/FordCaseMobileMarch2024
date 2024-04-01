import React, {ForwardedRef, useMemo} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {spaceStyles} from '@styles';
import GtText from '../../Text/GtText';
import {GtInputNs} from './index.type';

const GtInput = (
  {color, width, height, error, editable, style, ...props}: GtInputNs.Props,
  ref: ForwardedRef<TextInput>,
) => {
  const {colors} = useTheme();

  const styleCustom = useMemo(() => {
    return [
      {color: colors.text},
      {backgroundColor: colors.backgroundSecondary},
      color && {backgroundColor: color},
      editable === false && {opacity: 0.6},
      width && {width},
      height && {height},
    ] as any;
  }, [color, colors.backgroundSecondary, colors.text, editable, height, width]);

  return (
    <>
      <TextInput
        ref={ref}
        cursorColor={colors.primary}
        selectionColor={colors.primaryLight}
        underlineColorAndroid={'transparent'}
        placeholderTextColor={colors.textPale}
        editable={editable}
        style={StyleSheet.compose([styles.wrapper, styleCustom], style)}
        {...props}
      />

      {error && (
        <GtText capitalize color={colors.notification} style={styles.error}>
          {error}
        </GtText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    paddingHorizontal: spaceStyles.sm,
  },
  error: {
    marginTop: spaceStyles.sm,
  },
});

export default React.forwardRef<TextInput, GtInputNs.Props>(GtInput);
export type {GtInputNs};
