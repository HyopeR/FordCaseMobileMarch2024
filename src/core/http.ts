import axios, {AxiosRequestConfig} from 'axios';
import qs from 'qs';

const AxiosClient = axios.create({
  timeout: 20000,
  paramsSerializer: params => {
    return qs.stringify(params);
  },
});

class Http {
  client = AxiosClient;

  get = (url: string, config?: AxiosRequestConfig) => {
    return this.client.get(url, config);
  };

  post = (url: string, body?: any, config?: AxiosRequestConfig) => {
    return this.client.post(url, body, config);
  };

  put = (url: string, body?: any, config?: AxiosRequestConfig) => {
    return this.client.put(url, body, config);
  };

  patch = (url: string, body?: any, config?: AxiosRequestConfig) => {
    return this.client.patch(url, body, config);
  };

  delete = (url: string, config?: AxiosRequestConfig) => {
    return this.client.delete(url, config);
  };
}

export const http = new Http();
export type {AxiosRequestConfig as HttpRequestConfig};
