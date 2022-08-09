import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Avatar } from '@components/Avatar';
import { SPORTS_TEXT } from '@constants/text';
import { Response } from '@interface/response';
import { TeamInfo } from '@interface/team';
import { userState } from '@recoil/atoms';
import { B2, RowWrapper, InnerWrapper, B1, GrayB3, B3 } from '@styles/common';

import * as S from './InviteAcceptance.styles';

const InviteAcceptance = () => {
  const router = useRouter();
  const { id } = router.query;
  const invitationId = id![0];
  const teamId = id![1];
  const [user] = useRecoilState(userState);

  const [teamInfo, setTeamInfo] = React.useState<TeamInfo>({
    name: '',
    description: '',
    sportsCategory: '',
    leader: {},
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

    (async () => {
      const {
        data: { data },
      } = await axiosAuthInstance.get<Response<TeamInfo>>(`/api/teams/${teamId}`);

      setTeamInfo(() => data);
    })();
  }, [router.isReady]);

  const handleReject = () => {
    axiosAuthInstance.patch(`/api/teams/${teamId}/invitation/${invitationId}`, {
      teamId,
      invitationId,
    });
  };

  const handleAccept = () => {
    try {
      const fetch = async () => {
        await axiosAuthInstance({
          method: 'post',
          url: `/api/teams/${teamId}/members`,
          data: {
            userId: user.id,
          },
        });
      };
      fetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Container>
      <RowWrapper>
        <Avatar />
        <InnerWrapper
          flexDirection='column'
          justifyContent='center'
          margin='0px 16px'
        >
          <B1>{teamInfo.name}</B1>
          <GrayB3>{SPORTS_TEXT[teamInfo.sportsCategory]}</GrayB3>
          <B3>팀원 수: {teamInfo.members.length}명</B3>
        </InnerWrapper>
      </RowWrapper>
      <S.TextContainer>
        <S.Team>{teamInfo.name}</S.Team>
        <B2>에서 회원님을 초대했습니다. 수락하시겠습니까? </B2>
      </S.TextContainer>
      <S.ButtonContainer>
        <S.RejectButton
          height='50px'
          width='160px'
          fontSize='20px'
          onClick={handleReject}
        >
          거절
        </S.RejectButton>
        <S.AcceptButton
          height='50px'
          width='160px'
          fontSize='20px'
          onClick={handleAccept}
        >
          수락
        </S.AcceptButton>
      </S.ButtonContainer>
    </S.Container>
  );
};
export default InviteAcceptance;
