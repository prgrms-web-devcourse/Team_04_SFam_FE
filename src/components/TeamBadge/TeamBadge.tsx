import Link from 'next/link';
import { useRouter } from 'next/router';

import { Badge } from '@components/Badge';
import { SportsIcon } from '@components/SportsIcon';
import { Team } from '@interface/team';
import { Anchor } from '@styles/common';

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
    <Anchor>
      <Badge
        color={Color[Math.floor(Math.random() * 6 + 1)]}
        width='fit-content'
        height='32px'
        padding
      >
        <S.BadgeInner>
          <SportsIcon
            sportsCategory={team.sportsCategory}
            size={18}
          />
          <S.BadgeText>{team.name}</S.BadgeText>
        </S.BadgeInner>
      </Badge>
    </Anchor>
  </Link>
);

export default TeamBadge;
