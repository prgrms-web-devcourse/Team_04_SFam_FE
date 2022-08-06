import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { axiosDefaultInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useForm } from '@hooks/useForm';
import { B3, ColWrapper, Container, InnerWrapper } from '@styles/common';
import { ErrorText, StrongText } from './SignUpForm.styles';
import validation from './helper';
import { Values } from './types';

const SignUpForm = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const onSubmit = (values: Values, e?: FormEvent<HTMLFormElement>) => {
    const { username, nickname, password } = values;
    e?.preventDefault();
    const signup = async () => {
      try {
        const res = await axiosDefaultInstance({
          method: 'post',
          url: '/api/users/signup',
          data: {
            username,
            nickname,
            password,
          },
        });
        if (res.status === 200) {
          router.replace('/signin');
        }
      } catch (err) {
        console.log(err);
      }
    };
    signup();
  };

  const { values, errors, isLoading, handleChange, handleSubmit } = useForm<Values>({
    initialValue: {
      username: '',
      nickname: '',
      password: '',
      passwordCheck: '',
    },
    onSubmit,
    validate: validation,
  });

  const { username, nickname, password, passwordCheck } = values;

  const handleUsernameCheckClick = () => {
    const usernameCheck = async () => {
      const res = await axiosDefaultInstance({
        method: 'get',
        url: `/api/users/username/duplication?input=${values.username as string}`,
      });
      if ((res.data as { data: object }).data) {
        errors.username = '이미 사용중인 아이디입니다.';
      } else {
        errors.username = '사용 가능한 아이디입니다.';
      }
      setChecked((state) => !state);
    };
    if (username?.length === 0) {
      errors.username = '아이디를 입력해주세요.';
      setChecked((state) => !state);
      return;
    }
    usernameCheck();
  };

  const handleNicknameCheckClick = () => {
    const nicknameCheck = async () => {
      const res = await axiosDefaultInstance({
        method: 'get',
        url: `/api/users/nickname/duplication?input=${values.nickname as string}`,
      });
      if ((res.data as { data: object }).data) {
        errors.nickname = '이미 사용중인 닉네임입니다.';
      } else {
        errors.nickname = '사용 가능한 닉네임입니다.';
      }
      setChecked((state) => !state);
    };
    if (nickname?.length === 0) {
      errors.nickname = '닉네임을 입력해주세요.';
      setChecked((state) => !state);
      return;
    }
    nicknameCheck();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ColWrapper>
          <InnerWrapper>
            <Input
              name='username'
              value={username}
              onChange={handleChange}
              placeholder='아이디'
            />
            <Button
              width='100px'
              fontSize='16px'
              onClick={handleUsernameCheckClick}
            >
              중복확인
            </Button>
          </InnerWrapper>
          <ErrorText>{errors.username}</ErrorText>
          <InnerWrapper>
            <Input
              name='nickname'
              value={nickname}
              onChange={handleChange}
              placeholder='닉네임'
            />
            <Button
              width='100px'
              fontSize='16px'
              onClick={handleNicknameCheckClick}
            >
              중복확인
            </Button>
          </InnerWrapper>
          <ErrorText>{errors.nickname}</ErrorText>
          <Input
            name='password'
            value={password}
            onChange={handleChange}
            type='password'
            placeholder='비밀번호'
            height='50px'
          />
          <ErrorText>{errors.password}</ErrorText>
          <Input
            name='passwordCheck'
            value={passwordCheck}
            onChange={handleChange}
            type='password'
            placeholder='비밀번호 확인'
            height='50px'
          />
          <ErrorText>{errors.passwordCheck}</ErrorText>
          <Button width='100%'>회원가입</Button>
        </ColWrapper>
      </form>
      <InnerWrapper
        alignItems='center'
        justifyContent='center'
      >
        <B3>이미 계정이 있으신가요?&nbsp;</B3>
        <Link href='/signin'>
          <StrongText>로그인하기</StrongText>
        </Link>
      </InnerWrapper>
    </Container>
  );
};

export default SignUpForm;
