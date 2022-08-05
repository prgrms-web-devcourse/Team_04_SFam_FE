import { Badge } from '@components/Badge';
import theme from '@styles/theme';
import Link from 'next/link';
import * as S from './MatchListItem.styles';

interface Props {
  id: number;
  title: string;
  category: string;
  matchType: string; // 개인전 or 팀전
  content: string;
  distance: number; // distance 현재 위치에서 글 작성 위치 까지 거리
  createdAt: string; // 글 작성 일자
}

const MatchListItem = ({ id, title, category, matchType, content, distance, createdAt }: Props) => (
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
      <S.Title>{title}</S.Title>
      <S.Content>
        <span>{content}</span>
      </S.Content>
      <S.Info>
        <S.BadgeContainer>
          <Badge>{category}</Badge>
          <Badge color={matchType === '개인전' ? `${theme.color.primary}` : `${theme.color.yellow}`}>{matchType}</Badge>
        </S.BadgeContainer>
        <span>{createdAt}</span>
      </S.Info>
    </S.Container>
  </Link>
);

export default MatchListItem;
