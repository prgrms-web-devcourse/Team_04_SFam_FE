import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaPencilAlt } from 'react-icons/fa';
import { MdArrowBackIos } from 'react-icons/md';

import { Anchor, RowWrapper } from '@styles/common';

import * as S from './Heading.styles';
import { HeadingTitleProps } from './types';

export const headingTitle: HeadingTitleProps = {
  '/matches': `송파동`,
  '/signup': '회원가입',
  '/signin': '로그인',
  '/notification': '알림',
  '/notification/[...id]': '팀 초대 수락',
  '/team/create': '팀 생성',
  '/team/[id]': '팀 프로필',
  '/team/[id]/invitation': '팀원 초대',
  '/user/[id]': '프로필',
  '/user/[id]/profile': '내 정보',
  '/user/[id]/location': '내 동네 설정',
  '/matches/create': '글쓰기',
  '/matches/[id]': '상세 페이지',
  '/matches/[id]/result': '경기 결과',
  '/matches/[id]/review': '후기 작성',
  '/matches/[id]/proposal': '신청하기',
  '/matches/[id]/chats': `채팅`,
  '/matches/[id]/chatlist/[matchProposalId]': `개인 채팅`,
  '/matches/[id]/chatlist': '매치 채팅',
  '/chatlist': '전체 채팅',
};

export const noBackIcon = ['/signup', '/signin', '/matches', '/matches/:id/review', 'users/:id'];

const Heading = () => {
  const router = useRouter();
  return (
    <S.HeadingContainer>
      <RowWrapper>
        {!noBackIcon.includes(router.pathname) ? <MdArrowBackIos onClick={() => router.back()} /> : <div />}
        <S.HeadingTitle>{headingTitle[router.pathname]}</S.HeadingTitle>
      </RowWrapper>
      {router.pathname === '/matches' ? (
        <Link
          href='/matches/create'
          passHref
        >
          <Anchor>
            <S.HeadingLinkContainer>
              <span>글쓰기</span>
              <FaPencilAlt />
            </S.HeadingLinkContainer>
          </Anchor>
        </Link>
      ) : (
        ''
      )}
    </S.HeadingContainer>
  );
};

export default Heading;
