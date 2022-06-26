export type Token = string | null;

export interface IProfile {
  id: number;
  nome: string;
  iat: number;
  exp: number;
}
export interface AuthSlice {
  token: Token;
  isAuthenticated: boolean;
  profile: IProfile | null;
}

export interface AuthSliceWithCallbacks extends AuthSlice {}
