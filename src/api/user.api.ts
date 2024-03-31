import {http, HttpRequestConfig} from '@core/http';
import {api} from '@core/url';

class UserApi {
  base = `${api}/users`;

  getUserRepos = async (username: string, config: HttpRequestConfig) => {
    return http.get(`${this.base}/${username}/repos`, config).toPromiseArray();
  };
}

export default new UserApi();
