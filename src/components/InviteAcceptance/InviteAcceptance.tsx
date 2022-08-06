import { Avatar } from '@components/Avatar';
import { B2, RowWrapper, InnerWrapper, B1, GrayB3, B3 } from '@styles/common';
import { Button } from '@components/Button';
import * as S from './InviteAcceptance.styles';

const InviteAcceptance = () => (
  <S.Container>
    <RowWrapper>
      <Avatar />
      <InnerWrapper
        flexDirection='column'
        justifyContent='center'
        margin='0px 16px'
      >
        <B1>우주 최강 연승팀</B1>
        <GrayB3>테니스</GrayB3>
        <B3>팀원 수: 2명</B3>
      </InnerWrapper>
    </RowWrapper>
    <S.TextContainer>
      <S.Team>우주 최강 연승팀</S.Team>
      <B2>에서 회원님을 초대했습니다. </B2>
      <br />
      <B2>수락하시겠습니까? </B2>
    </S.TextContainer>
    <S.ButtonContainer>
      <S.RejectButton
        height='50px'
        width='180px'
        fontSize='20px'
      >
        거절
      </S.RejectButton>
      <Button width='180px'>수락</Button>
    </S.ButtonContainer>
  </S.Container>
);
export default InviteAcceptance;
