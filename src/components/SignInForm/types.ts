export interface Values {
  username?: string;
  password?: string;
}

export interface SuccessResponse {
  email: string | null;
  id: number;
  username: string;
  nickname: string;
  latitude: number | null;
  longitude: number | null;
  searchDistance: number | null;
}

export interface ErrorResponse {
  code: string;
  message: string;
}
