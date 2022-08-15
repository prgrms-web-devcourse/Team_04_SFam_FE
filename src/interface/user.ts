import { Team } from './team';

export interface UserInfo {
  id?: number;
  nickname: string;
  profileImageUrl: string | null;
  review: {
    bestCount: number;
    likeCount: number;
    dislikeCount: number;
  };
  localName: string;
  teams: Team[];
}

export interface User {
  id: number;
  username: string;
  nickname: string;
  profileImageUrl: string | null;
}
