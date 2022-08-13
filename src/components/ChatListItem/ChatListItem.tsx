import { Avatar } from '@components/Avatar';
import { Badge } from '@components/Badge';
import { MATCH_STATUS_TEXT } from '@constants/text';
import { Match } from '@interface/match';
import { InnerWrapper, B1, B3, TitleWrapper, ContentWrapper, BadgeWrapper } from '@styles/common';

import * as S from './ChatListItem.styles';

interface Props {
  nickname: string;
  lastChat: string;
  imgSrc?: string;
  match?: Match;
}

const ChatListItem = ({ imgSrc, nickname, lastChat, match }: Props) => (
  <S.ChatListItemContainer>
    <div>
      {imgSrc !== null ? (
        <Avatar
          imgSrc={imgSrc}
          imgSize='70px'
          borderRadius='50%'
        />
      ) : (
        <Avatar imgSize='70px' />
      )}
    </div>
    <InnerWrapper
      flexDirection='column'
      padding='0 16px'
      justifyContent='center'
      gap='8px'
    >
      <InnerWrapper
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <TitleWrapper>
          <B1>{match?.title}</B1>
        </TitleWrapper>
        <BadgeWrapper>
          {match && <Badge matchStatus={match.status}>{MATCH_STATUS_TEXT[match.status]}</Badge>}
        </BadgeWrapper>
      </InnerWrapper>
      <B3>{nickname}</B3>
      <ContentWrapper>
        <S.GrayB3>{lastChat}</S.GrayB3>
      </ContentWrapper>
    </InnerWrapper>
  </S.ChatListItemContainer>
);
export default ChatListItem;
