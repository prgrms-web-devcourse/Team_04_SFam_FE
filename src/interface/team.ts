import { ReviewInfo } from './review';

export interface Team {
  id: number;
  sportsCategory: string;
  name: string;
}

export interface MemberInfo {
  userId: number;
  nickname: string;
  role: string;
}

export interface MatchRecord {
  win: number;
  draw: number;
  lose: number;
}
export interface TeamInfo {
  name: string;
  description: string;
  sportsCategory: string;
  members: MemberInfo[];
  matchRecord: MatchRecord;
  matchReview: ReviewInfo;
}
