import { atom } from 'recoil';

export interface TeamFormState {
  sportsCategory: string;
  name: string;
  description: string;
}

export const teamFormState = atom({
  key: 'teamForm',
  default: {
    sportsCategory: '',
    name: '',
    description: '',
  },
});
