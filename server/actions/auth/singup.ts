"use server";

import { timeStamp } from "console";
import z, { ZodType } from "zod";
import { auth } from "../../lib/auth/auth";
import { db } from "../../../lib/db";
import { eq } from "drizzle-orm";
import { user } from "../../../lib/db/schema";
import { timestamp } from "drizzle-orm/gel-core";
import { APIError } from "better-auth";

export type SignupFormState = {
  errors?: {
    errors: string[];
    properties?: {
      firstName?: { errors: string[] };
      lastName?: { errors: string[] };
      email?: { errors: string[] };
      password?: { errors: string[] };
      role?: { errors: string[] };
    };
  };
  message?: string;
  success?: boolean;
  timestamp?: Date;
  redirectTo?: string;
};

const roleEnum = z
  .string()
  .refine((val) => ["advocate", "user", "admin"].includes(val), {
    error: "Invalid role.",
  }) as z.ZodType<"advocate", "user">;
const adminEmails = process.env.ADMIN_EMAILS?.split(",") ?? [];
export async function signUp(prevState: SignupFormState, formData: FormData) {
  const signUpSchema = z.object({
    firstName: z.string().nonempty().min(1).max(20),
    lastName: z.string().nonempty().min(1),
    email: z.email().nonempty(),
    password: z.string().min(8).max(12),
    role: roleEnum,
  });

  const validateFileds = signUpSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    role: formData.get("role") as string,
    password: formData.get("password"),
    email: formData.get("email"),
  });

  if (!validateFileds.success) {
    return {
      errors: z.treeifyError(validateFileds.error),
      message: "Validation Failed",
      success: false,
      timestamp: new Date(),
    };
  }

  const { firstName, lastName, email, role, password } = validateFileds.data;
  const normalizedRole = role.toLowerCase();
  const normalizedEmail = email.toLowerCase();
  const isAdmin = adminEmails.includes(normalizedEmail);

  try {
    await auth.api.signUpEmail({
      body: {
        name: `${firstName} ${lastName}`,
        email: normalizedEmail,
        password,
      },
    });
    await db
      .update(user)
      .set({
        role: isAdmin
          ? "admin"
          : (normalizedRole as "advocate" | "user" | "admin"),
        updatedAt: new Date(),
      })
      .where(eq(user.email, email));

    return {
      message: "Signed up successfully!",
      success: true,
      timestamp: new Date(),
      redirectTo: isAdmin ? "/admin" : "/onboarding/advocate",
    };
  } catch (error) {
    if (error instanceof APIError) {
      switch (error.status) {
        case "UNPROCESSABLE_ENTITY":
          return {
            success: false,
            message: "User already exists",
            timestamp: new Date(),
          };
        case "BAD_REQUEST":
          return {
            success: false,
            message: "Invalid email",
            timestamp: new Date(),
          };
        default:
          return {
            success: false,
            message: "Something went wrong",
            timestamp: new Date(),
          };
      }
    }
    throw error;
  }
}
