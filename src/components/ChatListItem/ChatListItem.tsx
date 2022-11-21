import { Avatar } from '@components/common/Avatar';
import { OldBadge } from '@components/common/Badge';
import Text from '@components/common/Text/Text';

import { MATCH_STATUS_TEXT } from '@constants/text';
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
    <S.ChatInfoContainer>
      <S.MatchTitleWrapper>
        <Text tag='b1'>{match?.title}</Text>
      </S.MatchTitleWrapper>
      <S.LastChatWrapper>
        <Text tag='grayB3'>{lastChat}</Text>
      </S.LastChatWrapper>
      <S.MatchInfoContainer>
        <Text tag='b4'>{nickname}</Text>
        <S.MatchBadgeWrapper>
          {match && <OldBadge matchStatus={match.status}>{MATCH_STATUS_TEXT[match.status]}</OldBadge>}
        </S.MatchBadgeWrapper>
      </S.MatchInfoContainer>
    </S.ChatInfoContainer>
  </S.Container>
);
export default ChatListItem;
