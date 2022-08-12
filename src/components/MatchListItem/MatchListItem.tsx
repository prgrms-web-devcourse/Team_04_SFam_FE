import Link from 'next/link';

import { Badge } from '@components/Badge';
import { MATCH_TYPE_TEXT, SPORTS_TEXT } from '@constants/text';
import { B3, InnerWrapper } from '@styles/common';

import * as S from './MatchListItem.styles';

interface Props {
  id: number;
  title: string;
  category: string;
  matchType: string; // 개인전 or 팀전
  content: string;
  createdAt: string; // 글 작성 일자
}

const MatchListItem = ({ id, title, category, matchType, content, createdAt }: Props) => (
  <Link
    href={{
      pathname: `/matches/${id}`,
      query: {
        title,
      },
    }}
    as={`matches/${id}`}
  >
    <S.Container id={id.toString()}>
      <S.Description>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
        </S.TitleWrapper>
        <InnerWrapper>
          <S.Content>{content}</S.Content>
        </InnerWrapper>
        <S.RowWrapper>
          <InnerWrapper>
            <Badge>{SPORTS_TEXT[category]}</Badge>
            <Badge matchType={matchType}>{MATCH_TYPE_TEXT[matchType]}</Badge>
          </InnerWrapper>
          <B3>{createdAt.slice(0, 10)}</B3>
        </S.RowWrapper>
      </S.Description>
    </S.Container>
  </Link>
);

export default MatchListItem;
