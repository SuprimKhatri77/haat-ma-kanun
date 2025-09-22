"use server";

import { timestamp } from "drizzle-orm/gel-core";
import z from "zod";
import { auth } from "../../lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "../../../lib/db";
import { eq } from "drizzle-orm";
import {
  advocateProfile,
  AdvocateProfileInsertType,
  user,
} from "../../../lib/db/schema";

export type AdvocateOnboardingFormState = {
  errors?: {
    properties?: {
      image?: string[];
      address?: string[];
      sex?: string[];
      advocateType?: string[];
      barNumber?: string[];
      yearsExperience?: string[];
      licenseFileUrl?: string[];
    };
  };
  message?: string;
  success?: boolean;
  timestamp?: Date;
  redirectTo?: string;
  inputs?: {
    image?: string;
    address?: string;
    sex?: string;
    advocateType?: string;
    barNumber?: string;
    yearsExperience?: string;
    licenseFileUrl?: string;
  };
};

const sexEnum = z
  .string()
  .refine((val) => ["male", "female", "others"].includes(val), {
    error: "Invalid Gender",
  });
const advocateEnum = z
  .string()
  .refine(
    (val) =>
      [
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
      ].includes(val),
    {
      error: "Invalid advocate type",
    }
  );
export async function onboardingAdvocate(
  prevState: AdvocateOnboardingFormState,
  formData: FormData
) {
  // console.log("FormData: ", formData);
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

  const onboardingSchema = z.object({
    image: z.string().nonempty(),
    address: z.string().nonempty(),
    sex: sexEnum,
    advocateType: advocateEnum,
    barNumber: z.number().positive(),
    yearsExperience: z.number().positive(),
    licenseFileUrl: z.string().nonempty(),
  });

  const validateFileds = onboardingSchema.safeParse({
    image: formData.get("image"),
    address: formData.get("address"),
    sex: formData.get("sex") as string,
    advocateType: formData.get("advocateType"),
    yearsExperience: Number(formData.get("yearsExperience")),
    licenseFileUrl: formData.get("licenseFileUrl"),
    barNumber: Number(formData.get("barNumber")),
  });
  // console.log("BarNumber type: ", typeof formData.get("barNumber"));

  if (!validateFileds.success) {
    const tree = z.treeifyError(validateFileds.error);
    const inputData = Object.fromEntries(formData);
    // console.log("Error Tree: ", tree);
    return {
      errors: {
        properties: {
          image: tree.properties?.image?.errors ?? [],
          sex: tree.properties?.sex?.errors ?? [],
          licenseFileUrl: tree.properties?.licenseFileUrl?.errors ?? [],
          barNumber: tree.properties?.barNumber?.errors ?? [],
          address: tree.properties?.address?.errors ?? [],
          yearsExperience: tree.properties?.yearsExperience?.errors ?? [],
          advocateType: tree.properties?.advocateType?.errors ?? [],
        },
      },
      message: "Validation failed",
      success: false,
      timestamp: new Date(),
      inputs: inputData,
    };
  }
  const {
    image,
    sex,
    licenseFileUrl,
    barNumber,
    address,
    yearsExperience,
    advocateType,
  } = validateFileds.data;

  try {
    await db.insert(advocateProfile).values({
      sex: sex as "male" | "female" | "others",
      licenseFileUrl,
      barNumber: String(barNumber),
      address: address.toLowerCase(),
      yearsExperience: yearsExperience,
      type: advocateType as
        | "advocate"
        | "senior"
        | "corporate"
        | "criminal"
        | "civil"
        | "constitutional"
        | "human-rights"
        | "government"
        | "public-interest"
        | "notary",
      id: userRecord.id,
      status: "pending",
    } satisfies AdvocateProfileInsertType);
    await db
      .update(user)
      .set({
        image,
        updatedAt: new Date(),
      })
      .where(eq(user.id, userRecord.id));
    return {
      message: "Onboarding form submitted successfully!",
      success: true,
      timestamp: new Date(),
      redirectTo: "/waitlist",
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
