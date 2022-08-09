import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@components/Button';
import { Divider } from '@components/Divider';
import { ReviewButtonGroup } from '@components/ReviewButtonGroup';
import { B3, ColWrapper, Container, GrayB4, H2, InnerWrapper, RowWrapper } from '@styles/common';

// TODO: 공고글에 대한 Data를 전역으로 관리를 해야하는가에 대한 논의 필요, 아니라면 이 데이터를 어떻게 가져올 것인지 논의 필요
const DummyData = {
  id: 1,
  title: '배드민턴 붙으실 송파 주민분 구합니다~!',
  status: 'WAITING',
  sportsCategory: 'BADMINTON',
  author: {
    id: 1,
    nickname: '규범장',
  },
  team: {
    id: 1,
    name: '배드민턴왕 연승팀',
    sportsCategory: 'BADMINTON',
  },
  participants: 0,
  matchDate: '2022-08-04',
  matchType: 'TEAM_MATCH',
  content: '저희랑 뜨실분 이번주 토요일 장소 송파공원입니다!',
};

const Review: NextPage = () => {
  const [review, setReview] = useState('');

  const handleClick = () => {
    // TODO: API 연동(review 상태 저장까지 확인 그대로 request body에 넘겨주면 됨)
  };
  return (
    <Container>
      <ColWrapper gap='16px'>
        <B3>{DummyData.title}</B3>
        <GrayB4>{DummyData.team.name}</GrayB4>
      </ColWrapper>
      <Divider />
      <ColWrapper gap='16px'>
        {/* TODO: 로그인 후 전역 관리된 유저 정보 상태 처리 */}
        <H2>로그인한 사용자님,</H2>
        <H2>{DummyData.team.name}과의 경기는 어떠셨나요?</H2>
        <ReviewButtonGroup setReview={setReview} />
        <InnerWrapper>
          <Link
            href='/matches'
            passHref
          >
            <Button onClick={handleClick}>제출</Button>
          </Link>
        </InnerWrapper>
      </ColWrapper>
    </Container>
  );
};

export default Review;
