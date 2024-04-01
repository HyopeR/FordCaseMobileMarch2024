import {http, HttpRequestConfig} from '@core/http';
import {api} from '@core/url';

class UserApi {
  base = `${api}/users`;

  getUser = async <T>(username: string, config?: HttpRequestConfig) => {
    return http.get<T>(`${this.base}/${username}`, config).toPromiseArray();
  };

  getUserRepos = async <T>(username: string, config?: HttpRequestConfig) => {
    return http
      .get<T>(`${this.base}/${username}/repos`, config)
      .toPromiseArray();
  };
}

export default new UserApi();
