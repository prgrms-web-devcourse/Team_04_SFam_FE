/* eslint-disable react/button-has-type */
import { Badge } from '@components/Badge';
import theme from '@styles/theme';
import * as S from './MatchListItem.style';

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
  <S.Container id={id.toString()}>
    <S.Description>
      <S.Info>
        <S.Title>{title}</S.Title>
        <Badge>{category}</Badge>

        <Badge color={matchType === '개인전' ? `${theme.color.primary}` : `${theme.color.yellow}`}>{matchType}</Badge>
      </S.Info>
      <span>{createdAt}</span>
    </S.Description>
    <S.Content>{content}</S.Content>
  </S.Container>
);

export default MatchListItem;
