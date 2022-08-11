import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import { axiosDefaultInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useForm } from '@hooks/useForm';
import { B3, BoldGreenB3, ColWrapper, Container, InnerWrapper } from '@styles/common';

import validation from './helper';
import { ErrorText } from './SignUpForm.styles';
import { Values } from './types';

const SignUpForm = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState({
    username: false,
    nickname: false,
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setIsDuplicate({
      ...isDuplicate,
      [name]: false,
    });
  };

  const onSubmit = (values: Values, e?: FormEvent<HTMLFormElement>) => {
    if (!isDuplicate.username || !isDuplicate.nickname) {
      window.alert('아이디/닉네임 중복확인을 해주세요.');
      return;
    }
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

  const { values, errors, success, handleChange, handleSubmit } = useForm<Values>({
    initialValue: {
      username: '',
      nickname: '',
      password: '',
      passwordCheck: '',
    },
    initialError: {
      username: '',
      nickname: '',
      password: '',
      passwordCheck: '',
    },
    initialSuccess: {
      username: '',
      nickname: '',
    },
    onSubmit,
    validate: validation,
  });

  const { username, nickname, password, passwordCheck } = values;

  const handleUsernameCheckClick = () => {
    const usernameCheck = async () => {
      const { username: usernameValidation } = validation({ username });
      if (usernameValidation) {
        errors.username = usernameValidation;
        setChecked((state) => !state);
        return;
      }

      const res = await axiosDefaultInstance({
        method: 'get',
        url: `/api/users/username/duplication?input=${values.username as string}`,
      });
      if ((res.data as { data: object }).data) {
        success.username = '';
        errors.username = '이미 사용중인 아이디입니다.';
      } else {
        errors.username = '';
        success.username = '사용 가능한 아이디입니다.';
        setIsDuplicate({
          ...isDuplicate,
          username: true,
        });
      }
      setChecked((state) => !state);
    };
    if (username?.length === 0) {
      success.username = '';
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
        success.nickname = '';
        errors.nickname = '이미 사용중인 닉네임입니다.';
      } else {
        errors.nickname = '';
        success.nickname = '사용 가능한 닉네임입니다.';
        setIsDuplicate({
          ...isDuplicate,
          nickname: true,
        });
      }
      setChecked((state) => !state);
    };
    if (nickname?.length === 0) {
      success.nickname = '';
      errors.nickname = '닉네임을 입력해주세요.';
      setChecked((state) => !state);
      return;
    }
    nicknameCheck();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ColWrapper gap='8px'>
          <InnerWrapper>
            <Input
              id='username'
              name='username'
              value={username}
              onChange={(e) => {
                handleNameChange(e);
                handleChange(e);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleUsernameCheckClick();
                }
              }}
              placeholder='아이디'
            />
            <Button
              type='button'
              width='100px'
              fontSize='16px'
              onClick={handleUsernameCheckClick}
            >
              중복확인
            </Button>
          </InnerWrapper>
          {errors.username ? <ErrorText>{errors.username}</ErrorText> : <BoldGreenB3>{success.username}</BoldGreenB3>}
          <InnerWrapper>
            <Input
              id='nickname'
              name='nickname'
              value={nickname}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleNicknameCheckClick();
                }
              }}
              placeholder='닉네임'
            />
            <Button
              type='button'
              width='100px'
              fontSize='16px'
              onClick={handleNicknameCheckClick}
            >
              중복확인
            </Button>
          </InnerWrapper>
          {errors.nickname ? <ErrorText>{errors.nickname}</ErrorText> : <BoldGreenB3>{success.nickname}</BoldGreenB3>}
          <InnerWrapper>
            <Input
              id='password'
              name='password'
              value={password}
              onChange={handleChange}
              type='password'
              placeholder='비밀번호'
              height='50px'
            />
          </InnerWrapper>
          <ErrorText>{errors.password}</ErrorText>
          <InnerWrapper>
            <Input
              id='passwordCheck'
              name='passwordCheck'
              value={passwordCheck}
              onChange={handleChange}
              type='password'
              placeholder='비밀번호 확인'
              height='50px'
            />
          </InnerWrapper>
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
          <BoldGreenB3>로그인하기</BoldGreenB3>
        </Link>
      </InnerWrapper>
    </Container>
  );
};

export default SignUpForm;
