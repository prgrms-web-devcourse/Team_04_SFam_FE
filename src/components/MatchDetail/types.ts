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
  id: number;
  status: string;
  author: Author;
  title: string;
  matchDate: string;
  matchType: string;
  team: Team | null;
  sportsCategory: string;
  participants: number;
  content: string;
}
