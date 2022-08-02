import styled from '@emotion/styled';
import { axiosAuthInstance } from '@api/axiosInstances';

import { NextPage } from 'next';
import Link from 'next/link';

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
      <Link href='/post/create'>글쓰기</Link>
    </>
  );
};

export default HomePage;
