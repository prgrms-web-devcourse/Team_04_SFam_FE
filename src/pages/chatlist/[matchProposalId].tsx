import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState, KeyboardEvent, useRef, useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { ChatReceiver } from '@components/ChatReceiver';
import { ChatSender } from '@components/ChatSender';
import { Divider } from '@components/Divider';
import { Dropdown, Item } from '@components/Dropdown';
import { Message } from '@components/Message';
import { ChatsProps, MessageReq } from '@interface/chat';
import { ProposalInfo } from '@interface/proposals';
import { Response } from '@interface/response';
import { userState } from '@recoil/atoms';
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

const dropdownItems = [
  { id: 0, text: '모집 중', value: { status: 'WAITING' } },
  { id: 1, text: '모집 완료', value: { status: 'IN_GAME' } },
];

const dropdownMatchDoneItems = [
  { id: 0, text: '모집 중', value: { status: 'WAITING' } },
  { id: 1, text: '모집 완료', value: { status: 'IN_GAME' } },
  { id: 2, text: '경기 완료', value: { status: 'END' } },
];

export interface ProposalStatusProps {
  [key: string]: string;
}

export interface MatchStatusProps {
  [key: string]: string;
}

const proposalStatusToString: ProposalStatusProps = {
  WAITING: '대기중',
  APPROVED: '수락',
  REFUSE: '거절',
  FIXED: '대상확정',
};

const matchStatusToString: MatchStatusProps = {
  WAITING: '모집중',
  IN_GAME: '모집완료',
  END: '경기종료',
};

