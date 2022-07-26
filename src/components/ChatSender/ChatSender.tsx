import { GrayB4 } from '@styles/common';
import { Chat } from 'types';

import * as S from './ChatSender.styles';

interface Props {
  chat: Chat;
}

export const hourToString = (hourString: string) => {
  const hour = Number(hourString);
  if (hour > 12 && hour < 24) {
    return `오후 ${hour - 12}`;
  }
  if (hour > 24) {
    return `오전 ${hour - 24}`;
  }
  return `오전 ${hour}`;
};
// yyyy-MM-hh hh:mm:ss
const ChatSender = ({ chat }: Props) => {
  const curChattedAt = chat.chattedAt.slice(11);
  const curChattedAtToString = `${hourToString(curChattedAt.slice(0, 2))}${curChattedAt.slice(2, 5)}`;

  // TODO: 상태(시간, Message Input에 있는 내용) 데이터 Props로 받아서 뿌려줄 것
  return (
    <S.Container>
      <S.ChatWrapper>
        <S.TimeWrapper>
          <GrayB4>{curChattedAtToString}</GrayB4>
        </S.TimeWrapper>
        <S.SenderWrapper>
          <S.ChatText>{chat.content}</S.ChatText>
        </S.SenderWrapper>
      </S.ChatWrapper>
    </S.Container>
  );
};

export default ChatSender;
