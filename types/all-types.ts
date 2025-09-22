import {
  AdvocateProfileSelectType,
  CommentSelectType,
  LikeSelectType,
  QuestionSelectType,
  RepostVideosSelectType,
  UserSelectType,
  VideoSelecType,
} from "../lib/db/schema";

export type AdvocateProfileWithUser = AdvocateProfileSelectType & {
  user: UserSelectType;
};

export type QuestionWithUserLikeAndComment = QuestionSelectType & {
  user: UserSelectType;
  likes: LikeSelectType[];
  comments: CommentSelectType[];
};
export type QuestionWithUserLikeComment = QuestionSelectType & {
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

export type VideoWithRepost = VideoSelecType & {
  repostVideos: RepostVideosSelectType[];
};
