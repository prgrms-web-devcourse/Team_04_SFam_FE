import { useEffect } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';

export const useAxiosInterceptor = () => {
  const responseInterceptor = axiosAuthInstance.interceptors.response.use(
    (response) => {
      console.log('response');
      return response;
    },
    (error) => {
      console.log(error);
      // if (error.response.status === 0) {
      //   console.log('로그아웃 돼야 함.');
      // }
      console.log('11');
      return Promise.reject(error);
    },
  );

  // useEffect(
  //   () => () => {
  //     axiosAuthInstance.interceptors.response.eject(responseInterceptor);
  //   },
  //   [responseInterceptor],
  // );
};
