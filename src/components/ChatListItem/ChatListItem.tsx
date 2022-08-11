import { Avatar } from '@components/Avatar';
import { InnerWrapper, B1, B3, GrayB3 } from '@styles/common';

import * as S from './ChatListItem.styles';

interface Props {
  nickname: string;
  lastChat: string;
}

const ChatListItem = ({ nickname, lastChat }: Props) => (
  <S.ChatListItemContainer>
    <div>
      <Avatar imgSize='60px' />
    </div>
    <InnerWrapper
      flexDirection='column'
      padding='0 16px'
      justifyContent='center'
      gap='16px'
    >
      <B1>{nickname}</B1>
      <S.GrayB3>{lastChat}</S.GrayB3>
    </InnerWrapper>
  </S.ChatListItemContainer>
);
export default ChatListItem;
