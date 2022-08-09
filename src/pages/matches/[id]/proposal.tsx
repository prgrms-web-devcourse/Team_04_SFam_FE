import { NextPage } from 'next';
import { useState } from 'react';

import { Button } from '@components/Button';
import { Dropdown } from '@components/Dropdown';
import { Container, ColWrapper, TextArea } from '@styles/common';
import { Team } from 'interface/team';

const MyTeamDummy: Team[] = [
  { id: 1, sportsCategory: 'tableTennis', name: '탁구왕 연승팀' },
  { id: 2, sportsCategory: 'soccer', name: '축구짱' },
  { id: 3, sportsCategory: 'baseball', name: '야구짱' },
];

const TeamChoiceDummy = MyTeamDummy.map((MyTeam) => {
  const TeamChoice = { id: 0, text: '', value: '' };
  TeamChoice.id = MyTeam.id;
  TeamChoice.text = MyTeam.name;
  TeamChoice.value = MyTeam.id.toString();
  return TeamChoice;
});

const Proposal: NextPage = () => {
  const [proposalData, setProposalData] = useState({ teamId: 0, content: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProposalData(() => ({ ...proposalData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(proposalData);
    // TODO: API 연동
    // (async () => {
    //   const res = await axiosAuthInstance({
    //     method: 'POST',
    //     url: '/api/',
    //     data: proposalData,
    //   });

    //   console.log(res);
    // })();
  };
  const handleSelect = (value: string) => {
    setProposalData({ ...proposalData, teamId: Number(value) });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ColWrapper gap='16px'>
          <Dropdown
            items={TeamChoiceDummy}
            onSelect={() => handleSelect}
            placeholder='팀 선택'
          />
          <TextArea
            name='content'
            placeholder='요청 내용을 입력해주세요'
            onChange={handleChange}
          />
          <Button width='100%'>제출</Button>
        </ColWrapper>
      </form>
    </Container>
  );
};

export default Proposal;
