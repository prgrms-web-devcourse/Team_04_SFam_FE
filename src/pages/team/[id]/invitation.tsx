import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { MdSearch } from 'react-icons/md';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Input } from '@components/Input/';
import { UserListItem } from '@components/UserListItem';
import { Response } from '@interface/response';
import { User } from '@interface/user';
import { ColWrapper, Container, InlineWrapper, SearchButton, UserList } from '@styles/common';

const TeamInvitationPage: NextPage = () => {
  const router = useRouter();

  const [username, setUsername] = React.useState('');
  const [users, setUsers] = React.useState<User[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleClick = (user: User) => {
    if (window.confirm(`${user.nickname}을 초대하시겠습니까?`)) {
      const InvitationApi = async () => {
        await axiosAuthInstance.post(`/api/teams/${router.query.id as string}/invitations`, {
          targetUserId: user.id,
        });
      };
      InvitationApi();
    }
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
              onClick={handleClick}
            />
          ))}
        </UserList>
      </ColWrapper>
    </Container>
  );
};
export default TeamInvitationPage;
