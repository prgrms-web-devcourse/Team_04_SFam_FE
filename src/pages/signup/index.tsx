import { axiosDefaultInstance } from '@api/axiosInstances';
import { ChangeEvent, FormEvent, useState } from 'react';

const SignUp = () => {
  const [state, setState] = useState({
    username: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });
  const { username, nickname, password, passwordCheck } = state;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const fetch = async () => {
        const res = await axiosDefaultInstance({
          method: 'post',
          url: '/api/users/signup',
          data: {
            username,
            nickname,
            password,
          },
        });
        console.log(res);
      };
      fetch();
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='username'
        value={username}
        onChange={handleChange}
        placeholder='아이디'
      />
      <input
        name='nickname'
        value={nickname}
        onChange={handleChange}
        placeholder='닉네임'
      />
      <input
        name='password'
        value={password}
        onChange={handleChange}
        type='password'
        placeholder='비밀번호'
      />
      <input
        name='passwordCheck'
        value={passwordCheck}
        onChange={handleChange}
        type='password'
        placeholder='비밀번호 확인'
      />
      <button type='submit'>회원가입</button>
    </form>
  );
};

export default SignUp;
