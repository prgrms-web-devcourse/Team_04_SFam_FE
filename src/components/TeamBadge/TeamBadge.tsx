import { Badge } from '@components/Badge';
import { SportsIcon } from '@components/SportsIcon';
import * as S from './TeamBadge.styles';
import { ColorProps } from './types';

interface Props {
  sportsCategory: string;
  name: string;
}

const Color: ColorProps = {
  1: '#14A452',
  2: '#62D2A2',
  3: '#1FAB89',
  4: '#14A452',
  5: '#59B9A1',
  6: '#16785F',
};

const TeamBadge = ({ sportsCategory, name }: Props) => (
  <S.TeamBadgeWrapper>
    <Badge
      color={Color[Math.floor(Math.random() * 6 + 1)]}
      width='100%'
      height='38px'
      borderRadius='5px'
    >
      <S.BadgeInner>
        <S.IconWrapper>
          <SportsIcon sportsCategory={sportsCategory} />{' '}
        </S.IconWrapper>
        <S.BadgeText>{name}</S.BadgeText>
      </S.BadgeInner>
    </Badge>
  </S.TeamBadgeWrapper>
);

export default TeamBadge;
