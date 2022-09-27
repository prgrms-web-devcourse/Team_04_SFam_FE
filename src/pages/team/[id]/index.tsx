import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaPlus } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';
import { useRecoilValue } from 'recoil';

import { OldAvatar } from '@components/common/Avatar';
import { Button } from '@components/common/Button';
import { Divider } from '@components/common/Divider';
import { Paragraph } from '@components/common/Paragraph';

import { axiosAuthInstance } from '@api/axiosInstances';
import { MatchRecordChart } from '@components/MatchRecordChart';
import { ReviewGroup } from '@components/ReviewGroup';
import { SportsIcon } from '@components/SportsIcon';
import { TeamMember } from '@components/TeamMember';
import { SPORTS_TEXT } from '@constants/text';
import { userState } from '@recoil/atoms';
import { Anchor, B1, B3, ColWrapper, Container, GrayB3, InnerWrapper, Label, RowWrapper } from '@styles/common';
import { TeamInfo, Response } from 'types';

const TeamDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const user = useRecoilValue(userState);
  const [teamInfo, setTeamInfo] = React.useState<TeamInfo>();
  const [isLeader, setIsLeader] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState<boolean>();

  React.useEffect(() => {
    if (!router.isReady) return;
    setIsLoading(true);
    (async () => {
      const {
        data: { data },
      } = await axiosAuthInstance.get<Response<TeamInfo>>(`/api/teams/${id as string}`);

      setTeamInfo(() => data);
      if (data.leader.id === user.id) {
        setIsLeader(true);
      }
      setIsLoading(false);
    })();
  }, [router.isReady]);

  return !isLoading && teamInfo ? (
    <Container>
      <RowWrapper gap='16px'>
        {teamInfo.logoImageUrl ? <OldAvatar imgSrc={teamInfo.logoImageUrl} /> : <OldAvatar />}
        <InnerWrapper
          flexDirection='column'
          justifyContent='center'
        >
          <InnerWrapper>
            <B1>{teamInfo.name}</B1>
            <SportsIcon sportsCategory={teamInfo.sportsCategory} />
          </InnerWrapper>
          <GrayB3>{SPORTS_TEXT[teamInfo.sportsCategory]}</GrayB3>
          <B3>팀원 수 : {teamInfo.members.length}명</B3>
        </InnerWrapper>
      </RowWrapper>
      <ColWrapper gap='16px'>
        {isLeader && (
          <Link href={`/team/${id as string}/edit`}>
            <Anchor>
              <Button
                height='40px'
                fontSize='16px'
                outline
              >
                팀 프로필 편집
              </Button>
            </Anchor>
          </Link>
        )}
      </ColWrapper>
      <Paragraph>{teamInfo.description}</Paragraph>
      <Divider />
      <ColWrapper gap='16px'>
        <Label>팀 후기</Label>
        <ReviewGroup
          bestCount={teamInfo.matchReview.bestCount}
          likeCount={teamInfo.matchReview.likeCount}
          dislikeCount={teamInfo.matchReview.dislikeCount}
        />
      </ColWrapper>
      <Divider />
      <ColWrapper gap='16px'>
        <Label>팀 전적</Label>
        <MatchRecordChart matchRecord={teamInfo.matchRecord} />
      </ColWrapper>
      <Divider />
      <ColWrapper gap='16px'>
        <InnerWrapper
          gap='8px'
          alignItems='center'
        >
          <Label>팀원 목록</Label>
          {isLeader && (
            <Link
              href={`/team/${router.query.id as string}/invitation`}
              passHref
            >
              <Anchor>
                <Button
                  width='24px'
                  height='24px'
                  round
                >
                  <FaPlus size='16px' />
                </Button>
              </Anchor>
            </Link>
          )}
        </InnerWrapper>
        <ColWrapper gap='16px'>
          {teamInfo.members.map((member) => (
            <div key={member.userId}>
              <TeamMember info={member} />
            </div>
          ))}
        </ColWrapper>
      </ColWrapper>
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

export default TeamDetailPage;
