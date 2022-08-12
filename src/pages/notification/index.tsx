import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { NotificationListItem } from '@components/NotificationListItem';
import { Response } from '@interface/response';
import { BoldB1, ColWrapper, Container } from '@styles/common';

interface Invitation {
  values: [];
  hasNext: boolean;
  cursor: {
    createdAt: string;
    id: number;
  };
}

interface TeamInvite {
  createdAt: string;
  invitationId: number;
  logoImageUrl: string;
  teamId: number;
  name: string;
}

const NotificationPage: NextPage = () => {
  const [state, setState] = useState({
    values: [],
    hasNext: false,
    cursor: {
      createdAt: '',
      id: 0,
    },
  });
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getInvitationList = async () => {
      const res = await axiosAuthInstance.get<Response<Invitation>>('/api/teams/invitations', {
        params: {
          size: 10,
          status: 'WAITING',
        },
      });
      if (res.status === 200) {
        setState({
          values: res.data.data.values,
          hasNext: res.data.data.hasNext,
          cursor: res.data.data.cursor,
        });
        setIsLoading(false);
      }
    };
    getInvitationList();
  }, []);

  const getMoreInvitationList = async () => {
    const res = await axiosAuthInstance.get<Response<Invitation>>('/api/teams/invitations', {
      params: {
        createdAt: state.cursor.createdAt,
        id: state.cursor.id,
        size: 10,
        status: 'WAITING',
      },
    });
    setState({
      ...state,
      cursor: res.data.data.cursor,
      values: [...state.values, ...res.data.data.values],
      hasNext: res.data.data.hasNext,
    });
  };

  useEffect(() => {
    if (state.values?.length && observerRef.current !== null && state.hasNext) {
      const lastItem = observerRef.current.children[observerRef.current.children.length - 1];
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!isLoading && entry.isIntersecting) {
              getMoreInvitationList();
              io.unobserve(lastItem);
            }
          });
        },
        { threshold: 1 },
      );
      io.observe(lastItem);
    }
  }, [state.values?.length]);

  return (
    <Container>
      <ColWrapper gap='16px'>
        {state ? (
          <ColWrapper
            ref={observerRef}
            gap='16px'
          >
            {state.values.map((invitation: TeamInvite) => (
              <NotificationListItem
                imgSrc={invitation.logoImageUrl}
                name={invitation.name}
                invitationId={invitation.invitationId}
                teamId={invitation.teamId}
                key={invitation.invitationId}
              />
            ))}
          </ColWrapper>
        ) : (
          <BoldB1>알림이 없습니다!</BoldB1>
        )}
      </ColWrapper>
    </Container>
  );
};

export default NotificationPage;
