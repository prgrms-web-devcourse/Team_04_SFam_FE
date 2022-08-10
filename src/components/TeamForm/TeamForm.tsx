import React, { useEffect } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { Dropdown, Item } from '@components/Dropdown';
import { Input } from '@components/Input';
import { SPORTS_CATEGORY } from '@constants/dropdown';
import { BoldOrangeB3, ColWrapper, Container, Label, TextArea } from '@styles/common';

import { validation, Values } from './helper';

const TeamForm = () => {
  const [state, setState] = React.useState({
    sportsCategory: '',
    name: '',
    description: '',
  });
  const [errors, setErrors] = React.useState<Values>({});
  const [isFirst, setIsFirst] = React.useState(true);

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
    setIsFirst(false);
    const { name, description, sportsCategory } = state;
    if (Object.keys(validation({ name, description, sportsCategory })).length > 0) {
      setErrors(validation({ name, description, sportsCategory }));
      return;
    }

    (async () => {
      await axiosAuthInstance({
        method: 'POST',
        url: '/api/teams',
        data: state,
      });
    })();
  };

  useEffect(() => {
    if (!isFirst) {
      setErrors(validation({ name: state.name, description: state.description, sportsCategory: state.sportsCategory }));
    }
  }, [state]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ColWrapper gap='16px'>
          <Input
            type='text'
            name='name'
            value={state.name}
            placeholder='팀 이름'
            onChange={handleChange}
          />
          {errors.name && <BoldOrangeB3>{errors.name}</BoldOrangeB3>}
          <Dropdown
            items={SPORTS_CATEGORY}
            placeholder='종목 선택'
            onSelect={handleSelect}
          />
          {errors.sportsCategory && <BoldOrangeB3>{errors.sportsCategory}</BoldOrangeB3>}
          <Label>팀 소개글</Label>
          <TextArea
            name='description'
            placeholder='팀 소개'
            onChange={handleChange}
            onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
          />
          {errors.description && <BoldOrangeB3>{errors.description}</BoldOrangeB3>}
          <Button width='100%'>팀 생성</Button>
        </ColWrapper>
      </form>
    </Container>
  );
};

export default TeamForm;
