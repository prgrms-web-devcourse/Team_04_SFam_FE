import axios, { AxiosError } from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { ChatListItem } from '@components/ChatListItem';
import { ErrorForm } from '@components/ErrorForm';
import { Anchor, ColWrapper, Container } from '@styles/common';
import { ServerError, TotalChat, Response } from 'types';

const ChatListPage: NextPage = () => {
  const router = useRouter();
  const [chatList, setChatList] = useState<TotalChat[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    const ChatListApi = async () => {
      setLoading(true);
      try {
        await axiosAuthInstance.get<Response<TotalChat[]>>('/api/matches/proposals').then((res) => {
          if (res.status === 200) {
            setChatList(res.data.data);
            setLoading(false);
          }
        });
      } catch (e) {
        if (axios.isAxiosError(e)) {
          const error = e as AxiosError<ServerError>;
          if (error && error.response && error.response.data.message === 'Not found proposal') {
            setChatList([]);
          }
        }
      }
    };
    ChatListApi();
  }, [router.isReady]);

  if (!loading && chatList?.length === 0) {
    return (
      <ErrorForm
        errorText='대화가 없습니다'
        suggestionText='사용자들과 활발한 의사소통을 해보세요!'
      />
    );
  }
  return (
    <Container>
      <ColWrapper gap='16px'>
        {chatList?.map((chat) =>
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
