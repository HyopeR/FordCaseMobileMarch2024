import React from 'react';
import {StyleSheet} from 'react-native';
import {GtIcon, GtText, GtView} from '@components/commons';
import {UserRepoRowProps} from './index.type';
import {fontStyles} from '@styles';

export const UserRepoRow = ({
  icon,
  title,
  text = '',
  iconProps,
  titleProps,
  textProps,
  ...props
}: UserRepoRowProps) => {
  const {style, ...omitProps} = props;

  return (
    <GtView style={StyleSheet.compose(styles.row, style)} {...omitProps}>
      <GtView style={styles.rowLeft}>
        <GtIcon size={fontStyles.title} {...iconProps} name={icon} />
        <GtText style={styles.title} {...titleProps}>
          {title}
        </GtText>
      </GtView>

      <GtText medium {...textProps}>
        {text}
      </GtText>
    </GtView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
    height: 25,
    alignItems: 'center',
  },
  title: {
    marginLeft: 4,
  },
});
