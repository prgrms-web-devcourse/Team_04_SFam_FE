import { Avatar } from '@components/Avatar';
import { InnerWrapper, B1 } from '@styles/common';

import * as S from './ChatListItem.styles';

interface Props {
  nickname: string;
  lastChat: string;
  imgSrc?: string;
}

const ChatListItem = ({ nickname, lastChat, imgSrc }: Props) => (
  <S.ChatListItemContainer>
    <div>
      {imgSrc !== null ? (
        <Avatar
          imgSrc={imgSrc}
          imgSize='60px'
          borderRadius='50%'
        />
      ) : (
        <Avatar imgSize='60px' />
      )}
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
