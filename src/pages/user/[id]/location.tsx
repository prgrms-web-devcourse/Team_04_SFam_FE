import { Button } from '@components/Button';
import { Slider } from '@components/Slider';
import { B2, B3, BoldB2, ColWrapper, Container, GrayB2, InnerWrapper } from '@styles/common';
import { NextPage } from 'next/types';
import { useState } from 'react';

const LocationSetting: NextPage = () => {
  const [distance, setDistance] = useState(5);
  const handleClick = () => {
    // TODO: API 연동 처리
  };
  return (
    <Container>
      <ColWrapper padding='40px 0'>
        <B3>현재 위치를 기준으로 내 동네가 설정됩니다.</B3>
        <InnerWrapper>
          <GrayB2>현 위치</GrayB2>
          <BoldB2>경기도 광주시 태봉로 86</BoldB2>
        </InnerWrapper>
        <ColWrapper padding='20px 0'>
          <B2>현 위치를 기준으로</B2>
          <B2>매칭 가능한 거리를 설정해주세요</B2>
        </ColWrapper>
        <Slider />
        <InnerWrapper>
          <Button onClick={handleClick}>설정 완료</Button>
        </InnerWrapper>
      </ColWrapper>
    </Container>
  );
};

export default LocationSetting;
