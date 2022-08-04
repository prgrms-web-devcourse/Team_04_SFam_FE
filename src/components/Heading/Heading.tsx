import { useRouter } from 'next/router';
import { MdArrowBackIos } from 'react-icons/md';
import * as S from './Heading.styles';
import { HeadingTitleProps } from './types';

export const headingTitle: HeadingTitleProps = {
  '/signup': '회원가입',
  '/signin': '로그인',
  '/town': '내 동네 설정',
  '/team/create': '팀 생성',
  '/team/invitation': '팀원 초대',
  '/notification': '알림',
  '/team/[id]': '팀 프로필',
  '/user/[id]': '프로필',
  '/user/[id]/profile': '내 정보',
  '/': `송파동`,
  '/post': '글쓰기',
  '/matches/[id]': '상세 페이지',
  '/matches/[id]/result': '경기 결과',
  '/matches/[id]/review': '후기 작성',
  '/proposals': '신청하기',
  '/chats': `유저 닉네임`,
  '/chat': '채팅',
};

export const noBackIcon = ['/signup', '/signin', '/', '/matches/:id/review', 'users/:id'];

const Heading = () => {
  const router = useRouter();
  return (
    <S.HeadingWrapper>
      {!noBackIcon.includes(router.pathname) ? <MdArrowBackIos onClick={() => router.back()} /> : <div />}
      <S.HeadingTitle>{headingTitle[router.pathname]}</S.HeadingTitle>
    </S.HeadingWrapper>
  );
};

export default Heading;
