export interface HeadingTitleProps {
  [key: string]: string;
}

export const headingTitle: HeadingTitleProps = {
  '/signup': '회원가입',
  '/signin': '로그인',
  '/town': '내 동네 설정',
  '/team/create': '팀 생성',
  '/team/invitation': '팀원 초대',
  '/alarm': '알림',
  '/teams/:id': '팀 프로필',
  '/users/:id': '프로필',
  '/users/:id/본인': '내 정보',
  '/': `송파동`,
  '/post': '글쓰기',
  '/posts/:id': '상세 페이지',
  '/matches/:id/result': '경기 결과',
  '/matches/:id/review': '후기 작성',
  '/proposals': '신청하기',
  '/chats': `유저 닉네임`,
  '/chatList': '채팅',
};

export const noBackIcon = ['/signup', '/signin', '/', '/matches/:id/review', 'users/:id'];
