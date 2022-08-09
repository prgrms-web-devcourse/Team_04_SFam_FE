import { ReviewInfo } from './review';

export interface Team {
  id: number;
  sportsCategory: string;
  name: string;
}

export interface MemberInfo {
  id: number;
  username: string;
  nickname: string;
  profileImageUrl: string;
}

export interface MatchRecord {
  win: number;
  draw: number;
  lose: number;
}

export interface LeaderInfo {
  id?: number;
  location?: {
    longitude: string;
    latitude: string;
  };
  nickname?: string;
  username?: string;
}
export interface TeamInfo {
  name: string;
  description: string;
  leader: LeaderInfo;
  sportsCategory: string;
  members: MemberInfo[];
  matchRecord: MatchRecord;
  matchReview: ReviewInfo;
}
