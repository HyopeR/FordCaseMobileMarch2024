import {UserRepos} from '@helpers/types';
import {GtTouchProps} from '@components/commons';

export type UserRepoItemProps = {
  item: UserRepos[0];
  index?: number;
  touchProps?: GtTouchProps;
};
