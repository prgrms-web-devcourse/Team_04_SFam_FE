import { GrayB3 } from '@styles/common';
import * as S from './ChatSender.styles';

const ChatSender = () => {
  console.log();
  // TODO: 상태(시간, Message Input에 있는 내용) 데이터 Props로 받아서 뿌려줄 것
  return (
    <S.Container>
      <S.ChatWrapper>
        <S.TimeWrapper>
          <GrayB3>오전 10:10</GrayB3>
        </S.TimeWrapper>
        <S.SenderWrapper>
          <S.ChatText>정기홍 님이 대화를 수락했어요!! 대화를 시작해보세요!</S.ChatText>
        </S.SenderWrapper>
      </S.ChatWrapper>
    </S.Container>
  );
};

export default ChatSender;
