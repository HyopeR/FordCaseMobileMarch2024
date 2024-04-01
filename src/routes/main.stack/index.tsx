import React, {useMemo} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import {Navigation} from '@helpers/navigation';
import {GtIconButton} from '@components/commons';
import {getRouteStyle} from '@utils/theme.utils';
import {MainStackParams, MainStackRoute} from './index.type';

import MainDrawerNavigation from '@routes/main.drawer';
import MainDetailScreen from '@screens/main.detail';

const RootStack = createStackNavigator<MainStackParams>();

const MainNavigation = () => {
  const {colors} = useTheme();

  const routeStyle = useMemo(() => getRouteStyle(colors), [colors]);

  return (
    <RootStack.Navigator initialRouteName={'main.home'}>
      <RootStack.Screen
        name={'main.home'}
        component={MainDrawerNavigation}
        options={{
          title: 'Home',
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          ...routeStyle,
        }}
      />

      <RootStack.Screen
        name={'main.detail'}
        component={MainDetailScreen}
        options={{
          title: 'Detail',
          headerShown: true,
          headerLeft: () => (
            <GtIconButton
              icon={'ChevronLeft'}
              onPress={() => Navigation.goBack()}
            />
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          ...routeStyle,
        }}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigation;
export type {MainStackParams, MainStackRoute};
