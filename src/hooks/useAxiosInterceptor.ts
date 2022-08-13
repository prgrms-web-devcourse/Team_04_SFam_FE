import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useResetRecoilState } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { userState } from '@recoil/atoms';

export const useAxiosInterceptor = () => {
  const router = useRouter();
  const resetUser = useResetRecoilState(userState);
  axiosAuthInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        resetUser();
        router.push('/signin');
      }
      return Promise.reject(error);
    },
  );
};
