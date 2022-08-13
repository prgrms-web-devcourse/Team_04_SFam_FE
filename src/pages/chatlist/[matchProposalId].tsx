import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, KeyboardEvent, useRef, useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { ChatReceiver } from '@components/ChatReceiver';
import { ChatSender } from '@components/ChatSender';
import { Dropdown, Item } from '@components/Dropdown';
import { Heading } from '@components/Heading';
import { Message } from '@components/Message';
import { Navigator } from '@components/Navigator';
import { Paragraph } from '@components/Paragraph';
import { ChatsProps, MessageReq } from '@interface/chat';
import { ProposalInfo } from '@interface/proposals';
import { Response } from '@interface/response';
import { userState } from '@recoil/atoms';
import {
  Anchor,
  B1,
  BoldGrayB2,
  ChatContainer,
  ChatMatchHeader,
  ChatMatchTitleWrapper,
  ColWrapper,
  Container,
  DropdownWrapper,
  GrayB3,
  InnerWrapper,
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
  IN_GAME: '모집 완료',
  END: '경기 완료',
};

const Chats: NextPage = () => {
  const router = useRouter();
  const { matchProposalId } = router.query;

  const [user] = useRecoilState(userState);

  const [loading, setLoading] = useState(true);
  // 신청 및 채팅 정보
  const [proposal, setProposal] = useState<ProposalInfo>({ id: 0, status: '', content: '', isMatchAuthor: false });
  const [chatsInfo, setChatsInfo] = useState<ChatsProps>();

  // 매치 상태, 신청 상태
  const [matchStatus, setMatchStatus] = useState('');
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
      setMatchStatus(chatInfoRes.match.status);
      if (chatInfoRes.match.status === 'END') {
        await router.replace({
          pathname: `/matches/${chatInfoRes.match.id}/review`,
          query: { proposalId: matchProposalId },
        });
      }
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
    (async () => {
      await getChatsApi();
      setLoading(false);
    })();
  }, [matchProposalId, router.isReady]);

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
    if (!chatsInfo) return;
    const { status } = item.value;
    if (status === 'END') {
      router.push({
        pathname: `/matches/${chatsInfo.match.id}/result`,
        query: { proposalId: matchProposalId },
      });
      return;
    }
    setMatchStatus(() => status);
    if (status !== 'END') patchMatchesApi(item.value.status);
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

  if (loading) return null;
  if (!chatsInfo) {
    return <Container />;
  }
  return (
    <>
      <Heading />
      <ChatContainer ref={scrollRef}>
        <ChatMatchHeader>
          <ChatMatchTitleWrapper>
            <Link
              href={`/matches/${chatsInfo.match.id}`}
              passHref
            >
              <Anchor>
                <B1>{chatsInfo?.match.title}</B1>
              </Anchor>
            </Link>
          </ChatMatchTitleWrapper>
          <DropdownWrapper>
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
                placeholder={`${matchStatusToString[matchStatus]}`}
                round
              />
            )}
          </DropdownWrapper>
        </ChatMatchHeader>
        <ColWrapper
          alignItems='center'
          justifyContent='center'
          gap='16px'
          padding='0 16px'
        >
          <BoldGrayB2>2022년 4월 20일</BoldGrayB2>
          {proposal && (
            <InnerWrapper
              flexDirection='column'
              alignItems='center'
              width='100%'
            >
              {proposalStatus === 'WAITING' && !proposal.isMatchAuthor && (
                <InnerWrapper
                  flexDirection='column'
                  alignItems='center'
                >
                  <GrayB3>공고 작성자에게 대화 요청 메시지를 전달했습니다.</GrayB3>
                  <GrayB3>대화를 수락할 경우 채팅을 전송할 수 있습니다.</GrayB3>
                </InnerWrapper>
              )}
              {proposalStatus === 'WAITING' && proposal.isMatchAuthor && (
                <InnerWrapper
                  width='100%'
                  flexDirection='column'
                >
                  <GrayB3>{chatsInfo?.match.targetProfile.nickname}님으로부터 대화 요청이 있습니다.</GrayB3>
                  <GrayB3>수락하시겠습니까?</GrayB3>
                  <Paragraph width='100%'>{proposal.content}</Paragraph>
                  <InnerWrapper width='100%'>
                    <Button
                      backgroundColor='primary'
                      onClick={handleRefuse}
                    >
                      거절
                    </Button>
                    <Button onClick={handleApprove}>수락</Button>
                  </InnerWrapper>
                </InnerWrapper>
              )}
              {proposalStatus === 'APPROVED' && !proposal.isMatchAuthor && (
                <InnerWrapper
                  flexDirection='column'
                  alignItems='center'
                >
                  <GrayB3>상대방이 대화를 수락했습니다.</GrayB3>
                  <GrayB3>채팅을 전송할 수 있습니다.</GrayB3>
                </InnerWrapper>
              )}
              {proposalStatus === 'APPROVED' && proposal.isMatchAuthor && (
                <InnerWrapper
                  flexDirection='column'
                  alignItems='center'
                >
                  <GrayB3>대화를 수락했습니다.</GrayB3>
                  <GrayB3>채팅을 전송할 수 있습니다.</GrayB3>
                </InnerWrapper>
              )}
              {proposalStatus === 'REFUSE' && <GrayB3>신청이 거절되었습니다.</GrayB3>}
            </InnerWrapper>
          )}
        </ColWrapper>
        <ColWrapper gap='16px'>
          {chatsInfo.chats.map((chat, idx) =>
            chat.writer.id === user.id ? (
              <ChatSender
                chat={chat}
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
              />
            ) : (
              <ChatReceiver
                imgSrc={chatsInfo.match.targetProfile.profileImageUrl}
                chat={chat}
                nickname={chatsInfo.match.targetProfile.nickname}
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
              />
            ),
          )}
        </ColWrapper>
      </ChatContainer>
      {proposalStatus === 'APPROVED' && message.content.length !== 0 ? (
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
      <Navigator />
    </>
  );
};

export default Chats;