const Chats: NextPage = () => {
  const router = useRouter();
  const { matchProposalId } = router.query;

  const [user] = useRecoilState(userState);

  // 신청 및 채팅 정보
  const [proposal, setProposal] = useState<ProposalInfo>({ id: 0, status: '', content: '', isMatchAuthor: false });
  const [chatsInfo, setChatsInfo] = useState<ChatsProps>();
  const matchStatus = chatsInfo?.match.status; // 신청 및 채팅 상태 정보
  const proposalStatus = proposal?.status;

  // 메시지 정보
  const [message, setMessage] = useState<MessageReq>({ targetId: 0, content: '', chattedAt: '' });
  // 스크롤 맨 아래로
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollIntoView({ block: 'end', inline: 'nearest' });
    }
  }, [chatsInfo]);

  useEffect(() => {
    scrollToBottom();
  }, [chatsInfo]);

  // 채팅 가져오는 API
  const getChatsApi = async () => {
    try {
      const res = await axiosAuthInstance.get<Response<ChatsProps>>(
        `/api/matches/proposals/${matchProposalId as string}/chats`,
      );
      const chatInfoRes = res.data.data;
      setChatsInfo(chatInfoRes);
    } catch (error) {
      console.log(error);
    }
  };

  // 매치 신청 정보 API
  useEffect(() => {
    if (!router.isReady) return;

    const proposalApi = async () => {
      try {
        const res = await axiosAuthInstance.get<Response<ProposalInfo>>(
          `/api/matches/proposals/${matchProposalId as string}`,
        );
        setProposal(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    proposalApi();
  }, [router.isReady]);

  // 채팅 조회 API
  useEffect(() => {
    if (!router.isReady) return;
    getChatsApi();
  }, [matchProposalId, router.isReady]);

  // 매치 종료 시 이벤트
  useEffect(() => {
    if (matchStatus === 'END') {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('경기 후기를 작성하러 가시겠습니까?') === true) {
        if (chatsInfo) router.push(`/matches/${chatsInfo.match.id}/result`);
      }
    }
  }, [chatsInfo, matchStatus, router]);

  // 상대방 아이디 설정
  useEffect(() => {
    if (chatsInfo) setMessage({ ...message, targetId: chatsInfo.match.targetProfile.id });
  }, [chatsInfo]);

  // 초대 수락 거절 API
  const patchMatchProposalApi = async (status: string) => {
    try {
      if (chatsInfo) {
        const res = await axiosAuthInstance.patch(
          `/api/matches/${chatsInfo.match.id}/proposals/${matchProposalId as string}`,
          {
            status,
          },
        );
        if (res.status === 200) {
          alert(`매치 요청이 ${proposalStatusToString[status]}되었습니다.`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 경기 모집중 모집완료 API
  const patchMatchesApi = async (status: string) => {
    try {
      if (chatsInfo) {
        const res = await axiosAuthInstance.patch(`/api/matches/${chatsInfo.match.id}`, { status });

        if (res.status === 200) {
          // TODO: 토스트로 변경
          alert(`모집 상태가 ${matchStatusToString[status]}로 설정되었습니다. `);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 채팅 보내기 API 연동
  const sendMessageApi = async () => {
    const date = new Date();
    date.setHours(date.getHours() + 9);
    const curChattedAt = date.toISOString().split('T');
    const messageCurChattedAt = `${curChattedAt[0]} ${curChattedAt[1].split('Z')[0].slice(0, 8)}`;

    try {
      const res = await axiosAuthInstance.post(`/api/matches/proposals/${matchProposalId as string}/chats`, {
        targetId: message.targetId,
        content: message.content,
        chattedAt: messageCurChattedAt,
      });
      if (res.status === 200) {
        setMessage({ ...message, content: '' });
        getChatsApi();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (item: Item<{ status: string }>) => {
    if (matchStatus === 'END') {
      if (chatsInfo) setChatsInfo({ ...chatsInfo, match: { ...chatsInfo.match, status: item.value.status } });
    } else {
      if (chatsInfo) setChatsInfo({ ...chatsInfo, match: { ...chatsInfo.match, status: item.value.status } });
      patchMatchesApi(item.value.status);
    }
  };

  const handleRefuse = () => {
    setProposal({ ...proposal, status: 'REFUSE' });
    patchMatchProposalApi('REFUSE');
  };

  const handleApprove = () => {
    setProposal({ ...proposal, status: 'APPROVED' });
    patchMatchProposalApi('APPROVED');
  };

  const handleMessage = () => {
    sendMessageApi();
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleMessage();
    }
  };

  if (!chatsInfo) {
    return <Container />;
  }

  return (
    <Container ref={scrollRef}>
      <RowWrapper
        alignItems='center'
        justifyContent='space-between'
      >
        <B1>{chatsInfo?.match.title}</B1>
        {matchStatus === 'WAITING' ? (
          <Dropdown
            items={dropdownItems}
            disabled={!proposal.isMatchAuthor}
            onSelect={handleSelect}
            placeholder='모집 중'
            round
          />
        ) : (
          <Dropdown
            items={dropdownMatchDoneItems}
            disabled={!proposal.isMatchAuthor}
            onSelect={handleSelect}
            placeholder={`${matchStatusToString[matchStatus as string]}`}
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
        {proposal ? (
          <InnerWrapper
            flexDirection='column'
            alignItems='center'
          >
            {proposalStatus === 'WAITING' && !proposal.isMatchAuthor ? (
              <InnerWrapper
                flexDirection='column'
                alignItems='center'
              >
                <GrayB3>공고 작성자에게 대화 요청 메시지를 전달했습니다.</GrayB3>
                <GrayB3>대화를 수락할 경우 채팅을 전송할 수 있습니다.</GrayB3>
              </InnerWrapper>
            ) : (
              <div />
            )}
            {proposalStatus === 'WAITING' && proposal.isMatchAuthor ? (
              <>
                <GrayB3>{chatsInfo?.match.targetProfile.nickname}님으로부터 대화 요청이 전송되었습니다.</GrayB3>
                <GrayB3>요청 내용</GrayB3>
                <GrayB3>{proposal.content}</GrayB3>
                <GrayB3>수락하시겠습니까?</GrayB3>
                <InnerWrapper>
                  <Button
                    backgroundColor='#F19A78'
                    width='184px'
                    onClick={handleRefuse}
                  >
                    거절
                  </Button>
                  <Button
                    width='184px'
                    onClick={handleApprove}
                  >
                    수락
                  </Button>
                </InnerWrapper>
              </>
            ) : (
              <div />
            )}
            {proposalStatus === 'APPROVED' && !proposal.isMatchAuthor ? (
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
            {proposalStatus === 'APPROVED' && proposal.isMatchAuthor ? (
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
            {proposalStatus === 'REFUSE' ? <GrayB3>신청이 거절되었습니다.</GrayB3> : <div />}
          </InnerWrapper>
        ) : (
          <div />
        )}
      </ColWrapper>
      <ColWrapper
        gap='16px'
        padding='0 0 70px 0 '
      >
        {chatsInfo.chats.map((chat, idx) =>
          chat.writer.id === user.id ? (
            <ChatSender
              chat={chat}
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
            />
          ) : (
            <ChatReceiver
              chat={chat}
              nickname={chatsInfo.match.targetProfile.nickname}
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
            />
          ),
        )}
      </ColWrapper>
      <BottomFixedWrapper>
        {proposalStatus === 'APPROVED' ? (
          <Message
            message={message}
            setMessage={setMessage}
            handleMessage={handleMessage}
            handleKeyPress={handleKeyPress}
          />
        ) : (
          <Message
            message={message}
            setMessage={setMessage}
            handleMessage={handleMessage}
            disabled
          />
        )}
      </BottomFixedWrapper>
    </Container>
  );
};

export default Chats;
