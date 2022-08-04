import logo from '@assets/logo/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@components/Button';
import * as S from './Welcome.styles';

const Welcome = () => (
  <S.Container>
    <S.ImageContainer>
      <Image
        width='300px'
        height='300px'
        alt=''
        src={logo}
      />
      <S.Title>Sports Family</S.Title>
      <S.Text>스포츠를 좋아하는 동네 사람들과</S.Text>
      <S.Text> 팀을 이루고 경기를 매칭해보세요!</S.Text>
    </S.ImageContainer>
    <S.ButtonContainer>
      <Link
        href='/matches'
        passHref
      >
        <Button>시작하기</Button>
      </Link>

      <S.Info>
        이미 계정이 있으신가요?
        <Link
          href='/login'
          passHref
        >
          <S.Login>로그인하기</S.Login>
        </Link>
      </S.Info>
    </S.ButtonContainer>
  </S.Container>
);

export default Welcome;
