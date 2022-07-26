import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThreeDots } from 'react-loader-spinner';
import { useRecoilState } from 'recoil';

import { OldAvatar } from '@components/common/Avatar';
import { Button } from '@components/common/Button';
import { Divider } from '@components/common/Divider';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Address, kakaoMapApi } from '@api/kakaoMapApi';
import { MatchRecordChart } from '@components/MatchRecordChart';
import { ReviewGroup } from '@components/ReviewGroup';
import { TeamBadge } from '@components/TeamBadge';
import { userState } from '@recoil/atoms';
import { Anchor, B1, B2, ColWrapper, Container, GrayB3, InnerWrapper, Label, RowWrapper } from '@styles/common';
import { UserInfo, MatchRecord, Team, Response } from 'types';

const UserDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useRecoilState(userState);

  const [kakaoLoading, setKakaoLoading] = React.useState<boolean>(true);
  const [isUserLoading, setIsUserLoading] = React.useState<boolean>(true);
  const [isMatchLoading, setIsMatchLoading] = React.useState<boolean>(true);
  const [isMe, setIsMe] = React.useState<boolean>(false);
  const [userInfo, setUserInfo] = React.useState<UserInfo>({
    nickname: '',
    profileImageUrl: null,
    review: {
      bestCount: 0,
      likeCount: 0,
      dislikeCount: 0,
    },
    localName: '',
    teams: [],
  });
  const [address, setAddress] = React.useState<Address>({
    address_name: '',
    region_1depth_name: '',
    region_2depth_name: '',
    region_3depth_name: '',
    mountain_yn: '',
    main_address_no: '',
    sub_address_no: '',
  });
  const [matchRecord, setMatchRecord] = React.useState<MatchRecord>({
    win: 0,
    draw: 0,
    lose: 0,
  });

  React.useEffect(() => {
    if (!router.isReady) return;
    (async () => {
      setIsUserLoading(true);
      try {
        const {
          data: { data },
        } = await axiosAuthInstance.get<Response<UserInfo>>(`/api/users/${id as string}`);

        setUserInfo(() => data);
        setIsUserLoading(false);
        if (Number(router.query.id) === user.id) {
          setIsMe(true);
        }
      } catch (e) {
        // 에러 처리 필요
      }
    })();

    (async () => {
      setIsMatchLoading(true);
      try {
        const {
          data: { data },
        } = await axiosAuthInstance.get<Response<MatchRecord>>(`/api/matches/records`, {
          params: { userId: id },
        });

        setMatchRecord(() => data);
        setIsMatchLoading(false);
      } catch (e) {
        // 에러 처리
      }
    })();
  }, [id, router.isReady]);

  const handleLogout = () => {
    if (!router.isReady) return;
    (async () => {
      try {
        await axiosAuthInstance.delete<Response<typeof userState>>(`/api/users/signout`).then((res) => {
          if (res.status === 200) {
            setUser({});
            router.push('/');
          }
        });
      } catch (e) {
        // 에러 처리 필요
      }
    })();
  };

  React.useEffect(() => {
    setKakaoLoading(true);
    async function fetchAddress() {
      if (isMe) {
        if (user.latitude && user.longitude) {
          await kakaoMapApi(user.latitude, user.longitude, setAddress);
        }
      }
      setKakaoLoading(false);
    }
    fetchAddress();
  }, [isMe, userInfo]);

  return !isUserLoading && !isMatchLoading && !kakaoLoading && userInfo && matchRecord ? (
    <Container>
      <RowWrapper gap='16px'>
        {userInfo.profileImageUrl ? (
          <OldAvatar imgSrc={`${userInfo.profileImageUrl}?date=${new Date().toTimeString()}`} />
        ) : (
          <OldAvatar />
        )}
        <InnerWrapper
          flexDirection='column'
          justifyContent='center'
        >
          <B1>{userInfo.nickname}</B1>
          <GrayB3>{isMe ? address.region_3depth_name : userInfo.localName}</GrayB3>
        </InnerWrapper>
      </RowWrapper>
      {isMe && (
        <Link href={`/user/${id as string}/edit`}>
          <Anchor>
            <Button
              height='40px'
              fontSize='16px'
              outline
            >
              프로필 편집
            </Button>
          </Anchor>
        </Link>
      )}
      <Divider />
      <ColWrapper gap='16px'>
        <Label>후기</Label>
        <ReviewGroup
          bestCount={userInfo.review.bestCount}
          likeCount={userInfo.review.likeCount}
          dislikeCount={userInfo.review.dislikeCount}
        />
      </ColWrapper>
      <Divider />
      <ColWrapper gap='16px'>
        <Label>전적</Label>
        <MatchRecordChart matchRecord={matchRecord} />
      </ColWrapper>
      <Divider />
      <ColWrapper gap='16px'>
        <Label>팀 목록</Label>
        <InnerWrapper
          gap='8px'
          flexWrap='wrap'
        >
          {userInfo.teams.map((team: Team) => (
            <TeamBadge
              team={team}
              key={team.id}
            />
          ))}
        </InnerWrapper>
      </ColWrapper>
      {isMe && (
        <>
          <Divider />
          <ColWrapper gap='16px'>
            <Label>나의 활동</Label>
            <Link
              href='/team/create'
              passHref
            >
              <Anchor>
                <B2>팀 생성하기</B2>
              </Anchor>
            </Link>
            <Link
              href={`/user/${id as string}/location`}
              passHref
            >
              <Anchor>
                <B2>내 동네 설정하기</B2>
              </Anchor>
            </Link>
            <B2
              onClick={handleLogout}
              pointer
            >
              로그아웃
            </B2>
          </ColWrapper>
        </>
      )}
    </Container>
  ) : (
    <ThreeDots
      height='80'
      width='80'
      radius='9'
      color='#1FAB89'
      ariaLabel='three-dots-loading'
      wrapperStyle={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}
    />
  );
};

export default UserDetailPage;
