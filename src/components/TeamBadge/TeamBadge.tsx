import { Badge } from '@components/Badge';
import { MdSportsSoccer, MdSportsBaseball, MdSportsBasketball, MdSportsTennis } from 'react-icons/md';
import { FaTableTennis, FaBowlingBall } from 'react-icons/fa';
import { GiShuttlecock } from 'react-icons/gi';
import * as S from './TeamBadge.style';
import { ColorProps, IconsProps } from './types';

interface Props {
  teamId: number;
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

const Icons: IconsProps = {
  soccer: <MdSportsSoccer size='21px' />,
  baseball: <MdSportsBaseball size='21px' />,
  basketball: <MdSportsBasketball size='21px' />,
  tableTennis: <FaTableTennis size='21px' />,
  bowling: <FaBowlingBall size='21px' />,
  badminton: <GiShuttlecock size='21px' />,
  tennis: <MdSportsTennis size='21px' />,
};

const TeamBadge = ({ teamId, sportsCategory, name }: Props) => (
  <S.TeamBadgeWrapper>
    <Badge
      color={Color[teamId]}
      width='100%'
      height='38px'
      borderRadius='5px'
    >
      <S.BadgeInner>
        <S.IconWrapper>{Icons[sportsCategory]}</S.IconWrapper>
        <S.BadgeText>{name}</S.BadgeText>
      </S.BadgeInner>
    </Badge>
  </S.TeamBadgeWrapper>
);

export default TeamBadge;
