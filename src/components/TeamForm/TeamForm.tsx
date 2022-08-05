import React from 'react';
import { useRecoilState } from 'recoil';
import { axiosAuthInstance } from '@api/axiosInstances';
import { Input } from '@components/Input';
import { TeamFormDropdown } from '@components/TeamFormDropdown';
import { teamFormState } from '@recoil/teamForm';
import { ColWrapper, Container, Label, TextArea } from '@styles/common';
import { Button } from '@components/Button';

const TeamForm = () => {
  const [teamFormData, setTeamFormData] = useRecoilState(teamFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTeamFormData(() => ({
      ...teamFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(teamFormData);

    // (async () => {
    //   const res = await axiosAuthInstance({
    //     method: 'POST',
    //     url: '/api/teams',
    //     data: teamForm,
    //   });

    //   console.log(res);
    // })();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ColWrapper>
          <Input
            type='text'
            name='name'
            placeholder='팀 이름'
            onChange={handleChange}
          />
          <TeamFormDropdown />
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
