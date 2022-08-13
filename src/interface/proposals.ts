import { Match } from './match';

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
