import { NextPage } from 'next';
import React from 'react';
import { MdSearch } from 'react-icons/md';
import { MemberInfo } from '@interface/team';
import { Input } from '@components/Input/';
import { TeamMember } from '@components/TeamMember';
import { Response } from '@interface/response';
import { ColWrapper, Container, IconSpan, InlineWrapper, UserList } from '@styles/common';
import { axiosAuthInstance } from '@api/axiosInstances';

const TeamInvitationPage: NextPage = () => {
  const [username, setUsername] = React.useState('');
  const [result, setResult] = React.useState<MemberInfo[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
  };
  const handleClick = () => {
    (async () => {
      const {
        data: { data },
      } = await axiosAuthInstance.get<Response<MemberInfo[]>>(`/api/users`, { params: { nickname: username } });
      setResult(() => data);
    })();
  };
  return (
    <Container>
      <ColWrapper gap='16px'>
        <InlineWrapper>
          <Input
            placeholder='팀원 검색'
            onChange={handleChange}
            value={username}
          />
          <IconSpan>
            <MdSearch
              size={25}
              onClick={handleClick}
            />
          </IconSpan>
        </InlineWrapper>
        <UserList>
          {result.map((item: MemberInfo) => (
            <TeamMember
              key={item.id}
              info={item}
            />
          ))}
        </UserList>
      </ColWrapper>
    </Container>
  );
};
export default TeamInvitationPage;
