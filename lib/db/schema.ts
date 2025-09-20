import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  boolean,
  pgEnum,
  uuid,
  integer,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["user", "advocate", "admin"]);
export const sexEnum = pgEnum("sex", ["male", "female", "others"]);
export const advocateTypeEnum = pgEnum("advocate_type", [
  "advocate",
  "senior",
  "corporate",
  "criminal",
  "civil",
  "constitutional",
  "human-rights",
  "government",
  "public-interest",
  "notary",
]);
export const questionCategoryEnum = pgEnum("question_category", [
  "preliminary",
  "citizenship",
  "fundamental-rights-and-duties",
  "directive-principles-policies-and-obligations-of-the-state",
  "structure-of-the-state-and-distribution-of-state-power",
  "president-and-vice-president",
  "federal-legislature",
  "federal-executive",
  "federal-legislature-procedure",
  "federal-financial-procedures",
  "judiciary",
  "attorney-general",
  "state-legislature",
  "state-executive",
  "state-legislative-procedure",
  "state-financial-procedure",
  "state-judiciary",
  "local-executive",
  "local-legislature",
  "interrelations-between-federation-state-and-local-level",
  "political-parties",
  "emergency-power",
  "constitutional-bodies",
  "provision-regarding-national-security",
  "provision-regarding-public-service",
  "election-commission",
  "local-commissions",
  "provision-regarding-finance-property-and-revenue",
  "inter-governmental-relations",
  "provision-regarding-amendment-of-constitution",
  "miscellaneous",
  "transitional-provisions",
  "definitions-and-interpretation",
  "short-title-commencement-and-repeal",
  "schedules",
]);
export const languageEnum = pgEnum("language", ["nepali", "english"]);
export const advocateVerifiedEnum = pgEnum("advocate_verified", [
  "pending",
  "verified",
  "rejected",
]);

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image").default(
    "https://5wt23w8lat.ufs.sh/f/4Ina5a0Nyj35BpvnC8GfqH2grxZLMciEXY3e04oTybQNdzD5"
  ),
  role: roleEnum("role").default("user"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const advocateProfile = pgTable("advocate_profile", {
  id: text("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull()
    .primaryKey(),
  address: text("address"),
  sex: sexEnum("sex"),
  type: advocateTypeEnum("type"),
  yearsExperience: integer("years_exp"),
  barNumber: text("bar_number"),
  licenseFileUrl: text("license_file_url"),
  status: advocateVerifiedEnum("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const question = pgTable("questions", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  userId: text("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  title: text("title"),
  description: text("description"),
  language: languageEnum("language").default("english"),
  category: questionCategoryEnum("category").default(
    "fundamental-rights-and-duties"
  ),
  updatedAt: timestamp("updated_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const likes = pgTable("likes", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  questionId: uuid("question_id")
    .references(() => question.id, { onDelete: "cascade" })
    .notNull(),
  userId: text("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const comments = pgTable("comments", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  questionId: uuid("question_id")
    .references(() => question.id, { onDelete: "cascade" })
    .notNull(),
  body: text("body"),
  userId: text("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const answers = pgTable("answers", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  body: text("body"),
  questionId: uuid("question_id")
    .references(() => question.id, { onDelete: "cascade" })
    .notNull(),
  advocateId: text("advocate_id")
    .references(() => advocateProfile.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const video = pgTable("video", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  userId: text("user_id").references(() => user.id, { onDelete: "cascade" }),
  title: text("title"),
  videoUrl: text("video_url"),
  body: text("body"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const repostVideos = pgTable(
  "repost_videos",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    videoId: uuid("video_id").references(() => video.id, {
      onDelete: "cascade",
    }),
    userId: text("user_id").references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [uniqueIndex("repost_unique").on(table.videoId, table.userId)]
);

export const videoRelation = relations(video, ({ one, many }) => ({
  repostVideos: many(repostVideos),
}));
export const repostVideoRelation = relations(repostVideos, ({ one }) => ({
  video: one(video, {
    fields: [repostVideos.videoId],
    references: [video.id],
  }),
}));

export const advocateUserRelation = relations(advocateProfile, ({ one }) => ({
  user: one(user, {
    fields: [advocateProfile.id],
    references: [user.id],
  }),
}));

export const userAdvocateRelation = relations(user, ({ one, many }) => ({
  advocateProfile: one(advocateProfile, {
    fields: [user.id],
    references: [advocateProfile.id],
  }),
  question: many(question),
}));

export const questionRelation = relations(question, ({ one, many }) => ({
  user: one(user, {
    fields: [question.userId],
    references: [user.id],
  }),
  likes: many(likes),
  comments: many(comments),
}));

export const likeRelation = relations(likes, ({ one }) => ({
  question: one(question, {
    fields: [likes.questionId],
    references: [question.id],
  }),
}));

export const commentRelation = relations(comments, ({ one }) => ({
  question: one(question, {
    fields: [comments.questionId],
    references: [question.id],
  }),
  user: one(user, {
    fields: [comments.userId],
    references: [user.id],
  }),
}));

export const answerRelation = relations(answers, ({ one, many }) => ({
  question: one(question, {
    fields: [answers.questionId],
    references: [question.id],
  }),
  advocateProfile: one(advocateProfile, {
    fields: [answers.advocateId],
    references: [advocateProfile.id],
  }),
}));

export type AdvocateProfileInsertType = InferInsertModel<
  typeof advocateProfile
>;
export type AdvocateProfileSelectType = InferSelectModel<
  typeof advocateProfile
>;
export type UserSelectType = InferSelectModel<typeof user>;
export type UserInsertType = InferInsertModel<typeof user>;
export type QuestionSelectType = InferSelectModel<typeof question>;
export type QuestionInsertType = InferInsertModel<typeof question>;
export type LikeSelectType = InferSelectModel<typeof likes>;
export type LikeInsertType = InferInsertModel<typeof likes>;
export type CommentSelectType = InferSelectModel<typeof comments>;
export type CommentInsertType = InferSelectModel<typeof comments>;
