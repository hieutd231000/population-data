/* eslint-disable camelcase */
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const __DEV__ = process.env.NODE_ENV === 'development';

const ConnectionInstance = Axios.create({
  timeout: 20000,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API,
  },
});

ConnectionInstance.interceptors.request.use(
  (requestConfig: AxiosRequestConfig) => {
    return requestConfig;
  },
  (error: AxiosError) => {
    if (__DEV__) {
      console.error('API Request Error:', error);
    }
    return Promise.reject(error);
  },
);

ConnectionInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (__DEV__) {
      console.error('API Response Error:', error);
    }
    return Promise.reject(error);
  },
);

export default ConnectionInstance;
