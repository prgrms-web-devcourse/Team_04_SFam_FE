import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { Divider } from '@components/Divider';
import { Paragraph } from '@components/Paragraph';
import { ReviewGroup } from '@components/ReviewGroup';
import { TeamChart } from '@components/TeamChart';
import { TeamListItem } from '@components/TeamListItem';
import { B1, B3, ColWrapper, Container, GrayB3, InnerWrapper, Label, RowWrapper } from '@styles/common';
import { TeamInfo, TeamNameProps } from 'interface/team';
import { NextPage } from 'next';

const DummyData: TeamInfo = {
  name: '우주 최강 연승 팀',
  description: '안녕하세요!! 대구 서구에서 활동하는 연승팀입니다. 재밌게 테니스 치실 분들 연락 주세요!',
  sportsCategory: 'tennis',
  members: [
    {
      userId: 1,
      nickname: '규범장',
      role: 'leader',
    },
    {
      userId: 2,
      nickname: '연승',
      role: 'member',
    },
  ],
  matchRecord: {
    win: 3,
    draw: 1,
    lose: 2,
  },
  review: {
    bestCount: 10,
    likeCount: 2,
    dislikeCount: 1,
  },
};
const teamName: TeamNameProps = {
  soccer: '축구',
  baseball: '야구',
  basketball: '농구',
  tableTennis: '탁구',
  bowling: '볼링',
  badminton: '배드민턴',
  tennis: '테니스',
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
        {/* TODO: icon 추가 */}
        <B1>{DummyData.name}</B1>
        <GrayB3>{teamName[DummyData.sportsCategory]}</GrayB3>
        <B3>팀원 수: {DummyData.members.length}명</B3>
      </InnerWrapper>
    </RowWrapper>
    <Divider />
    <Paragraph>{DummyData.description}</Paragraph>
    <Divider />
    <ColWrapper>
      <Label>팀 후기</Label>
      <ReviewGroup
        bestCount={DummyData.review.bestCount}
        likeCount={DummyData.review.likeCount}
        dislikeCount={DummyData.review.dislikeCount}
      />
    </ColWrapper>
    <Divider />
    <ColWrapper>
      <Label>팀 전적</Label>
      <TeamChart />
    </ColWrapper>
    <Divider />
    <ColWrapper>
      <RowWrapper>
        <InnerWrapper alignItems='center'>
          <Label>팀원 목록</Label>
          <Button
            width='20px'
            height='20px'
          >
            +
          </Button>
        </InnerWrapper>
      </RowWrapper>
      <ColWrapper>
        {DummyData.members.map((member) => (
          <div key={member.userId}>
            <TeamListItem username={member.nickname} />
          </div>
        ))}
      </ColWrapper>
    </ColWrapper>
  </Container>
);

export default UserDetailPage;
