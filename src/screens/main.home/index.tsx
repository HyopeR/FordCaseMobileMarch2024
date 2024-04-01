import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {GtLayout} from '@components/layouts';
import {GtInput, GtPagination} from '@components/commons';
import {useAppDispatch, useAppSelector} from '@stores/hooks';
import {MainDrawerRoute} from '@routes';
import {spaceStyles} from '@styles';
import {User, UserRepos} from '@helpers/types';
import {usePaginator, useSearcher} from '@utils/hooks';
import {UserAct} from '@actions/UserAction';
import {UserRepoPaginator, UserSearcher} from './reference';
import {UserRepoList} from './common/UserRepoList';

const MainHomeScreen = ({}: MainDrawerRoute<'main_drawer.home'>) => {
  const {colors} = useTheme();

  const dispatch = useAppDispatch();

  const {numColumns} = useAppSelector(store => store.preferenceSto);

  const username = useSearcher(UserSearcher, []);
  const {page, take, total} = usePaginator(UserRepoPaginator, []);

  const [user, setUser] = useState<User | undefined>(undefined);
  const [userLoading, setUserLoading] = useState(true);

  const [userRepos, setUserRepos] = useState<UserRepos>([]);
  const [userReposLoading, setUserReposLoading] = useState(true);

  const loading = useMemo(
    () => userLoading || userReposLoading,
    [userLoading, userReposLoading],
  );

  const getUser = useCallback(
    async (username: string) => {
      setUserLoading(true);

      const user = await dispatch(UserAct.getUser(username)).delay(500);

      setUser(user);
      UserRepoPaginator.setState({
        refresh: true,
        page: 1,
        total: user ? user.public_repos : 0,
      });

      setUserLoading(false);
    },
    [dispatch],
  );

  const getUserRepos = useCallback(
    async (username: string, params?: Record<string, any>) => {
      setUserReposLoading(true);

      const userRepos = await dispatch(
        UserAct.getUserRepos(username, {params}),
      ).delay(500);

      if (userRepos) {
        setUserRepos(userRepos);
      }

      setUserReposLoading(false);
    },
    [dispatch],
  );

  useEffect(() => {
    getUser(username);
  }, [getUser, username]);

  useEffect(() => {
    if (user) {
      const params = {type: 'owner', page: page, per_page: take};
      getUserRepos(user.login, params);
    } else {
      setUserRepos([]);
    }
  }, [getUserRepos, page, take, user]);

  return (
    <GtLayout>
      <GtInput
        height={50}
        defaultValue={UserSearcher.textInitial}
        placeholder={'Enter username.'}
        color={colors.backgroundSecondary}
        onChangeText={value => UserSearcher.onChangeText(value)}
      />

      <UserRepoList
        numColumns={numColumns}
        data={loading ? [] : userRepos}
        loading={loading}
      />

      <GtPagination
        page={page}
        count={UserRepoPaginator.getPaginationCount(total)}
        onChange={value => UserRepoPaginator.setPage(value)}
        style={{padding: spaceStyles.sm, justifyContent: 'center'}}
      />
    </GtLayout>
  );
};

export default MainHomeScreen;
