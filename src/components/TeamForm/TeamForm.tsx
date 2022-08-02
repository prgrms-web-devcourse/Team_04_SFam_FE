import React from 'react';
import { useRecoilState } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Input } from '@components/Input';
import { TeamFormDropdown } from '@components/TeamFormDropdown';
import { teamFormState } from '@recoil/teamForm';

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
    <form onSubmit={handleSubmit}>
      <TeamFormDropdown />
      <Input
        type='text'
        name='name'
        placeholder='팀 이름'
        onChange={handleChange}
      />
      <textarea
        name='description'
        placeholder='팀 소개'
        onChange={handleChange}
      />
      <button type='submit'>팀 생성</button>
    </form>
  );
};

export default TeamForm;
