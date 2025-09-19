import { AdvocateProfileSelectType, UserSelectType } from "../lib/db/schema";

export type AdvocateProfileWithUser = AdvocateProfileSelectType & {
  user: UserSelectType;
};
