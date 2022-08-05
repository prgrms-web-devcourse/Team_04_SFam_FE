import { Avatar } from '@components/Avatar';
import { Divider } from '@components/Divider';
import { ReviewGroup } from '@components/ReviewGroup';
import { TeamBadge } from '@components/TeamBadge';
import { B1, B2, ColWrapper, Container, GrayB3, InnerWrapper, Label, ResetBtn, RowWrapper } from '@styles/common';
import { Team } from 'interface/team';
import { UserInfo } from 'interface/user';
import { NextPage } from 'next';
import Link from 'next/link';

const DummyData: UserInfo = {
  nickname: '규범장',
  review: {
    bestCount: 3,
    likeCount: 1,
    dislikeCount: 2,
  },
  location: {
    longitude: '1',
    latitude: '1',
  },
  teams: [
    {
      id: 1,
      name: '이 구역 테니스 짱',
      sportsCategory: 'tennis',
    },
    { id: 2, sportsCategory: 'soccer', name: '축구짱' },
    { id: 3, sportsCategory: 'baseball', name: '야구킹킹' },
    { id: 4, sportsCategory: 'tableTennis', name: '탁구왕들의 모임' },
  ],
};

const UserDetailPage: NextPage = () => (
  <Container>
    <RowWrapper>
      <Avatar />
      <InnerWrapper
        flexDirection='column'
        justifyContent='center'
        margin='0px 16px'
      >
        <B1>{DummyData.nickname}</B1>
        {/* TODO: 위도 경도 기반 지역구 출력 */}
        <GrayB3>송파구</GrayB3>
      </InnerWrapper>
    </RowWrapper>
    <Divider />
    <ColWrapper>
      <Label>나에 대한 후기</Label>
      <ReviewGroup
        greatCount={3}
        likeCount={1}
        dislikeCount={2}
      />
    </ColWrapper>
    <Divider />
    <ColWrapper>
      <Label>내 팀 목록</Label>
      <div>
        {DummyData.teams.map((team: Team) => (
          <TeamBadge
            teamId={team.id}
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
        <Link href='/town'>
          <B2>내 동네 설정하기</B2>
        </Link>
        {/* TODO: onClick 이벤트로 로그아웃 API 호출 */}
        <ResetBtn type='button'>로그아웃</ResetBtn>
      </ColWrapper>
    </ColWrapper>
  </Container>
);

export default UserDetailPage;
