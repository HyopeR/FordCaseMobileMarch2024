import React, {useMemo} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import {Navigation} from '@helpers/navigation';
import {GtIconButton} from '@components/commons';
import {getRouteStyle} from '@utils/theme.utils';
import {RootStackParams, RootStackRoute} from './Router.type';

import RootHomeScreen from '@screens/root.home';
import RootDetailScreen from '@screens/root.detail';

const RootStack = createStackNavigator<RootStackParams>();

const Router = () => {
  const {colors} = useTheme();

  const routeStyle = useMemo(() => getRouteStyle(colors), [colors]);

  return (
    <RootStack.Navigator initialRouteName={'root.home'}>
      <RootStack.Screen
        name={'root.home'}
        component={RootHomeScreen}
        options={{
          title: 'Home',
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          ...routeStyle,
        }}
      />

      <RootStack.Screen
        name={'root.detail'}
        component={RootDetailScreen}
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

export default Router;
export type {RootStackParams, RootStackRoute};
