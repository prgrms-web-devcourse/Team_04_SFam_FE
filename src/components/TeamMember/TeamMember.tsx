import Link from 'next/link';

import { OldAvatar } from '@components/common/Avatar';

import { B2, InnerWrapper } from '@styles/common';
import { MemberInfo } from 'types';

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
      {info.profileImageUrl !== null ? (
        <OldAvatar
          imgSrc={info.profileImageUrl}
          imgSize='70px'
        />
      ) : (
        <OldAvatar imgSize='70px' />
      )}
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
