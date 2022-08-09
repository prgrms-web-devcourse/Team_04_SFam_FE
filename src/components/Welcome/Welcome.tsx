import Image from 'next/image';
import Link from 'next/link';

import logo from '@assets/logo/logo.svg';
import { Button } from '@components/Button';
import { Anchor, InnerWrapper } from '@styles/common';

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
    <S.TextWrapper>
      <S.Title>Sports Family</S.Title>
      <S.Text>스포츠를 좋아하는 동네 사람들과</S.Text>
      <S.Text> 팀을 이루고 경기를 매칭해보세요!</S.Text>
    </S.TextWrapper>
    <S.ButtonContainer>
      <Link
        href='/matches'
        passHref
      >
        <Anchor>
          <InnerWrapper>
            <Button width='300px'>시작하기</Button>
          </InnerWrapper>
        </Anchor>
      </Link>

      <S.Info>
        이미 계정이 있으신가요?
        <Link
          href='/signin'
          passHref
        >
          <Anchor>
            <S.Login> 로그인하기</S.Login>
          </Anchor>
        </Link>
      </S.Info>
    </S.ButtonContainer>
  </S.Container>
);

export default Welcome;
