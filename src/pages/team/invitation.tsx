import { NextPage } from 'next';
import React from 'react';
import { MdSearch } from 'react-icons/md';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Input } from '@components/Input/';
import { UserListItem } from '@components/UserListItem';
import { Response } from '@interface/response';
import { User } from '@interface/user';
import { ColWrapper, Container, InlineWrapper, SearchButton, UserList } from '@styles/common';

const TeamInvitationPage: NextPage = () => {
  const [username, setUsername] = React.useState('');
  const [users, setUsers] = React.useState<User[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    (async () => {
      const {
        data: { data },
      } = await axiosAuthInstance.get<Response<User[]>>(`/api/users`, { params: { nickname: username } });

      setUsers(() => data);
    })();
  };

  return (
    <Container>
      <ColWrapper>
        <InlineWrapper>
          <form onSubmit={handleSubmit}>
            <Input
              type='text'
              placeholder='팀원 검색'
              onChange={handleChange}
              value={username}
            />
            <SearchButton>
              <MdSearch size={25} />
            </SearchButton>
          </form>
        </InlineWrapper>
        <UserList>
          {users.map((user: User) => (
            <UserListItem
              key={user.id}
              user={user}
            />
          ))}
        </UserList>
      </ColWrapper>
    </Container>
  );
};
export default TeamInvitationPage;
