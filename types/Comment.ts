import { PublicUser } from "./User";

export type Comment = {
  id?: number;
  creationTimestampMs?: number;
  rating?: number;
  comment?: string;
  securityFlag?: boolean;
  author?: PublicUser;
};
