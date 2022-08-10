export interface ChatsProps {
  match: MatchChat;
  chats: Chat[];
}

export interface MatchChat {
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
  nickname: string;
}

export interface Writer {
  id: number;
}
