import {StackScreenProps} from '@react-navigation/stack';
import {UserRepos} from '@helpers/types';

export type MainStackParams = {
  'main.home': undefined;
  'main.detail': {userRepo?: UserRepos[0]};
};

export type MainStackRoute<Route extends keyof MainStackParams> =
  StackScreenProps<MainStackParams, Route>;
