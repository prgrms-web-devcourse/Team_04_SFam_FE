import { Badge } from '@components/Badge';
import { MdSportsSoccer, MdSportsBaseball, MdSportsBasketball, MdSportsTennis } from 'react-icons/md';
import { FaTableTennis, FaBowlingBall } from 'react-icons/fa';
import { GiShuttlecock } from 'react-icons/gi';
import * as S from './TeamBadge.styles';
import { ColorProps, IconsProps } from './types';

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

const Icons: IconsProps = {
  SOCCER: <MdSportsSoccer size='21px' />,
  BASEBALL: <MdSportsBaseball size='21px' />,
  BASKETBALL: <MdSportsBasketball size='21px' />,
  TABLETENNIS: <FaTableTennis size='21px' />,
  BOWLING: <FaBowlingBall size='21px' />,
  BADMINTON: <GiShuttlecock size='21px' />,
  TENNIS: <MdSportsTennis size='21px' />,
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
        <S.IconWrapper>{Icons[sportsCategory]}</S.IconWrapper>
        <S.BadgeText>{name}</S.BadgeText>
      </S.BadgeInner>
    </Badge>
  </S.TeamBadgeWrapper>
);

export default TeamBadge;
