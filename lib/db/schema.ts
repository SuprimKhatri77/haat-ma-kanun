import {
  pgTable,
  text,
  timestamp,
  boolean,
  pgEnum,
  uuid,
  integer,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["user", "advocate"]);
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
  image: text("image"),
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
    .references(() => user.id)
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
    .references(() => user.id)
    .notNull(),
  title: text("title"),
  description: text("description"),
  language: languageEnum("language").default("english"),
  category: questionCategoryEnum("category").default(
    "fundamental-rights-and-duties"
  ),
  updatedAt: timestamp("update_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const likes = pgTable("likes", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  questionId: uuid("question_id")
    .references(() => question.id)
    .notNull(),
  userId: text("user_id")
    .references(() => user.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const comments = pgTable("comments", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  questionId: uuid("question_id")
    .references(() => question.id)
    .notNull(),
  body: text("body"),
  userId: text("user_id")
    .references(() => user.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const answers = pgTable("answers", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  body: text("body"),
  questionId: uuid("question_id")
    .references(() => question.id)
    .notNull(),
  advocateId: text("advocate_id")
    .references(() => advocateProfile.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
