import { NextPage } from 'next';

import { ChatListItem } from '@components/ChatListItem';
import { ColWrapper, Container } from '@styles/common';

const DummyData = {
  chats: [
    {
      id: 1, // 매칭 요청 ID (match_proposal_id)
      content: '저랑 해주세요!', // 매칭 요청 내용 (match_proposal - content)
      target: {
        // 채팅 상대
        nickname: '연승연', // 채팅 상대 닉네임
      },
      lastChat: {
        // 마지막 채팅
        content: '경기 관련 문의드려요!', // 채팅 내용
      },
    },
    {
      id: 2, // 매칭 요청 ID (match_proposal_id)
      content: '나랑 해요', // 매칭 요청 내용 (match_proposal - content)
      target: {
        // 채팅 상대
        nickname: '정기쓰', // 채팅 상대 닉네임
      },
      lastChat: {
        // 마지막 채팅
        content: '저랑 하시죠.', // 채팅 내용
      },
    },
  ],
};
const ChatListPage: NextPage = () => (
  <Container>
    <ColWrapper gap='16px'>
      {DummyData.chats.map((chat) => (
        <ChatListItem
          nickname={chat.target.nickname}
          lastChat={chat.lastChat.content}
          key={chat.id}
        />
      ))}
    </ColWrapper>
  </Container>
);

export default ChatListPage;
