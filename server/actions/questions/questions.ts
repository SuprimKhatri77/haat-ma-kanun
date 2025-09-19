"use server";

import z from "zod";
import { auth } from "../../lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "../../../lib/db";
import { question, user } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import { timestamp } from "drizzle-orm/gel-core";

export type QuestionFormState = {
  errors?: {
    properties?: {
      title?: string[];
      description?: string[];
      language?: string[];
      category?: string[];
    };
  };
  message?: string;
  success?: boolean;
  timestamp?: Date;
  redirectTo?: string;
};

const languageEnum = z
  .string()
  .refine((val) => ["english", "nepali"].includes(val), {
    error: "Invalid language choice!",
  });
const categoryEnum = z
  .string()
  .refine((val) => [
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
export async function createQuestions(
  prevState: QuestionFormState,
  formData: FormData
) {
  console.log("FormData: ", formData);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return redirect("/login");
  }
  const [userRecord] = await db
    .select()
    .from(user)
    .where(eq(user.id, session.user.id));
  if (!userRecord) {
    return redirect("/sign-up");
  }

  const questionSchema = z.object({
    title: z.string(),
    description: z.string(),
    language: languageEnum,
    category: categoryEnum,
  });
  const validateFileds = questionSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    language: formData.get("language"),
    category: formData.get("category"),
  });
  if (!validateFileds.success) {
    const tree = z.treeifyError(validateFileds.error);
    return {
      errors: {
        properties: {
          title: tree.properties?.title?.errors ?? [],
          description: tree.properties?.description?.errors ?? [],
          language: tree.properties?.language?.errors ?? [],
          category: tree.properties?.category?.errors ?? [],
        },
      },
      message: "Validation Failed",
      success: false,
      timestamp: new Date(),
    };
  }

  const { title, description, category, language } = validateFileds.data;

  try {
    await db.insert(question).values({
      userId: userRecord.id,
      description,
      title,
      category: category.toLowerCase() as
        | "preliminary"
        | "citizenship"
        | "fundamental-rights-and-duties"
        | "directive-principles-policies-and-obligations-of-the-state"
        | "structure-of-the-state-and-distribution-of-state-power"
        | "president-and-vice-president"
        | "federal-legislature"
        | "federal-executive"
        | "federal-legislature-procedure"
        | "federal-financial-procedures"
        | "judiciary"
        | "attorney-general"
        | "state-legislature"
        | "state-executive"
        | "state-legislative-procedure"
        | "state-financial-procedure"
        | "state-judiciary"
        | "local-executive"
        | "local-legislature"
        | "interrelations-between-federation-state-and-local-level"
        | "political-parties"
        | "emergency-power"
        | "constitutional-bodies"
        | "provision-regarding-national-security"
        | "provision-regarding-public-service"
        | "election-commission"
        | "local-commissions"
        | "provision-regarding-finance-property-and-revenue"
        | "inter-governmental-relations"
        | "provision-regarding-amendment-of-constitution"
        | "miscellaneous"
        | "transitional-provisions"
        | "definitions-and-interpretation"
        | "short-title-commencement-and-repeal"
        | "schedules",
      language: language as "english" | "nepali",
    });
    return {
      message: "Question created successfully!",
      success: true,
      timestamp: new Date(),
    };
  } catch (error) {
    console.error("Error: ", error);
    return {
      message: "Something went wrong!",
      success: false,
      timestamp: new Date(),
    };
  }
}
