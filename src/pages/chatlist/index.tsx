import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { ChatListItem } from '@components/ChatListItem';
import { Response } from '@interface/response';
import { Anchor, ColWrapper, Container } from '@styles/common';

interface Chat {
  id: number;
  content: string;
  target: {
    nickname: string;
  };
  lastChat: {
    content: string;
  };
}
const ChatListPage: NextPage = () => {
  const router = useRouter();
  const [chatList, setChatList] = useState<Chat[]>([]);

  useEffect(() => {
    if (!router.isReady) return;
    const ChatListApi = async () => {
      await axiosAuthInstance.get<Response<Chat[]>>('/api/matches/proposals').then((res) => {
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
                  nickname={chat.target.nickname}
                  lastChat={chat.lastChat.content}
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
                  nickname={chat.target.nickname}
                  lastChat={chat.content}
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
