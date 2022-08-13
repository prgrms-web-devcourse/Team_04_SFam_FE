import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { SPORTS_TEXT } from '@constants/text';
import { Response } from '@interface/response';
import { TeamInfo } from '@interface/team';
import { userState } from '@recoil/atoms';
import { B2, RowWrapper, InnerWrapper, B1, GrayB3, B3, BoldB3, ColWrapper, BoldB2 } from '@styles/common';

const InviteAcceptance = () => {
  const router = useRouter();
  const { id } = router.query;
  const invitationId = id![0];
  const teamId = id![1];

  const [user] = useRecoilState(userState);

  const [teamInfo, setTeamInfo] = React.useState<TeamInfo>({
    id: 0,
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
    leader: {},
    logoImageUrl: null,
  });

  React.useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      const {
        data: { data },
      } = await axiosAuthInstance.get<Response<TeamInfo>>(`/api/teams/${teamId}`);

      setTeamInfo(() => data);
    })();
  }, [router.isReady]);

  const handleReject = () => {
    (async () => {
      try {
        const res = await axiosAuthInstance.patch(`/api/teams/${teamId}/invitation/${invitationId}`, {
          userId: user.id,
        });

        if (res.status === 200) router.push('/notification');
      } catch (e) {
        // 에러 처리
      }
    })();
  };

  const handleAccept = () => {
    (async () => {
      try {
        const res = await axiosAuthInstance.post(`/api/teams/${teamId}/members`, {
          userId: user.id,
          invitationId,
        });

        if (res.status === 200) router.push('/notification');
      } catch (err) {
        console.error(err);
      }
    })();
  };

  return (
    <ColWrapper
      gap='16px'
      padding='16px 32px'
    >
      <RowWrapper gap='16px'>
        {teamInfo && teamInfo.logoImageUrl !== null ? (
          <Avatar
            imgSrc={teamInfo.logoImageUrl}
            imgSize='72px'
          />
        ) : (
          <Avatar />
        )}
        <InnerWrapper
          flexDirection='column'
          justifyContent='center'
        >
          <B1>{teamInfo.name}</B1>
          <GrayB3>{SPORTS_TEXT[teamInfo.sportsCategory]}</GrayB3>
          <B3>
            팀원 수 <BoldB3>{teamInfo.members.length}명</BoldB3>
          </B3>
        </InnerWrapper>
      </RowWrapper>
      <ColWrapper gap='8px'>
        <B2>
          <BoldB2>{teamInfo.name}</BoldB2>에서 회원님을 초대했습니다.
        </B2>
        <B2>수락하시겠습니까?</B2>
      </ColWrapper>
      <InnerWrapper>
        <Button
          backgroundColor='primary'
          onClick={handleReject}
        >
          거절
        </Button>
        <Button onClick={handleAccept}>수락</Button>
      </InnerWrapper>
    </ColWrapper>
  );
};
export default InviteAcceptance;
