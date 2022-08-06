export interface Match {
  id: number;
  title: string;
  category: string;
  matchType: string;
  content: string;
  distance: number;
  createdAt: string;
}

export interface Response {
  values: Match[];
  hasNext: boolean;
  cursor: {
    createdAt: string;
    id: number | null;
  };
}
