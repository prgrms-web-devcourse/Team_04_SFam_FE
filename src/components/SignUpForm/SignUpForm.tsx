import { FormEvent } from 'react';
import Link from 'next/link';
import { axiosDefaultInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useRouter } from 'next/router';
import { useForm } from '@hooks/useForm';
import { ErrorText, StrongText } from './SignUpForm.styles';
import validation from './helper';
import { Values } from './types';

const SignUpForm = () => {
  const router = useRouter();
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          name='username'
          value={username}
          onChange={handleChange}
          placeholder='아이디'
        />
        <ErrorText>{errors.username}</ErrorText>
        <Input
          name='nickname'
          value={nickname}
          onChange={handleChange}
          placeholder='닉네임'
        />
        <ErrorText>{errors.nickname}</ErrorText>
        <Input
          name='password'
          value={password}
          onChange={handleChange}
          type='password'
          placeholder='비밀번호'
        />
        <ErrorText>{errors.password}</ErrorText>
        <Input
          name='passwordCheck'
          value={passwordCheck}
          onChange={handleChange}
          type='password'
          placeholder='비밀번호 확인'
        />
        <ErrorText>{errors.passwordCheck}</ErrorText>
        <Button width='100%'>회원가입</Button>
      </form>
      <div>
        <span>이미 계정이 있으신가요?&nbsp;</span>
        <Link href='/signin'>
          <StrongText>로그인하기</StrongText>
        </Link>
      </div>
    </>
  );
};

export default SignUpForm;
