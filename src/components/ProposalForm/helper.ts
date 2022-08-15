import { MemberCount, ProposalData } from './types';

type Validation = ProposalData & MemberCount;

export const validation = ({ teamId, content, participants, memberCount, matchType }: Validation) => {
  const errors: ProposalData = {};

  if (matchType === 'TEAM_MATCH' && !teamId) {
    errors.teamId = '팀을 선택해주세요.';
  } else if (matchType === 'TEAM_MATCH' && participants && memberCount && participants > memberCount) {
    errors.teamId = '모집 인원이 팀원 수보다 많습니다.';
  }

  if (!content) {
    errors.content = '요청 내용을 입력해주세요.';
  } else if (content.length < 2 || content.length > 30) {
    errors.content = '2자 이상 30자 이하로 작성해주세요.';
  }

  return errors;
};
