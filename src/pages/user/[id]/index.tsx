import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import React from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Avatar } from '@components/Avatar';
import { Divider } from '@components/Divider';
import { ReviewGroup } from '@components/ReviewGroup';
import { TeamBadge } from '@components/TeamBadge';
import { B1, B2, ColWrapper, Container, GrayB3, InnerWrapper, Label, ResetBtn, RowWrapper } from '@styles/common';
import { Team } from '@interface/team';
import { UserInfo } from '@interface/user';
import { Response } from '@interface/response';

const UserDetailPage: NextPage = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = React.useState<UserInfo>({
    nickname: '',
    review: {
      bestCount: 0,
      likeCount: 0,
      dislikeCount: 0,
    },
    location: {
      longitude: '',
      latitude: '',
    },
    teams: [],
  });

  React.useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      const {
        data: { data },
      } = await axiosAuthInstance.get<Response<UserInfo>>(`/api/users/${router.query.id as string}`);

      setUserInfo(() => data);
    })();
  }, [router.isReady]);

  return (
    <Container>
      <RowWrapper>
        <Avatar />
        <InnerWrapper
          flexDirection='column'
          justifyContent='center'
          margin='0px 16px'
        >
          <B1>{userInfo.nickname}</B1>
          {/* TODO: 위도 경도 기반 지역구 출력 */}
          <GrayB3>송파구</GrayB3>
        </InnerWrapper>
      </RowWrapper>
      <Divider />
      <ColWrapper>
        <Label>나에 대한 후기</Label>
        <ReviewGroup
          bestCount={userInfo.review.bestCount}
          likeCount={userInfo.review.likeCount}
          dislikeCount={userInfo.review.dislikeCount}
        />
      </ColWrapper>
      <Divider />
      <ColWrapper>
        <Label>내 팀 목록</Label>
        <div>
          {userInfo.teams.map((team: Team) => (
            <TeamBadge
              sportsCategory={team.sportsCategory}
              name={team.name}
              key={team.id}
            />
          ))}
        </div>
      </ColWrapper>
      {/* TODO: 조건부 렌더링 처리: 로그인 사용자 닉네임이 같은 경우 출력하도록 수정 필요 */}
      <Divider />
      <ColWrapper>
        <Label>나의 활동</Label>
        <ColWrapper>
          <Link href='/user/[id]/location'>
            <B2>내 동네 설정하기</B2>
          </Link>
          {/* TODO: onClick 이벤트로 로그아웃 API 호출 */}
          <ResetBtn type='button'>로그아웃</ResetBtn>
        </ColWrapper>
      </ColWrapper>
    </Container>
  );
};

export default UserDetailPage;
