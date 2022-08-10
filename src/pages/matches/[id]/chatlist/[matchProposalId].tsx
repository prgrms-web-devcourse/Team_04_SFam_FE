import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { ChatReceiver } from '@components/ChatReceiver';
import { ChatSender } from '@components/ChatSender';
import { Divider } from '@components/Divider';
import { Dropdown, Item } from '@components/Dropdown';
import { Message } from '@components/Message';
import { ChatsProps } from '@interface/chat';
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
  WAITING: '대기중',
  IN_GAME: '모집완료',
  END: '경기종료',
};

const Chats: NextPage = () => {
  const router = useRouter();
  const { id, matchProposalId } = router.query;

  // 신청 및 채팅 정보
  const [proposal, setProposal] = useState<ProposalInfo>();
  const [chatsInfo, setChatsInfo] = useState<ChatsProps>();
  // TODO: 초기 상태를 어떻게 해야할지 proposal API 나오면 status에 넣어줄것(임의로 WAITING 박음)
  // 신청 및 채팅 상태 정보
  const [proposalStatus, setProposalStatus] = useState(proposal?.status);
  const [matchStatus, setMatchStatus] = useState(chatsInfo?.match.status);

  // author인지 파악하기 위한 정보
  const [loginUser] = useRecoilState(userState);
  const [isAuthor, setIsAuthor] = useState<boolean>();

  // 매치 신청 정보 API
  useEffect(() => {
    if (!router.isReady || proposalStatus === 'APPROVED' || proposalStatus === 'REFUSE' || proposalStatus === 'FIXED')
      return;

    const proposalApi = async () => {
      await axiosAuthInstance
        .get<Response<ProposalInfo>>(`/api/matches/proposals/${matchProposalId as string}`)
        .then((res) => {
          try {
            if (res.status === 200) {
              setProposal(res.data.data);
              setProposalStatus(res.data.data.status);
            }
          } catch (error) {
            console.log(error);
          }
        });
    };
    proposalApi();
  }, [router.isReady]);

  // 채팅 조회 API
  useEffect(() => {
    if (!router.isReady) return;
    const getChatsApi = async () => {
      await axiosAuthInstance
        .get<Response<ChatsProps>>(`/api/matches/proposals/${matchProposalId as string}/chats`, { data: { id } })
        .then((res) => {
          if (res.status === 200) {
            setChatsInfo(res.data.data);
            setMatchStatus(res.data.data.match.status);
            if (loginUser.nickname !== res.data.data.match.targetProfile.nickname) {
              setIsAuthor(true);
            }
          }
        });
    };
    getChatsApi();
  }, [id, loginUser.nickname, matchProposalId, router.isReady]);

  // 매치 종료 시 이벤트
  useEffect(() => {
    if (matchStatus === 'END') {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('경기 후기를 작성하러 가시겠습니까?') === true) {
        router.push(`/matches/${id as string}/result`);
      } else {
        setMatchStatus('IN_GAME');
      }
    }
  }, [id, matchStatus, router]);

  // 초대 수락 거절 API
  const patchMatchProposalApi = async (status: string) => {
    await axiosAuthInstance
      .patch(`/api/matches/${id as string}/proposals/${matchProposalId as string}`, {
        status,
      })
      .then((res) => {
        console.log(res);
        try {
          if (res.status === 200) {
            alert(`매치 요청이 ${proposalStatusToString[status]}되었습니다.`);
          }
        } catch (error) {
          console.log(error);
        }
      });
  };

  // 경기 모집중 모집완료 API
  const patchMatchesApi = async () => {
    await axiosAuthInstance.patch(`/api/matches/${id as string}`, { status: matchStatus }).then((res) => {
      try {
        if (res.status === 200) {
          // TODO: 토스트로 변경
          alert(`모집 상태가 ${matchStatusToString[matchStatus as string]}로 설정되었습니다. `);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  // TODO: 채팅 보내기 API 연동

  const handleSelect = (item: Item<{ status: string }>) => {
    if (matchStatus === 'END') {
      setMatchStatus(item.value.status);
    } else {
      setMatchStatus(item.value.status);
      patchMatchesApi();
    }
  };

  const handleRefuse = () => {
    setProposalStatus('REFUSE');
    patchMatchProposalApi('REFUSE');
  };

  const handleApprove = () => {
    setProposalStatus('APPROVED');
    patchMatchProposalApi('APPROVED');
  };
  // console.log(isAuthor);
  // console.log(proposalStatus);
  console.log(matchStatus);
  // console.log(chatsInfo);
  // console.log(matchInfo);
  return (
    <Container>
      <RowWrapper
        alignItems='center'
        justifyContent='space-between'
      >
        <B1>{chatsInfo?.match.title}</B1>
        {/* TODO: 매치 status에 따라 조건부 렌더링 API 요청해서 매치 상태 status 받아올 것 */}
        {matchStatus === 'WAITING' && matchStatus ? (
          <Dropdown
            items={dropdownItems}
            onSelect={handleSelect}
            placeholder='모집 중'
            round
          />
        ) : (
          <Dropdown
            items={dropdownMatchDoneItems}
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
            {proposalStatus === 'WAITING' && !isAuthor ? (
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
            {proposalStatus === 'WAITING' && isAuthor ? (
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
          </InnerWrapper>
        ) : (
          <div />
        )}
        {proposalStatus === 'APPROVED' && !isAuthor ? (
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
        {proposalStatus === 'APPROVED' && isAuthor ? (
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
