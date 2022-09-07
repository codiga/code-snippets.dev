export type UserInfo = {
  firstname?: string;
  lastname?: string;
};

export type User = {
  id?: number;
  username?: string;
  info?: UserInfo;
};

export type PublicUser = {
  id?: number;
  hasSlug?: boolean;
  slug?: string;
  displayName?: string;
};
