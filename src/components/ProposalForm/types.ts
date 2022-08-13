export interface ProposalData {
  teamId?: number | string | null;
  content?: string;
  matchType?: string;
}

export interface MemberCount {
  participants?: number | string;
  memberCount?: number | string;
}
