import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { NotificationListItem } from '@components/NotificationListItem';
import { Response } from '@interface/response';
import { userState } from '@recoil/atoms';
import { BoldB1, ColWrapper, Container } from '@styles/common';

interface Invitation {
  values: [];
}

interface TeamInvite {
  createdAt: string;
  invitationId: number;
  name: string;
  teamId: number;
}

const NotificationPage: NextPage = () => {
  const router = useRouter();
  const [loginUser] = useRecoilState(userState);
  const [invitations, setInvitations] = useState<Invitation>();

  console.log('====================================');
  console.log(`${new Date().toISOString().split('T')[0]} ${new Date().toISOString().split('T')[1].slice(0, 8)}`);
  console.log('====================================');
  useEffect(() => {
    if (!router.isReady) return;
    const currentTime = `${new Date().toISOString().split('T')[0]} ${new Date()
      .toISOString()
      .split('T')[1]
      .slice(0, 8)}`;
    const InvitationListApi = async () => {
      await axiosAuthInstance
        .get<Response<Invitation>>('/api/teams/invitations', {
          params: {
            createdAt: currentTime,
            // id: loginUser.id,
            size: 10,
            status: 'WAITING',
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setInvitations(res.data.data);
          }
        });
    };
    InvitationListApi();
  }, [loginUser.id, router.isReady]);

  return (
    <Container>
      <ColWrapper gap='16px'>
        {invitations ? (
          invitations.values.map((invitation: TeamInvite) => (
            <NotificationListItem
              name={invitation.name}
              key={invitation.teamId}
            />
          ))
        ) : (
          <BoldB1>알림이 없습니다!</BoldB1>
        )}
      </ColWrapper>
    </Container>
  );
};

export default NotificationPage;
