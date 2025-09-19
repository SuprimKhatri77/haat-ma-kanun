import {
  AdvocateProfileSelectType,
  CommentSelectType,
  LikeSelectType,
  QuestionSelectType,
  UserSelectType,
} from "../lib/db/schema";

export type AdvocateProfileWithUser = AdvocateProfileSelectType & {
  user: UserSelectType;
};

export type QuestionWithUserLike = QuestionSelectType & {
  user: UserSelectType;
  likes: LikeSelectType[];
  comments: CommentSelectType[];
};
export type QuestionWithUserLikeCommentCount = QuestionSelectType & {
  user: UserSelectType;
  likes: {
    count: number;
  };
  comments: {
    count: number;
  };
};
