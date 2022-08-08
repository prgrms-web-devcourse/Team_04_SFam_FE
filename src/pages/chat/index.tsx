import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { ChatListItem } from '@components/ChatListItem';
import { Response } from '@interface/response';
import { ColWrapper, Container } from '@styles/common';

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
  const [chatList, setChatList] = useState<Chat[]>([]);

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const ChatListApi = async () => {
  //     await axiosAuthInstance
  //       .get<Response<Chat>>('/api/matches/proposals/')
  //       .then((res) => {
  //         if (res.status === 200) {
  //           setChatList(res.data.data);
  //         }
  //       });
  //   };
  //   ChatListApi();
  // }, [router.isReady]);

  return (
    <Container>
      <ColWrapper gap='16px'>
        {chatList.map((chat) => (
          <ChatListItem
            nickname={chat.target.nickname}
            lastChat={chat.lastChat.content}
            key={chat.id}
          />
        ))}
      </ColWrapper>
    </Container>
  );
};

export default ChatListPage;
