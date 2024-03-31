import React, {useEffect, useMemo} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {GtView} from '@components/commons';
import {GtLayout} from '@components/layouts';
import {useAppDispatch, useAppSelector} from '@stores/hooks';
import {setSplash} from '@actions/MemoryAction/memory.action';
import {fontStyles} from '@styles';
import {getAnimation} from './animation';
import {AppSplashProps} from './index.type';

const AppSplash = ({}: AppSplashProps) => {
  const dispatch = useAppDispatch();

  const {isSplash} = useAppSelector(store => store.memoryRepo);

  const {interpolates, animation} = useMemo(() => getAnimation(), []);

  useEffect(() => {
    if (isSplash) {
      animation.parallel.start(async () => {
        dispatch(setSplash(false));
      });
    }

    return () => {
      animation.parallel.stop();
      animation.parallel.reset();
    };
  }, [animation.parallel, dispatch, isSplash]);

  return (
    <GtLayout>
      <GtView style={styles.wrapper}>
        <Animated.Text style={[styles.text, {opacity: interpolates.opacity}]}>
          Ford Case Mobile March 2024
        </Animated.Text>
      </GtView>
    </GtLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fontStyles.title,
    textAlign: 'center',
  },
});

export default AppSplash;
export type {AppSplashProps};
