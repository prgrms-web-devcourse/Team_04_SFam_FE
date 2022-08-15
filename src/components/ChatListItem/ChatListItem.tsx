import { Avatar } from '@components/Avatar';
import { Badge } from '@components/Badge';
import { MATCH_STATUS_TEXT } from '@constants/text';
import { Match } from '@interface/match';
import { InnerWrapper, B1, TitleWrapper, ContentWrapper, BadgeWrapper, B4 } from '@styles/common';

import * as S from './ChatListItem.styles';

interface Props {
  nickname: string;
  lastChat: string;
  imgSrc?: string;
  match?: Match;
}

const ChatListItem = ({ imgSrc, nickname, lastChat, match }: Props) => (
  <S.Container>
    {imgSrc !== null ? (
      <Avatar
        imgSrc={imgSrc}
        imgSize='72px'
        borderRadius='50%'
      />
    ) : (
      <Avatar imgSize='72px' />
    )}
    <InnerWrapper
      flexDirection='column'
      justifyContent='center'
      flexGrow={1}
      width='calc(100% - 88px)'
    >
      <TitleWrapper>
        <B1>{match?.title}</B1>
      </TitleWrapper>
      <ContentWrapper>
        <S.GrayB3>{lastChat}</S.GrayB3>
      </ContentWrapper>
      <InnerWrapper
        alignItems='center'
        justifyContent='space-between'
      >
        <B4>{nickname}</B4>
        <BadgeWrapper>
          {match && <Badge matchStatus={match.status}>{MATCH_STATUS_TEXT[match.status]}</Badge>}
        </BadgeWrapper>
      </InnerWrapper>
    </InnerWrapper>
  </S.Container>
);
export default ChatListItem;
