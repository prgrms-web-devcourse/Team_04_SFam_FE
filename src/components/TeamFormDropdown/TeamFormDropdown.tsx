import { Dropdown } from '@components/Dropdown';
import { teamFormState } from '@recoil/teamForm';
import { useRecoilState } from 'recoil';
import React from 'react';

const sportsCategory = [
  { id: 1, text: '축구', value: 'SOCCER' },
  { id: 2, text: '야구', value: 'BASEBALL' },
  { id: 3, text: '배드민턴', value: 'BADMINTON' },
];

const TeamFormDropdown = () => {
  const [state, setState] = useRecoilState(teamFormState);

  const handleSelect = (value: string) => {
    setState(() => ({ ...state, sportsCategory: value }));
  };

  return (
    <Dropdown
      dropdownItems={sportsCategory}
      onSelect={handleSelect}
    />
  );
};

export default TeamFormDropdown;
