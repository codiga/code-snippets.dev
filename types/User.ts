export type UserInfo = {
  firstname?: string;
  lastname?: string;
};

export type User = {
  id?: number;
  username?: string;
  info?: UserInfo;
};
