import { Button } from '@components/Button';
import { ChatReceiver } from '@components/ChatReceiver';
import { ChatSender } from '@components/ChatSender';
import { Divider } from '@components/Divider';
import { Dropdown, Item } from '@components/Dropdown';
import { Message } from '@components/Message';
import {
  B1,
  BoldGrayB2,
  BottomFixedWrapper,
  ColWrapper,
  Container,
  GrayB3,
  InnerWrapper,
  RowWrapper,
} from '@styles/common';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { userState } from '@recoil/atoms';
import { useRecoilState } from 'recoil';

const DropdownItems = [
  { id: 0, text: '모집 중', value: { status: 'WAITING' } },
  { id: 1, text: '모집 완료', value: { status: 'DONE' } },
];

const DropdownMatchDoneItems = [
  { id: 0, text: '모집 중', value: { status: 'WAITING' } },
  { id: 1, text: '모집 완료', value: { status: 'DONE' } },
  { id: 2, text: '경기 완료', value: { status: 'MATCH_DONE' } },
];

// TODO: 채팅 조회 API 사용
const DummyData = {
  match: {
    title: '저희랑 풋살 하실 분 구합니다.',
    status: 'WAITING',
    targetProfile: {
      nickname: '장규범',
    },
  },
  chats: [
    {
      id: 0,
      content: '저희랑 한판 붙으시죠!',
      target: {
        nickname: '연승연',
      },
      lastChat: {
        content: '저희랑 한판 붙으시죠!',
      },
      // TODO: 시간 순으로 배열을 해야될 것 같아서 createdAt 보내달라고 해야할 것 같습니다.
    },
  ],
};

// TODO: API users 검색하는 것으로 닉네임 검색

const Chats: NextPage = () => {
  const [status, setStatus] = useState('WAITING');
  const [loginUser] = useRecoilState(userState);
  const [author, setAuthor] = useState(false);
  useEffect(() => {
    if (loginUser.nickname === DummyData.chats[0].target.nickname) {
      setAuthor(true);
    }
  }, [loginUser]);

  const handleSelect = (item: Item<{ status: string }>) => {
    setStatus(item.value.status);
  };
  return (
    <Container>
      <RowWrapper
        alignItems='center'
        justifyContent='space-between'
      >
        <B1>공고 제목</B1>
        {/* TODO: 매치 status에 따라 조건부 렌더링 API 요청해서 매치 상태 status 받아올 것 */}
        {status === 'WAITING' ? (
          <Dropdown
            items={DropdownItems}
            onSelect={handleSelect}
            placeholder='모집 중'
            round
          />
        ) : (
          <Dropdown
            items={DropdownMatchDoneItems}
            onSelect={handleSelect}
            placeholder='모집 중'
            round
          />
        )}
      </RowWrapper>
      <Divider />
      <ColWrapper
        alignItems='center'
        justifyContent='center'
        gap='8px'
      >
        <BoldGrayB2>2022년 4월 20일</BoldGrayB2>
        {author ? (
          <InnerWrapper
            flexDirection='column'
            alignItems='center'
          >
            <GrayB3>연승연 님으로부터 대화 요청이 전송되었습니다.</GrayB3>
            <GrayB3>요청 내용</GrayB3>
            <GrayB3>저희랑 해요!</GrayB3>
            <GrayB3>수락하시겠습니까?</GrayB3>
            <InnerWrapper>
              <Button
                backgroundColor='#F19A78'
                width='184px'
              >
                거절
              </Button>
              <Button width='184px'>수락</Button>
            </InnerWrapper>
          </InnerWrapper>
        ) : (
          <InnerWrapper
            flexDirection='column'
            alignItems='center'
          >
            <GrayB3>공고 작성자에게 대화 요청 메시지를 전달했습니다.</GrayB3>
            <GrayB3>대화를 수락할 경우 채팅을 전송할 수 있습니다.</GrayB3>
          </InnerWrapper>
        )}
        {/* TODO: 조건부 렌더링 */}
        {status === 'DONE' && loginUser.nickname !== DummyData.chats[0].target.nickname ? (
          <InnerWrapper
            flexDirection='column'
            alignItems='center'
          >
            <GrayB3>상대방이 대화를 수락했습니다.</GrayB3>
            <GrayB3>채팅을 전송할 수 있습니다.</GrayB3>
          </InnerWrapper>
        ) : (
          <div />
        )}
        {status === 'DONE' && loginUser.nickname === DummyData.chats[0].target.nickname ? (
          <InnerWrapper
            flexDirection='column'
            alignItems='center'
          >
            <GrayB3>대화를 수락했습니다.</GrayB3>
            <GrayB3>채팅을 전송할 수 있습니다.</GrayB3>
          </InnerWrapper>
        ) : (
          <div />
        )}
      </ColWrapper>
      <ColWrapper
        gap='16px'
        padding='0 0 70px 0 '
      >
        {/* TODO: API 연동 후 번갈아 나오게 조건부 렌더링 아이디 홀수짝수 여부로 해도 될 듯 */}
        <ChatReceiver />
        <ChatSender />
        <ChatReceiver />
        <ChatSender />
        <ChatReceiver />
        <ChatSender />
        <ChatReceiver />
        <ChatSender />
      </ColWrapper>
      <BottomFixedWrapper>
        <Message />
      </BottomFixedWrapper>
    </Container>
  );
};

export default Chats;
