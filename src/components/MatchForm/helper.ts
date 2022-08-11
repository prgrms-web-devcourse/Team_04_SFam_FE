export interface Values {
  title?: string;
  matchDate?: string;
  year?: string;
  month?: string;
  date?: string;
  matchType?: string;
  teamId?: number | string;
  participants?: number | string;
  sportsCategory?: string;
  content?: string;
}

const regexTitle = /^.{2,10}$/;
const regexContent = /^.{2,100}$/;

const checkDate = ({ year, month, date }: { year: string; month: string; date: string }) => {
  const numberYear = parseInt(year, 10);
  const numberMonth = parseInt(month, 10);
  const numberDate = parseInt(date, 10);
  if ((numberMonth === 4 || numberMonth === 6 || numberMonth === 9 || numberMonth === 11) && numberDate === 31) {
    return false;
  }
  if (numberMonth === 2) {
    const isleap = numberYear % 4 === 0 && (numberYear % 100 !== 0 || numberYear % 400 === 0);
    if (numberDate > 29 || (numberDate === 29 && !isleap)) {
      return false;
    }
  }
  return true;
};

export const validation = ({
  title,
  matchType,
  participants,
  content,
  teamId,
  sportsCategory,
  year,
  month,
  date,
}: Values) => {
  const errors: Values = {};

  if (!title) {
    errors.title = '제목을 입력해주세요.';
  } else if (!regexTitle.test(title)) {
    errors.title = '제목은 2자 이상 10자 이하입니다.';
  }

  if (!year && !month && !date) {
    errors.matchDate = '대결 날짜를 입력해주세요.';
  } else if (year && month && date && !checkDate({ year, month, date })) {
    errors.matchDate = '존재하지 않는 날짜입니다.';
  } else {
    const nowDate = new Date();
    const selectedDate = new Date(`${year as string}-${month as string}-${date as string}`);
    if (nowDate > selectedDate) {
      errors.matchDate = '날짜를 오늘 이후로 설정해주세요.';
    }
  }

  if (!matchType) {
    errors.matchType = '개인전/팀전을 선택해주세요.';
  }
  if (!participants) {
    errors.participants = '인원을 입력해주세요.';
  } else if (participants < 1 || participants > 15) {
    errors.participants = '인원은 1명 이상 15명 이하입니다.';
  }
  if (!content) {
    errors.content = '내용을 입력해주세요.';
  } else if (!regexContent.test(content)) {
    errors.content = '내용은 2자 이상 100자 이하입니다.';
  }
  if (matchType === 'TEAM_MATCH' && !teamId) {
    errors.teamId = '팀을 선택해주세요.';
  }
  if (matchType === 'INDIVIDUAL_MATCH' && !sportsCategory) {
    errors.sportsCategory = '종목을 선택해주세요.';
  }
  return errors;
};