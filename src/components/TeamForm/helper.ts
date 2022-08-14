export interface Values {
  name?: string;
  sportsCategory?: string;
  description?: string;
}

const regexTeamName = /^.{2,10}$/;

export const validation = ({ name, sportsCategory, description }: Values) => {
  const errors: Values = {};
  if (!name) {
    errors.name = '팀 이름을 입력해주세요.';
  } else if (!regexTeamName.test(name)) {
    errors.name = '2자 이상 10자 이하입니다.';
  }
  if (!sportsCategory) {
    errors.sportsCategory = '팀 종목을 선택해주세요.';
  }
  if (!description) {
    errors.description = '팀 소개를 작성해주세요.';
  } else if (description.length > 100) {
    errors.description = '100자 이하입니다.';
  }
  return errors;
};
