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
