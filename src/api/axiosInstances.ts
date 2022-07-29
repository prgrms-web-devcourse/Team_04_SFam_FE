import axios, { AxiosRequestConfig } from 'axios';

const axiosDefaultConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosDefaultInstance = axios.create(axiosDefaultConfig);

export const axiosAuthInstance = axios.create({
  ...axiosDefaultConfig,
  withCredentials: true,
});
