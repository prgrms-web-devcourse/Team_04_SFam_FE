import axios, { AxiosError } from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { ChatListItem } from '@components/ChatListItem';
import { ErrorForm } from '@components/ErrorForm';
import { ServerError } from '@interface/api';
import { ProposalProps } from '@interface/proposals';
import { Response } from '@interface/response';
import { Anchor, ColWrapper, Container } from '@styles/common';

const ChatListPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState<boolean>();
  const [proposalList, setProposalList] = useState<ProposalProps[]>();

  useEffect(() => {
    if (!router.isReady) return;
    const proposalListApi = async () => {
      setLoading(true);
      try {
        const res = await axiosAuthInstance.get<Response<ProposalProps[]>>(`/api/matches/${id as string}/proposals`);
        setProposalList(res.data.data);
        setLoading(false);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          const error = e as AxiosError<ServerError>;
          if (error && error.response && error.response.data.message === 'Not found proposal') {
            setProposalList([]);
            setLoading(false);
          }
        }
      }
    };
    proposalListApi();
  }, [id, router.isReady]);

  if (!loading && proposalList?.length === 0) {
    return <ErrorForm errorText='대화가 없습니다' />;
  }
  return (
    <Container>
      <ColWrapper gap='16px'>
        {proposalList?.map((chat) => {
          const matchProposalId = chat.id;
          return (
            <Link
              href={`/chatlist/${matchProposalId}`}
              passHref
              key={chat.id}
            >
              <Anchor>
                {chat.lastChat !== null ? (
                  <ChatListItem
                    imgSrc={chat.target.profileImageUrl as string}
                    nickname={chat.target.nickname}
                    lastChat={chat.lastChat.content}
                    match={chat.match}
                    key={chat.id}
                  />
                ) : (
                  <ChatListItem
                    imgSrc={chat.target.profileImageUrl as string}
                    nickname={chat.target.nickname}
                    match={chat.match}
                    lastChat={chat.content}
                    key={chat.id}
                  />
                )}
              </Anchor>
            </Link>
          );
        })}
      </ColWrapper>
    </Container>
  );
};

export default ChatListPage;
