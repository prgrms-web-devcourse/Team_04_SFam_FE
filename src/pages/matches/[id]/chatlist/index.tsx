import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { ChatListItem } from '@components/ChatListItem';
import { ProposalProps } from '@interface/proposals';
import { Response } from '@interface/response';
import { Anchor, ColWrapper, Container, InnerWrapper } from '@styles/common';

const ChatListPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [proposalList, setPropsalList] = useState<ProposalProps[]>([]);

  useEffect(() => {
    if (!router.isReady) return;
    const proposalListApi = async () => {
      setLoading(true);
      await axiosAuthInstance.get<Response<ProposalProps[]>>(`/api/matches/${id as string}/proposals`).then((res) => {
        try {
          if (res.status === 200) {
            setPropsalList(res.data.data);
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      });
    };
    proposalListApi();
  }, [id, router.isReady]);

  return loading ? (
    <Container />
  ) : (
    <Container>
      <ColWrapper gap='16px'>
        {proposalList.map((chat) => {
          const matchProposalId = chat.id;
          return (
            <Link
              // href={`/matches/${id as string}/chats`}
              href={`/matches/${id as string}/chatlist/${matchProposalId}`}
              passHref
              key={chat.id}
            >
              <Anchor>
                <ChatListItem
                  nickname={chat.target.nickname}
                  lastChat={chat.content}
                  key={chat.id}
                />
              </Anchor>
            </Link>
          );
        })}
      </ColWrapper>
    </Container>
  );
};

export default ChatListPage;
