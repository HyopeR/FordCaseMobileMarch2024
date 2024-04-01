import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParams = {
  'root.app': undefined;
};

export type RootStackRoute<Route extends keyof RootStackParams> =
  StackScreenProps<RootStackParams, Route>;
