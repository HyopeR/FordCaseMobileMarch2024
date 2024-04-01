import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParams, RootStackRoute} from './Router.type';

import MainNavigation from '@routes/main.stack';

const RootStack = createStackNavigator<RootStackParams>();

const Router = () => {
  return (
    <RootStack.Navigator initialRouteName={'root.app'}>
      <RootStack.Screen
        name={'root.app'}
        component={MainNavigation}
        options={{
          title: 'App',
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default Router;
export type {RootStackParams, RootStackRoute};
