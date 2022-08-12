import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Address, kakaoMapApi } from '@api/kakaoMapApi';
import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { Divider } from '@components/Divider';
import { ReviewGroup } from '@components/ReviewGroup';
import { TeamBadge } from '@components/TeamBadge';
import { Response } from '@interface/response';
import { Team } from '@interface/team';
import { UserInfo } from '@interface/user';
import { userState } from '@recoil/atoms';
import { Anchor, B1, B2, ColWrapper, Container, GrayB3, InnerWrapper, Label, RowWrapper } from '@styles/common';

const UserDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useRecoilState(userState);
  const [kakaoLoading, setKakaoLoading] = React.useState(true);
  const [isMe, setIsMe] = React.useState<boolean>(false);
  const [userInfo, setUserInfo] = React.useState<UserInfo>({
    nickname: '',
    profileImageUrl: null,
    review: {
      bestCount: 0,
      likeCount: 0,
      dislikeCount: 0,
    },
    location: {
      longitude: 0,
      latitude: 0,
    },
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

  React.useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      try {
        const {
          data: { data },
        } = await axiosAuthInstance.get<Response<UserInfo>>(`/api/users/${id as string}`);

        setUserInfo(() => data);
        if (Number(router.query.id) === user.id) {
          setIsMe(true);
        }
      } catch (e) {
        // 에러 처리 필요
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
      if (user.latitude && user.longitude) {
        await kakaoMapApi(user.latitude, user.longitude, setAddress);
        setKakaoLoading(false);
      }
    }
    fetchAddress();
  }, []);

  return (
    <Container>
      <RowWrapper>
        {userInfo && userInfo.profileImageUrl ? <Avatar imgSrc={userInfo.profileImageUrl} /> : <Avatar />}
        <InnerWrapper
          flexDirection='column'
          justifyContent='center'
          margin='0px 16px'
        >
          <B1>{userInfo.nickname}</B1>
          <GrayB3>{address.region_3depth_name}</GrayB3>
        </InnerWrapper>
      </RowWrapper>
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
          <ColWrapper gap='8px'>
            <Label>나의 활동</Label>
            <ColWrapper gap='16px'>
              <Link href={`/user/${id as string}/location`}>
                <B2>내 동네 설정하기</B2>
              </Link>
              <B2 onClick={handleLogout}>로그아웃</B2>
            </ColWrapper>
          </ColWrapper>
        </>
      )}
    </Container>
  );
};

export default UserDetailPage;
