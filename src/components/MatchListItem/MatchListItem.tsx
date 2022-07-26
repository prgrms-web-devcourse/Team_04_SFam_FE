import Link from 'next/link';

import { OldBadge } from '@components/common/Badge';

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
  distance: number;
}

const MatchListItem = ({ id, title, category, matchType, content, createdAt, distance }: Props) => (
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
            <OldBadge>{SPORTS_TEXT[category]}</OldBadge>
            <OldBadge matchType={matchType}>{MATCH_TYPE_TEXT[matchType]}</OldBadge>
          </InnerWrapper>
        </InnerWrapper>
        <InnerWrapper justifyContent='space-between'>
          <GrayB4>작성일 {createdAt.slice(2, 10).split('-').join('.')}</GrayB4>
          <GrayB4 style={{ flexShrink: 0 }}>약 {Math.floor(distance)}km</GrayB4>
        </InnerWrapper>
      </S.Description>
    </S.Container>
  </Link>
);

export default MatchListItem;
