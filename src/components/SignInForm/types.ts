export interface Values {
  username?: string;
  password?: string;
}

export interface SuccessResponse {
  id: number;
  username: string;
  nickname: string;
}

export interface ErrorResponse {
  code: string;
  message: string;
}
