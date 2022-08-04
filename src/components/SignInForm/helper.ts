import { Values } from './types';

const regexUsername = /^[a-z0-9_]{6,24}$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validation = ({ username, password }: Values) => {
  const errors: Values = {};

  if (!username) {
    errors.username = '아이디를 입력해주세요.';
  } else if (!regexUsername.test(username)) {
    errors.username = '아이디 형식에 맞지 않습니다. (영문 소문자, 숫자 6자리 이상 24자리 이하)';
  }

  if (!password) {
    errors.password = '비밀번호를 입력해주세요.';
  } else if (!regexPassword.test(password)) {
    errors.password = '비밀번호 형식에 맞지 않습니다. (영문 소문자, 대문자, 숫자, 특수문자 포함 8자리 이상)';
  }

  return errors;
};

export default validation;
