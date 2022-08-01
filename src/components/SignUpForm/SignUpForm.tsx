import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { axiosDefaultInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { ErrorText, StrongText } from './SignUpForm.styles';

interface SignUpResponse {
  code: string;
  message: string;
}

const SignUpForm = () => {
  const [state, setState] = useState({
    username: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });
  const [error, setError] = useState('');
  const { username, nickname, password, passwordCheck } = state;
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetch = async () => {
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
        const { response } = err as AxiosError;
        if (response) {
          if (response.status === 400) {
            const { code } = response.data as SignUpResponse;
            switch (code) {
              // 프론트에서 유효성 검사, 중복 검사 둘 다 하면 여기서 분기하는 건 필요 없을 듯?
              case 'V0001':
                setError('아이디, 닉네임 또는 비밀번호가 형식에 맞지 않습니다.');
                break;
              case 'V0004':
                setError('이미 존재하는 아이디거나 닉네임입니다.');
                break;
              default:
                setError('');
                break;
            }
          }
        }
      }
    };
    fetch();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          name='username'
          value={username}
          onChange={handleChange}
          placeholder='아이디'
        />
        <Input
          name='nickname'
          value={nickname}
          onChange={handleChange}
          placeholder='닉네임'
        />
        <Input
          name='password'
          value={password}
          onChange={handleChange}
          type='password'
          placeholder='비밀번호'
        />
        <Input
          name='passwordCheck'
          value={passwordCheck}
          onChange={handleChange}
          type='password'
          placeholder='비밀번호 확인'
        />
        <ErrorText>{error}</ErrorText>
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
