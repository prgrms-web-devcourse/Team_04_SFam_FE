import { NextPage } from 'next';
import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Input } from '@components/Input/';
import { TeamMember } from '@components/TeamMember';
import { ColWrapper, Container, IconSpan, InlineWrapper } from '@styles/common';

const TeamInvitationPage: NextPage = () => {
  const [username, setUsername] = React.useState('연승연');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
  };
  const handleClick = () => {
    // TODO: API 요청
    // TODO: API로 반환 된 유저 상태 저장 후 반환
  };
  console.log(username);

  return (
    <Container>
      <ColWrapper>
        <InlineWrapper>
          <Input
            placeholder='팀원 검색'
            onChange={handleChange}
          />
          <IconSpan>
            <MdSearch
              size={25}
              onClick={handleClick}
            />
          </IconSpan>
        </InlineWrapper>
        {/* TODO: 검색 후 조건부 렌더링 */}
        {/* <TeamMember info={} /> */}
      </ColWrapper>
    </Container>
  );
};
export default TeamInvitationPage;
