import { Avatar } from '@components/Avatar';
import { InnerWrapper, B1, B3 } from '@styles/common';

import * as S from './ChatListItem.styles';

interface Props {
  nickname: string;
  lastChat: string;
}

const ChatListItem = ({ nickname, lastChat }: Props) => (
  <S.ChatListItemContainer>
    <div>
      <Avatar />
    </div>
    <InnerWrapper
      flexDirection='column'
      padding='0 16px'
      justifyContent='center'
    >
      <B1>{nickname}</B1>
      <B3>{lastChat}</B3>
    </InnerWrapper>
  </S.ChatListItemContainer>
);
export default ChatListItem;
