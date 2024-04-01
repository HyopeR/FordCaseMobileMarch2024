import {StackScreenProps} from '@react-navigation/stack';

export type MainDrawerParams = {
  'main_drawer.home': undefined;
};

export type MainDrawerRoute<Route extends keyof MainDrawerParams> =
  StackScreenProps<MainDrawerParams, Route>;
