import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { Button } from '@components/common/Button';
import { Divider } from '@components/common/Divider';

import { axiosAuthInstance } from '@api/axiosInstances';
import { ReviewButtonGroup } from '@components/ReviewButtonGroup';
import { userState } from '@recoil/atoms';
import { Anchor, B1, B2, BoldB1, BoldB2, ColWrapper, Container, H2 } from '@styles/common';
import { Response, Match, ChatsProps } from 'types';

const Review: NextPage = () => {
  const router = useRouter();
  const { id, proposalId } = router.query;

  const user = useRecoilValue(userState);

  const [review, setReview] = React.useState('');
  const [match, setMatch] = React.useState({
    title: '',
    name: '',
  });

  React.useEffect(() => {
    if (!router.isReady && review === '') return;
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
    if (review === '') return;
    try {
      const fetch = async () => {
        await axiosAuthInstance({
          method: 'post',
          url: `/api/matches/${id as string}/review`,
          data: {
            review,
          },
        });
      };
      fetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <ColWrapper gap='16px'>
        <H2>{match.title}</H2>
      </ColWrapper>
      <Divider />
      <ColWrapper gap='16px'>
        <B1>
          <BoldB1>{user.nickname}</BoldB1>님
        </B1>
        <B2>
          <BoldB2>{match.name}</BoldB2> 님과의 경기는 어떠셨나요?
        </B2>
        <ReviewButtonGroup
          review={review}
          setReview={setReview}
        />
        <Link
          href='/matches'
          passHref
        >
          <Anchor>
            {review === '' ? (
              <Button onClick={handleClick}>다음에 남기기</Button>
            ) : (
              <Button onClick={handleClick}>제출하기</Button>
            )}
          </Anchor>
        </Link>
      </ColWrapper>
    </Container>
  );
};

export default Review;
