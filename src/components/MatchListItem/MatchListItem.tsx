import Link from 'next/link';

import { Badge } from '@components/Badge';
import { MATCH_TYPE_TEXT, SPORTS_TEXT } from '@constants/text';
import { GrayB4, InnerWrapper } from '@styles/common';

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
        <InnerWrapper
          justifyContent='space-between'
          alignItems='flex-end'
        >
          <InnerWrapper>
            <Badge>{SPORTS_TEXT[category]}</Badge>
            <Badge matchType={matchType}>{MATCH_TYPE_TEXT[matchType]}</Badge>
          </InnerWrapper>
          <GrayB4>{createdAt.slice(2, 10).split('-').join('.')}</GrayB4>
        </InnerWrapper>
      </S.Description>
    </S.Container>
  </Link>
);

export default MatchListItem;
