import {http} from './http';

const client = http.client;
const {request, response} = client.interceptors;

request.use(
  async config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export {};
