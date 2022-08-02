import { Team } from './team';

export interface UserInfo {
  nickname: string;
  review: {
    bestCount: number;
    likeCount: number;
    dislikeCount: number;
  };
  location: {
    longitude: string;
    latitude: string;
  };
  teams: Team[];
}
