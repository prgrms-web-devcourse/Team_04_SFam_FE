import React from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { Dropdown, Item } from '@components/Dropdown';
import { Input } from '@components/Input';
import { SPORTS_CATEGORY } from '@constants/sports';
import { ColWrapper, Container, Label, TextArea } from '@styles/common';

const TeamForm = () => {
  const [state, setState] = React.useState({
    sportsCategory: '',
    name: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState(() => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSelect = (item: Item<{ sportsCategory: string }>) => {
    const { sportsCategory } = item.value;
    setState(() => ({ ...state, sportsCategory }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    (async () => {
      await axiosAuthInstance({
        method: 'POST',
        url: '/api/teams',
        data: state,
      });
    })();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ColWrapper>
          <Input
            type='text'
            name='name'
            value={state.name}
            placeholder='팀 이름'
            onChange={handleChange}
          />
          <Dropdown
            items={SPORTS_CATEGORY}
            placeholder='종목 선택'
            onSelect={handleSelect}
          />
          <Label>팀 소개글</Label>
          <TextArea
            name='description'
            placeholder='팀 소개'
            onChange={handleChange}
          />
          <Button width='100%'>팀 생성</Button>
        </ColWrapper>
      </form>
    </Container>
  );
};

export default TeamForm;
