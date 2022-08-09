import Image from 'next/image';
import Link from 'next/link';

import logo from '@assets/logo/logo.svg';
import { Button } from '@components/Button';
import { Anchor, ColWrapper } from '@styles/common';

import * as S from './Welcome.styles';

const Welcome = () => (
  <S.Container>
    <S.ImageWrapper>
      <Image
        width='300px'
        height='300px'
        alt=''
        src={logo}
      />
    </S.ImageWrapper>
    <ColWrapper alignItems='center'>
      <S.Title>Sports Family</S.Title>
      <S.Paragraph>스포츠를 좋아하는 동네 사람들과 팀을 이루고 경기를 매칭해보세요!</S.Paragraph>
    </ColWrapper>
    <Link
      href='/signin'
      passHref
    >
      <Anchor>
        <Button>시작하기</Button>
      </Anchor>
    </Link>
  </S.Container>
);

export default Welcome;
