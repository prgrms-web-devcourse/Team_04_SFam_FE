import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

interface UserState {
  id?: number;
  username?: string;
  nickname?: string;
  latitude?: number;
  longitude?: number;
  searchDistance?: number;
}

export const userState = atom<UserState>({
  key: 'userState',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
