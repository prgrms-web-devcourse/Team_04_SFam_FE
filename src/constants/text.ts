interface Text {
  [key: string]: string;
}

export const SPORTS_TEXT: Text = {
  SOCCER: '축구',
  BASEBALL: '야구',
  BASKETBALL: '농구',
  TABLETENNIS: '탁구',
  BOWLING: '볼링',
  BADMINTON: '배드민턴',
  TENNIS: '테니스',
};

export const MATCH_TYPE_TEXT: Text = {
  INDIVIDUAL_MATCH: '개인전',
  TEAM_MATCH: '팀전',
};

export const MATCH_STATUS_TEXT: Text = {
  WAITING: '모집 중',
  IN_GAME: '모집 완료',
  END: '경기 완료',
};

export const PROPOSAL_STATUS_TEXT: Text = {
  WAITING: '대기중',
  APPROVED: '수락',
  REFUSE: '거절',
  FIXED: '대상확정',
};
