import { Values } from './types';

const regexUsername = /^[a-z0-9_]{6,24}$/;
const regexNickname = /.{2,16}/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validation = ({ username, nickname, password, passwordCheck }: Values) => {
  const errors: Values = {};

  if (!username) {
    errors.username = '아이디를 입력해주세요.';
  } else if (!regexUsername.test(username)) {
    errors.username = '아이디 형식에 맞지 않습니다.';
  }

  if (!nickname) {
    errors.nickname = '닉네임을 입력해주세요.';
  } else if (!regexNickname.test(nickname)) {
    errors.nickname = '닉네임 형식에 맞지 않습니다.';
  }

  if (!password) {
    errors.password = '비밀번호를 입력해주세요.';
  } else if (!regexPassword.test(password)) {
    errors.password = '비밀번호 형식에 맞지 않습니다.';
  }

  if (!passwordCheck) {
    errors.passwordCheck = '비밀번호 확인을 입력해주세요.';
  } else if (password !== passwordCheck) {
    errors.passwordCheck = '비밀번호가 일치하지 않습니다.';
  }

  return errors;
};

export default validation;
