import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Avatar } from '@components/Avatar';
import { Divider } from '@components/Divider';
import { Paragraph } from '@components/Paragraph';
import { ReviewGroup } from '@components/ReviewGroup';
import { SportsIcon } from '@components/SportsIcon';
import { MatchRecordChart } from '@components/MatchRecordChart';
import { TeamMember } from '@components/TeamMember';
import { Response } from '@interface/response';
import { TeamInfo, TeamNameProps } from '@interface/team';
import { B1, B3, ColWrapper, Container, GrayB3, InnerWrapper, Label, RowWrapper } from '@styles/common';

const sportsText: TeamNameProps = {
  SOCCER: '축구',
  BASEBALL: '야구',
  BASKETBALL: '농구',
  TABLETENNIS: '탁구',
  BOWLING: '볼링',
  BADMINTON: '배드민턴',
  TENNIS: '테니스',
};

const TeamDetailPage: NextPage = () => {
  const router = useRouter();

  const [teamInfo, setTeamInfo] = React.useState<TeamInfo>({
    name: '',
    description: '',
    sportsCategory: '',
    members: [],
    matchRecord: {
      win: 0,
      draw: 0,
      lose: 0,
    },
    matchReview: {
      bestCount: 0,
      likeCount: 0,
      dislikeCount: 0,
    },
  });

  React.useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;

    (async () => {
      const {
        data: { data },
      } = await axiosAuthInstance.get<Response<TeamInfo>>(`/api/teams/${id as string}`);

      setTeamInfo(() => data);
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
          <InnerWrapper>
            <B1>{teamInfo.name}</B1>
            <SportsIcon sportsCategory={teamInfo.sportsCategory} />
          </InnerWrapper>
          <GrayB3>{sportsText[teamInfo.sportsCategory]}</GrayB3>
          <B3>팀원 수: {teamInfo.members.length}명</B3>
        </InnerWrapper>
      </RowWrapper>
      <Divider />
      <Paragraph>{teamInfo.description}</Paragraph>
      <Divider />
      <ColWrapper>
        <Label>팀 후기</Label>
        <ReviewGroup
          bestCount={teamInfo.matchReview.bestCount}
          likeCount={teamInfo.matchReview.likeCount}
          dislikeCount={teamInfo.matchReview.dislikeCount}
        />
      </ColWrapper>
      <Divider />
      <ColWrapper>
        <Label>팀 전적</Label>
        <MatchRecordChart matchRecord={teamInfo.matchRecord} />
      </ColWrapper>
      <Divider />
      <ColWrapper>
        <RowWrapper>
          <InnerWrapper alignItems='center'>
            <Label>팀원 목록</Label>
            {/* TODO: 로그인 유저와 팀의 리더가 일치할 때 보여질 버튼 링크 */}
          </InnerWrapper>
        </RowWrapper>
        <ColWrapper gap='16px'>
          {teamInfo.members.map((member) => (
            <div key={member.userId}>
              <TeamMember info={member} />
            </div>
          ))}
        </ColWrapper>
      </ColWrapper>
    </Container>
  );
};

export default TeamDetailPage;
