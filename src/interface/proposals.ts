export interface ProposalProps {
  id: number;
  content: string;
  target: Target;
  lastChat: LastChat;
}

export interface Target {
  nickname: string;
}

export interface LastChat {
  content: string;
}
