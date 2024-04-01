import UserApi from '@api/user.api';
import {HttpRequestConfig} from '@core/http';
import {AppThunk} from '@stores';
import {User, UserRepos} from '@helpers/types';

export const getUser = (
  username: string,
  config?: HttpRequestConfig,
): AppThunk<Promise<User | undefined>> => {
  return async () => {
    const [err, res] = await UserApi.getUser<User>(username, config);
    return res?.data;
  };
};

export const getUserRepos = (
  username: string,
  config?: HttpRequestConfig,
): AppThunk<Promise<UserRepos | undefined>> => {
  return async () => {
    const [err, res] = await UserApi.getUserRepos<UserRepos>(username, config);
    return res?.data;
  };
};
