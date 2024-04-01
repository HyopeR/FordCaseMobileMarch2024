import React, {useMemo} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';
import {GtIconButton, GtView} from '@components/commons';
import {AppDrawer} from '@components/specifics';
import {useAppDispatch, useAppSelector} from '@stores/hooks';
import {PreferenceAct} from '@actions/PreferenceAction';
import {getRouteStyle} from '@utils/theme.utils';
import {MainDrawerParams, MainDrawerRoute} from './index.type';

import MainHomeScreen from '@screens/main.home';
import {Keyboard} from 'react-native';

const MainDrawer = createDrawerNavigator<MainDrawerParams>();

const MainDrawerNavigation = () => {
  const {colors} = useTheme();

  const dispatch = useAppDispatch();

  const {numColumns} = useAppSelector(store => store.preferenceSto);

  const routeStyle = useMemo(() => getRouteStyle(colors), [colors]);

  return (
    <MainDrawer.Navigator
      initialRouteName={'main_drawer.home'}
      drawerContent={props => <AppDrawer {...props} />}>
      <MainDrawer.Screen
        name={'main_drawer.home'}
        component={MainHomeScreen}
        options={({navigation}) => ({
          title: 'Home',
          headerShown: true,
          headerLeft: () => (
            <GtIconButton
              icon={'Menu'}
              onPress={() => {
                Keyboard.dismiss();
                navigation?.toggleDrawer();
              }}
            />
          ),
          headerRight: () => (
            <GtView style={{flexDirection: 'row'}}>
              <GtIconButton
                icon={'Col1'}
                iconProps={{
                  color: numColumns === 1 ? colors.white() : colors.white(0.5),
                }}
                onPress={() => dispatch(PreferenceAct.setNumColumns(1))}
              />
              <GtIconButton
                icon={'Col2'}
                iconProps={{
                  color: numColumns === 2 ? colors.white() : colors.white(0.5),
                }}
                onPress={() => dispatch(PreferenceAct.setNumColumns(2))}
              />
            </GtView>
          ),
          ...routeStyle,
        })}
      />
    </MainDrawer.Navigator>
  );
};

export default MainDrawerNavigation;
export type {MainDrawerParams, MainDrawerRoute};
