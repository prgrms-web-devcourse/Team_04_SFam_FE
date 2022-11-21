import { Avatar, OldAvatar } from '@components/common/Avatar';
import { OldBadge } from '@components/common/Badge';

import { MATCH_STATUS_TEXT } from '@constants/text';
import { InnerWrapper, B1, TitleWrapper, ContentWrapper, BadgeWrapper, B4 } from '@styles/common';
import { Match } from 'types';

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
        src={imgSrc}
        size='72px'
      />
    ) : (
      <Avatar size='72px' />
    )}
    <InnerWrapper
      width='calc(100% - 88px)'
      flexDirection='column'
      justifyContent='center'
      flexGrow={1}
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
          {match && <OldBadge matchStatus={match.status}>{MATCH_STATUS_TEXT[match.status]}</OldBadge>}
        </BadgeWrapper>
      </InnerWrapper>
    </InnerWrapper>
  </S.Container>
);
export default ChatListItem;
