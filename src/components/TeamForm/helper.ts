export interface Values {
  name?: string;
  sportsCategory?: string;
  description?: string;
}

const regexTeamName = /^.{2,10}$/;
const regexDescription = /^.{1,100}$/;

export const validation = ({ name, sportsCategory, description }: Values) => {
  const errors: Values = {};
  if (!name) {
    errors.name = '팀 이름을 입력해주세요.';
  } else if (!regexTeamName.test(name)) {
    errors.name = '너무 짧거나 너무 깁니다.';
  }
  if (!sportsCategory) {
    errors.sportsCategory = '팀 종목을 선택해주세요.';
  }
  if (!description) {
    errors.description = '팀 소개를 작성해주세요.';
  } else if (!regexDescription.test(description)) {
    errors.description = '너무 짧거나 너무 깁니다.';
  }
  return errors;
};
