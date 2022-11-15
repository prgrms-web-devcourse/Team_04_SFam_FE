import React from 'react';

import { OldAvatar } from '@components/common/Avatar';

import { B2, InnerWrapper, RowWrapper } from '@styles/common';
import { User } from 'types';

import * as S from './UserListItem.styles';

interface Props {
  user: User;
  onClick: (user: User) => void;
}

const UserListItem = ({ user, onClick }: Props) => {
  const handleClick = () => {
    onClick(user);
  };

  return (
    <S.Container onClick={handleClick}>
      <RowWrapper
        gap='16px'
        alignItems='center'
      >
        {user.profileImageUrl ? (
          <OldAvatar
            imgSize='60px'
            imgSrc={user.profileImageUrl}
          />
        ) : (
          <OldAvatar imgSize='60px' />
        )}
        <InnerWrapper>
          <B2>{user.nickname}</B2>
        </InnerWrapper>
      </RowWrapper>
    </S.Container>
  );
};

export default UserListItem;
