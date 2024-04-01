import React, {useEffect, useMemo} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from '@stores/hooks';
import {getTheme, ThemeMode} from '@styles/theme';
import {Navigation} from '@helpers/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from '@routes';
import {AppSplash} from '@components/specifics';
import {MemoryAct} from '@actions/MemoryAction';
import {Connector} from '@services/Connector';

const Main = () => {
  const dispatch = useAppDispatch();

  const {mode} = useAppSelector(store => store.themeSto);
  const {isReady, isSplash} = useAppSelector(store => store.memorySto);

  useEffect(() => {
    Connector.register();

    return () => {
      Connector.unregister();
    };
  }, [dispatch]);

  const theme = useMemo(() => getTheme(mode as ThemeMode), [mode]);
  const ready = useMemo(() => isReady && !isSplash, [isReady, isSplash]);

  const onReady = () => {
    dispatch(MemoryAct.setReady(true));
  };

  const onStateChange = () => {
    Navigation.onStateChange();
  };

  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.primary}
      />

      <NavigationContainer
        ref={Navigation.ref}
        theme={theme}
        onReady={onReady}
        onStateChange={onStateChange}>
        {ready ? <Router /> : <AppSplash />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
});

export default Main;
