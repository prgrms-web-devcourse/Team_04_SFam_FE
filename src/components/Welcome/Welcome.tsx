import Image from 'next/image';
import Link from 'next/link';

import logo from '@assets/logo/logo.svg';
import { Button } from '@components/Button';
import { Anchor, InnerWrapper } from '@styles/common';

import * as S from './Welcome.styles';

const Welcome = () => (
  <S.Container>
    <InnerWrapper
      flexDirection='column'
      alignItems='center'
    >
      <Image
        width='300px'
        height='300px'
        alt=''
        src={logo}
      />
      <S.Title>운동 메이트가 필요할땐?</S.Title>
      <S.Paragraph>
        스포츠를 좋아하는 동네 사람들과 <br /> 팀을 이루고 경기를 매칭해보세요!
      </S.Paragraph>
    </InnerWrapper>
    <S.ButtonWrapper>
      <Link
        href='/signin'
        passHref
      >
        <Anchor>
          <Button height='48px'>시작하기</Button>
        </Anchor>
      </Link>
    </S.ButtonWrapper>
  </S.Container>
);

export default Welcome;
