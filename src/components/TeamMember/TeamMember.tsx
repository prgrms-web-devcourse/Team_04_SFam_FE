import Link from 'next/link';

import { Avatar } from '@components/Avatar';
import { MemberInfo } from '@interface/team';
import { B2, InnerWrapper } from '@styles/common';

import * as S from './TeamMember.styles';

interface Props {
  info: MemberInfo;
}

const TeamMember = ({ info }: Props) => (
  <Link
    href={`/user/${info.userId}`}
    passHref
  >
    <S.Anchor>
      {/* TODO: 왕관 표시 */}
      <Avatar imgSize='70px' />
      <InnerWrapper
        margin='0 16px'
        alignItems='center'
      >
        <B2>{info.nickname}</B2>
      </InnerWrapper>
    </S.Anchor>
  </Link>
);

export default TeamMember;
