import React from 'react';
import {StyleSheet} from 'react-native';
import {GtText, GtView} from '@components/commons';
import {UserRepoDetailRowProps} from './index.type';

export const UserRepoDetailRow = ({
  title,
  text = '',
  titleProps,
  textProps,
  ...props
}: UserRepoDetailRowProps) => {
  const {style, ...omitProps} = props;

  return (
    <GtView style={StyleSheet.compose(styles.row, style)} {...omitProps}>
      {title && (
        <GtView style={styles.rowLeft}>
          <GtText {...titleProps}>{title}</GtText>
        </GtView>
      )}

      <GtText medium {...textProps}>
        {text}
      </GtText>
    </GtView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
