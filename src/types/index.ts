export interface Response<T> {
  data: T;
}

export interface ServerError {
  code: string;
  message: string;
}

export interface MatchRecord {
  win: number;
  draw: number;
  lose: number;
}

export interface Author {
  id: number;
  nickname: string;
}

export interface TeamMatch {
  id: number;
  name: string;
  sportsCategory: string;
  logoImageUrl: string;
}

export interface Proposer {
  id: number;
  status: string;
  content: string;
}

export interface Match {
  id: number;
  title: string;
  status: string;
  sportsCategory: string;
  author: Author;
  team: TeamMatch;
  participants: number;
  matchDate: string;
  matchType: string;
  content: string;
  proposer: Proposer;
}

export interface ChatsProps {
  match: MatchChat;
  chats: Chat[];
}

export interface MatchChat {
  id: number;
  title: string;
  status: string;
  targetProfile: TargetProfile;
}

export interface Chat {
  content: string;
  chattedAt: string;
  writer: Writer;
}

export interface TargetProfile {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

export interface Writer {
  id: number;
}

export interface MessageReq {
  targetId: number;
  content: string;
  chattedAt: string;
}

export interface TotalChat {
  id: number;
  content: string;
  match: Match;
  target: TargetProfile;
  lastChat: {
    content: string;
  };
}

export interface ProposalProps {
  id: number;
  content: string;
  target: Target;
  lastChat: LastChat;
  match: Match;
}

export interface Target {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
}

export interface LastChat {
  content: string;
}

export interface ProposalInfo {
  id: number;
  status: string;
  content: string;
  isMatchAuthor: boolean;
}

export interface ReviewInfo {
  bestCount: number;
  likeCount: number;
  dislikeCount: number;
}

export interface WrapperProps {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  gap?: string;
  flexWrap?: string;
  backgroundColor?: string;
  flexGrow?: number;
}

export interface OptionalRenderProps {
  condition: boolean;
}

export interface Team {
  id: number;
  sportsCategory: string;
  name: string;
  logoImageUrl: string | null;
  memberCount: number;
}

export interface MemberInfo {
  userId: number;
  nickname: string;
  profileImageUrl: string;
  role: string;
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
