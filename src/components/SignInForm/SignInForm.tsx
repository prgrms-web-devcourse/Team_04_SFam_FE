import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { useSetRecoilState } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/common/Button';
import { Input } from '@components/common/Input';
import { useForm } from '@hooks/useForm';
import { User, userState } from '@recoil/atoms';
import { Anchor, B3, BoldGreenB3, ColWrapper, Container, InnerWrapper } from '@styles/common';
import { Response } from 'types';

import { ErrorResponse, Values } from './types';

const SignInForm = () => {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);

  const onSubmit = (values: Values, e?: FormEvent<HTMLFormElement>) => {
    const { username, password } = values;
    e?.preventDefault();
    const signin = async () => {
      try {
        const {
          data: { data: user },
        } = await axiosAuthInstance.post<Response<User>>('/api/users/signin', {
          username,
          password,
        });

        setUser(user);
        if (user.searchDistance === null) {
          router.replace(`/user/${user.id}/location`);
        } else {
          router.replace('/matches');
        }
      } catch (error) {
        // TODO: AxiosInstance Interceptor에서 response 바로 반환하도록 변환 고려
        const { response } = error as AxiosError;
        const errorCode = (response?.data as ErrorResponse).code;
        if (errorCode === 'A0001' || errorCode === 'V0001') {
          window.alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
      }
    };
    signin();
  };

  const { values, handleChange, handleSubmit } = useForm<Values>({
    initialValue: {
      username: '',
      password: '',
    },
    initialError: {
      username: '',
      password: '',
    },
    onSubmit,
  });
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ColWrapper gap='8px'>
          <Input
            id='username'
            name='username'
            value={values.username}
            onChange={handleChange}
            placeholder='아이디'
            height='40px'
          />
          <Input
            id='password'
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
            placeholder='비밀번호'
            height='40px'
          />
          <Button width='100%'>로그인</Button>
        </ColWrapper>
      </form>
      <InnerWrapper
        alignItems='center'
        justifyContent='center'
      >
        <B3>회원이 아니신가요?&nbsp;</B3>
        <Link
          href='/signup'
          passHref
        >
          <Anchor>
            <BoldGreenB3>회원가입하기</BoldGreenB3>
          </Anchor>
        </Link>
      </InnerWrapper>
    </Container>
  );
};

export default SignInForm;
