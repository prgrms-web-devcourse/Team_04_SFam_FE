import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { Divider } from '@components/Divider';
import { ReviewButtonGroup } from '@components/ReviewButtonGroup';
import { ChatsProps } from '@interface/chat';
import { Match } from '@interface/match';
import { Response } from '@interface/response';
import { userState } from '@recoil/atoms';
import { Anchor, B3, ColWrapper, Container, GrayB4, H2 } from '@styles/common';

// TODO: 공고글에 대한 Data를 전역으로 관리를 해야하는가에 대한 논의 필요, 아니라면 이 데이터를 어떻게 가져올 것인지 논의 필요

const Review: NextPage = () => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  const { id, proposalId } = router.query;
  const [review, setReview] = useState('');
  const [match, setMatch] = useState({
    title: '',
    name: '',
  });

  useEffect(() => {
    if (!router.isReady) return;
    const getMatch = async () => {
      const res = await axiosAuthInstance.get<Response<Match>>(`/api/matches/${id as string}`);
      if (res.status === 200) {
        const { data } = res.data;
        if (data.author.id === user.id) {
          const getChats = async () => {
            const chat = await axiosAuthInstance.get<Response<ChatsProps>>(
              `/api/matches/proposals/${proposalId as string}/chats`,
            );
            const { data: chatData } = chat.data;
            if (chat.status === 200) {
              setMatch({
                ...match,
                name: chatData.match.targetProfile.nickname,
                title: chatData.match.title,
              });
            }
          };
          getChats();
        } else {
          setMatch({
            ...match,
            name: data.author.nickname,
            title: data.title,
          });
        }
      }
    };

    getMatch();
  }, [router.isReady]);

  const handleClick = () => {
    // TODO: API 연동(review 상태 저장까지 확인 그대로 request body에 넘겨주면 됨)
  };
  return (
    <Container>
      <ColWrapper gap='16px'>
        <B3>{match.title}</B3>
        <GrayB4>{match.name}</GrayB4>
      </ColWrapper>
      <Divider />
      <ColWrapper gap='16px'>
        {/* TODO: 로그인 후 전역 관리된 유저 정보 상태 처리 */}
        <H2>{user.nickname} 님,</H2>
        <H2>{match.name} 과의 경기는 어떠셨나요?</H2>
        <ReviewButtonGroup setReview={setReview} />
        <Link
          href='/matches'
          passHref
        >
          <Anchor>
            <Button onClick={handleClick}>제출</Button>
          </Anchor>
        </Link>
      </ColWrapper>
    </Container>
  );
};

export default Review;
