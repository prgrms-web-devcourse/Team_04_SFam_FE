import { Avatar } from '@components/Avatar';
import { hourToString } from '@components/ChatSender/ChatSender';
import { Chat } from '@interface/chat';
import { GrayB4 } from '@styles/common';

import * as S from './ChatReceiver.styles';

interface Props {
  chat: Chat;
  nickname: string;
  imgSrc?: string | null;
}

const ChatReceiver = ({ chat, nickname, imgSrc }: Props) => {
  const curChattedAt = chat.chattedAt.slice(11);
  const curChattedAtToString = `${hourToString(curChattedAt.slice(0, 2))}${curChattedAt.slice(2, 5)}`;
  return (
    <S.Container>
      <S.ChatWrapper>
        <S.ProfileWrapper>
          {imgSrc !== null ? (
            <Avatar
              imgSrc={imgSrc}
              imgSize='45px'
            />
          ) : (
            <Avatar imgSize='45px' />
          )}
        </S.ProfileWrapper>
        <S.MessageContentWrapper>
          <S.ProfileText>{nickname}</S.ProfileText>
          <S.ReceiverWrapper>
            <S.ChatText>{chat.content}</S.ChatText>
          </S.ReceiverWrapper>
        </S.MessageContentWrapper>
        <S.TimeWrapper>
          <GrayB4>{curChattedAtToString}</GrayB4>
        </S.TimeWrapper>
      </S.ChatWrapper>
    </S.Container>
  );
};

export default ChatReceiver;
