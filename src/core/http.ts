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
  get = this.client.get;
  post = this.client.post;
  put = this.client.put;
  patch = this.client.patch;
  delete = this.client.delete;
}

export const http = new Http();
export type {AxiosRequestConfig as HttpRequestConfig};
