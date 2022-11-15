import { ChangeEvent, useEffect, useState } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { OldAvatar } from '@components/common/Avatar';
import { Button } from '@components/common/Button';

import { axiosAuthInstance } from '@api/axiosInstances';
import { userState } from '@recoil/atoms';
import { Container, InnerWrapper } from '@styles/common';
import { TeamInfo, Response } from 'types';

interface EditProfile {
  teamName?: string;
  logoImageUrl?: string | null;
}

const UserEditPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user] = useRecoilState(userState);

  const [teamInfo, setTeamInfo] = useState<TeamInfo>();
  const [isLeader, setIsLeader] = useState<boolean>();
  const [editTeamProfile, setEditTeamProfile] = useState<EditProfile>({
    teamName: teamInfo?.name,
    logoImageUrl: teamInfo?.logoImageUrl,
  });
  const date = new Date().toTimeString();

  useEffect(() => {
    if (!router.isReady) return;
    (async () => {
      const {
        data: { data },
      } = await axiosAuthInstance.get<Response<TeamInfo>>(`/api/teams/${id as string}`);
      setTeamInfo(() => data);
      setEditTeamProfile({ ...editTeamProfile, logoImageUrl: data.logoImageUrl });
      if (data.logoImageUrl) {
        setEditTeamProfile({ ...editTeamProfile, logoImageUrl: `${data.logoImageUrl}?date=${date}` });
      }
      if (data.leader.id === user.id) {
        setIsLeader(true);
      }
    })();
  }, [router.isReady]);

  const handleClick = () => {
    router.push(`/team/${id as string}`);
  };

  const handleTeamFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const patchTeamProfileAPi = async () => {
      try {
        if (!files) {
          alert('파일이 존재하지 않습니다.');
        } else {
          const formData = new FormData();
          formData.append('file', files[0]);
          if (teamInfo) {
            const res = await axiosAuthInstance.patch(`/api/teams/${teamInfo.id}/logo`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });

            alert(`${files[0].name} 팀 로고 이미지가 업로드 되었습니다.`);

            if (teamInfo.logoImageUrl) {
              // TODO: 백엔드에게 요청하기 URL 변경하도록
              setEditTeamProfile({ ...editTeamProfile, logoImageUrl: `${teamInfo.logoImageUrl}?date=${date}` });
            }

            // TODO: API 수정 이후 확인할 것 res에 이미지 URL 요청드림
            // setEditTeamProfile({ ...editTeamProfile, logoImageUrl: res.data.data.logoImageUrl });
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    patchTeamProfileAPi();
  };

  return isLeader ? (
    <Container>
      <InnerWrapper
        margin='20px 0 20px 0'
        alignItems='center'
        justifyContent='center'
      >
        {user && teamInfo && editTeamProfile.logoImageUrl !== null ? (
          <OldAvatar
            imgSrc={editTeamProfile.logoImageUrl}
            imgSize='100px'
            edit
            team
            handleFileChange={handleTeamFileChange}
          />
        ) : (
          <OldAvatar
            imgSize='100px'
            edit
            team
            handleFileChange={handleTeamFileChange}
          />
        )}
      </InnerWrapper>
      <Button onClick={handleClick}>완료</Button>
    </Container>
  ) : (
    <div />
  );
};

export default UserEditPage;
