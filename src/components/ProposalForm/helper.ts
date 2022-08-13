import { MemberCount, ProposalData } from './types';

const regexContent = /^.{2,30}$/;

type Validation = ProposalData & MemberCount;

export const validation = ({ teamId, content, participants, memberCount }: Validation) => {
  const errors: ProposalData = {};
  console.log(participants, memberCount);

  if (!teamId) {
    errors.teamId = '팀을 선택해주세요.';
  } else if (participants && memberCount && participants > memberCount) {
    errors.teamId = '모집 인원이 팀원 수보다 많습니다.';
  }

  if (!content) {
    errors.content = '요청 내용을 입력해주세요.';
  } else if (!regexContent.test(content)) {
    errors.content = '2자 이상 30자 이하로 작성해주세요.';
  }

  return errors;
};
