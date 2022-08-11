import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface User {
  email: string | null;
  id: number;
  latitude: number;
  longitude: number;
  nickname: string;
  profileImageUrl: string | null;
  role: string;
  searchDistance: number;
  username: string;
}

export const userState = atom<Partial<User>>({
  key: 'userState',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
