import styled from '@emotion/styled';
import { axiosAuthInstance } from '@api/axiosInstances';

import { NextPage } from 'next';

const Button = styled.button``;

const HomePage: NextPage = () => {
  const handleLogin = () => {
    axiosAuthInstance({
      method: 'POST',
      url: '/api/users/signin',
      data: {
        username: 'test12',
        password: 'Qwer1234!',
      },
    });
  };

  const handleHealthCheck = () => {
    axiosAuthInstance({
      method: 'GET',
      url: '/health',
    });
  };

  return (
    <>
      <Button onClick={handleLogin}>로그인</Button>
      <Button onClick={handleHealthCheck}>헬스 체크</Button>
    </>
  );
};

export default HomePage;
