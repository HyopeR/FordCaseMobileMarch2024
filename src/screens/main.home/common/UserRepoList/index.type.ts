import {GtFlatListNs} from '@components/commons';
import {UserRepos} from '@helpers/types';

export type UserRepoListProps = {loading?: boolean} & Omit<
  GtFlatListNs.Props<UserRepos[0]>,
  'renderItem'
>;
