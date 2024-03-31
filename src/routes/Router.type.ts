import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParams = {
  'root.home': undefined;
  'root.detail': undefined;
};

export type RootStackRoute<Route extends keyof RootStackParams> =
  StackScreenProps<RootStackParams, Route>;
