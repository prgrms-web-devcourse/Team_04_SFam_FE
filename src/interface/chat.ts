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
