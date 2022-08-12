import { ReviewInfo } from './review';

export interface Team {
  id: number;
  sportsCategory: string;
  name: string;
  logoImageUrl: string | null;
}

export interface MemberInfo {
  userId: number;
  nickname: string;
  profileImageUrl: string;
  role: string;
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
  id: number;
  name: string;
  description: string;
  sportsCategory: string;
  members: MemberInfo[];
  matchRecord: MatchRecord;
  matchReview: ReviewInfo;
  leader: LeaderInfo;
  logoImageUrl: string | null;
}
