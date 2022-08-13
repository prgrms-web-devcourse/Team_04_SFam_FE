import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { ChatListItem } from '@components/ChatListItem';
import { TotalChat } from '@interface/chat';
import { Response } from '@interface/response';
import { Anchor, ColWrapper, Container } from '@styles/common';

const ChatListPage: NextPage = () => {
  const router = useRouter();
  const [chatList, setChatList] = useState<TotalChat[]>([]);

  useEffect(() => {
    if (!router.isReady) return;
    const ChatListApi = async () => {
      await axiosAuthInstance.get<Response<TotalChat[]>>('/api/matches/proposals').then((res) => {
        if (res.status === 200) {
          setChatList(res.data.data);
        }
      });
    };
    ChatListApi();
  }, [router.isReady]);

  return (
    <Container>
      <ColWrapper gap='16px'>
        {chatList.map((chat) =>
          chat.lastChat.content !== null ? (
            <Link
              href={`/chatlist/${chat.id}`}
              passHref
              key={chat.id}
            >
              <Anchor>
                <ChatListItem
                  imgSrc={chat.target.profileImageUrl}
                  nickname={chat.target.nickname}
                  lastChat={chat.lastChat.content}
                  match={chat.match}
                />
              </Anchor>
            </Link>
          ) : (
            <Link
              href={`/chatlist/${chat.id}`}
              passHref
              key={chat.id}
            >
              <Anchor>
                <ChatListItem
                  imgSrc={chat.target.profileImageUrl}
                  nickname={chat.target.nickname}
                  lastChat={chat.content}
                  match={chat.match}
                />
              </Anchor>
            </Link>
          ),
        )}
      </ColWrapper>
    </Container>
  );
};

export default ChatListPage;
