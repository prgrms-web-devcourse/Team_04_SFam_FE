import SFAM from '@assets/logo/logo.svg';
import Image from 'next/image';
import { ColWrapper, B1 } from '@styles/common';
import { Container } from '@nivo/core';

const Welcome = () => (
  <Container>
    <ColWrapper justifyContent='center'>
      <Image
        src={SFAM}
        alt=''
        width='200px'
        height='400px'
      />
      <B1 font-size='20px'>스포츠를 좋아하는 동네 사람들과</B1>
      <B1> 팀을 이루고 경기를 매칭해보세요!</B1>
    </ColWrapper>
  </Container>
);
export default Welcome;
