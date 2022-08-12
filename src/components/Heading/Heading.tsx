import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { MdArrowBackIos } from 'react-icons/md';
import { useRecoilValue } from 'recoil';

import { Address, kakaoMapApi } from '@api/kakaoMapApi';
import { userState } from '@recoil/atoms';
import { Anchor, Icon, RowWrapper } from '@styles/common';

import * as S from './Heading.styles';
import { HeadingTitleProps } from './types';

export const headingTitle: HeadingTitleProps = {
  '/matches': `송파동`,
  '/signup': '회원가입',
  '/signin': '로그인',
  '/notification': '초대 알림',
  '/notification/[...id]': '팀 초대 수락',
  '/team/create': '팀 생성',
  '/team/[id]': '팀 프로필',
  '/team/[id]/edit': '팀 프로필 수정',
  '/team/[id]/invitation': '팀원 초대',
  '/user/[id]': '프로필',
  '/user/[id]/edit': '프로필 수정',
  '/user/[id]/location': '내 동네 설정',
  '/matches/create': '글쓰기',
  '/matches/[id]': '상세 페이지',
  '/matches/[id]/result': '경기 결과',
  '/matches/[id]/review': '후기 작성',
  '/matches/[id]/proposal': '신청하기',
  '/matches/[id]/chats': `전체 채팅방`,
  '/matches/[id]/chatlist/[matchProposalId]': `개인 채팅`,
  '/matches/[id]/chatlist': '매치 채팅방',
  '/chatlist': '전체 채팅',
  '/chatlist/[matchProposalId]': '개인 채팅',
};

export const noBackIcon = ['/signup', '/signin', '/matches', '/matches/:id/review', 'users/:id'];

// TODO: prop으로 뒤로 가기 버튼 조절해야 함
const Heading = () => {
  const router = useRouter();
  const user = useRecoilValue(userState);
  const [kakaoLoading, setKakaoLoading] = React.useState(true);
  const [address, setAddress] = React.useState<Address>({
    address_name: '',
    region_1depth_name: '',
    region_2depth_name: '',
    region_3depth_name: '',
    mountain_yn: '',
    main_address_no: '',
    sub_address_no: '',
  });

  const handleTitleClick = () => {
    if (router.pathname === '/matches') {
      router.push(`/user/${user.id?.toString() as string}/location`);
    }
  };

  React.useEffect(() => {
    if (router.pathname !== '/matches') return;
    setKakaoLoading(true);
    async function fetchAddress() {
      if (user.latitude && user.longitude) {
        await kakaoMapApi(user.latitude, user.longitude, setAddress);
        setKakaoLoading(false);
      }
    }
    fetchAddress();
  }, [router.pathname]);
  return (
    <S.HeadingContainer>
      <RowWrapper
        alignItems='center'
        gap='4px'
      >
        {!noBackIcon.includes(router.pathname) ? (
          <MdArrowBackIos
            style={{ cursor: 'pointer' }}
            onClick={() => router.back()}
          />
        ) : (
          <div />
        )}
        <S.HeadingTitle
          pointer={router.pathname === '/matches'}
          onClick={handleTitleClick}
        >
          {router.pathname === '/matches' ? address.region_3depth_name : headingTitle[router.pathname]}
        </S.HeadingTitle>
      </RowWrapper>
      {router.pathname === '/matches' ? (
        <Link
          href='/matches/create'
          passHref
        >
          <Anchor>
            <S.HeadingLinkContainer>
              <FaPencilAlt />
              <span>글쓰기</span>
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
