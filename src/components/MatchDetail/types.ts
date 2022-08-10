interface Author {
  id: number;
  nickname: string;
}

interface Team {
  id: number;
  name: string;
  sportsCategory: string;
  logoImageUrl: string;
}

export interface MatchDetail {
  author: Author;
  content: string;
  id: number;
  matchDate: string;
  matchType: string;
  participants: number;
  proposer: Proposer | null;
  sportsCategory: string;
  status: string;
  team: Team | null;
  title: string;
}

export interface Proposer {
  id: number;
  status: string;
  content: string;
}
