import Link from 'next/link';
import { useRouter } from 'next/router';

import { Badge } from '@components/Badge';
import { SportsIcon } from '@components/SportsIcon';
import { Team } from '@interface/team';

import * as S from './TeamBadge.styles';
import { ColorProps } from './types';

interface Props {
  team: Team;
}

const Color: ColorProps = {
  1: '#14A452',
  2: '#62D2A2',
  3: '#1FAB89',
  4: '#14A452',
  5: '#59B9A1',
  6: '#16785F',
};

const TeamBadge = ({ team }: Props) => (
  <Link href={`/team/${team.id}`}>
    <S.TeamBadgeWrapper>
      <Badge
        color={Color[Math.floor(Math.random() * 6 + 1)]}
        width='100%'
        height='38px'
        borderRadius='5px'
      >
        <S.BadgeInner>
          <SportsIcon sportsCategory={team.sportsCategory} />
          <S.BadgeText>{team.name}</S.BadgeText>
        </S.BadgeInner>
      </Badge>
    </S.TeamBadgeWrapper>
  </Link>
);

export default TeamBadge;
