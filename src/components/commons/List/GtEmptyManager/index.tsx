import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import GtBlock from '../../View/GtView';
import GtSpinner from '../../Spinner/GtSpinner';
import GtEmpty from '../GtEmpty';
import {GtEmptyManagerProps} from './index.type';

const GtEmptyManager = ({
  loaded,
  loading,
  loadingProps,
  emptyProps,
}: GtEmptyManagerProps) => {
  const {colors} = useTheme();

  if (loading) {
    return (
      <GtBlock style={styles.wrapperSpinner}>
        <GtSpinner color={colors.primary} {...loadingProps} />
      </GtBlock>
    );
  }

  if (loaded || loaded === undefined) {
    return <GtEmpty style={styles.wrapperEmpty} {...emptyProps} />;
  }

  return <></>;
};

const styles = StyleSheet.create({
  wrapperSpinner: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperEmpty: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GtEmptyManager;
export type {GtEmptyManagerProps};
