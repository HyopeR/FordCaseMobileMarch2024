import Config from 'react-native-config';
import {http} from './http';

const client = http.client;
const {request, response} = client.interceptors;

request.use(
  async config => {
    const tokenProps = Config.GITHUB_API_KEY
      ? {Authorization: `Bearer ${Config.GITHUB_API_KEY}`}
      : undefined;

    config.headers = {...config.headers, ...tokenProps};

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

response.use(
  response => {
    console.log(response?.request?.responseURL);
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export {};
