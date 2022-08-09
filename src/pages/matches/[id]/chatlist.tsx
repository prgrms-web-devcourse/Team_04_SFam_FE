import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { ChatListItem } from '@components/ChatListItem';
import { Response } from '@interface/response';
import { ColWrapper, Container, InnerWrapper } from '@styles/common';

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
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);

  useEffect(() => {
    if (!router.isReady) return;
    const ChatListApi = async () => {
      setLoading(true);
      await axiosAuthInstance.get<Response<Chat[]>>(`/api/matches/${id as string}/proposals`).then((res) => {
        try {
          if (res.status === 200) {
            setChatList(res.data.data);
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      });
    };
    ChatListApi();
  }, [id, router.isReady]);

  return loading ? (
    <Container>loading...</Container>
  ) : (
    <Container>
      <ColWrapper gap='16px'>
        {chatList.map((chat) => (
          <ChatListItem
            nickname={chat.target.nickname}
            lastChat={chat.content}
            key={chat.id}
          />
        ))}
      </ColWrapper>
    </Container>
  );
};

export default ChatListPage;
