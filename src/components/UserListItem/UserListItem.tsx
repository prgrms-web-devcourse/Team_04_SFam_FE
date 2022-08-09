import Link from 'next/link';

import { Avatar } from '@components/Avatar';
import { User } from '@interface/user';
import { Anchor, B2, InnerWrapper, RowWrapper } from '@styles/common';

interface Props {
  user: User;
}

const UserListItem = ({ user }: Props) => (
  <RowWrapper
    gap='16px'
    alignItems='center'
  >
    <Link href={`/user/${user.id}`}>
      <Anchor>
        <Avatar imgSize='60px' />
      </Anchor>
    </Link>
    <InnerWrapper>
      <B2>{user.nickname}</B2>
    </InnerWrapper>
  </RowWrapper>
);

export default UserListItem;
