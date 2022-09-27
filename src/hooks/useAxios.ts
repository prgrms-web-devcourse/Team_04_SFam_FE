import React from 'react';

import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { axiosDefaultInstance } from '@api/axiosInstances';

const useAxios = (axiosConfig: AxiosRequestConfig, axiosInstance: AxiosInstance = axiosDefaultInstance) => {
  const [response, setResponse] = React.useState<AxiosResponse>();
  const [error, setError] = React.useState<AxiosError>();
  const [loading, setLoading] = React.useState(true);

  const request = React.useCallback(async () => {
    try {
      const result = await axiosInstance(axiosConfig);
      setResponse(result);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  }, [axiosConfig, axiosInstance]);

  React.useEffect(() => {
    request();
  }, []);

  return { response, error, loading, request };
};

export default useAxios;
