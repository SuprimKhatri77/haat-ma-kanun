"use server";

import z from "zod";
import { auth } from "../../lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "../../../lib/db";
import { user } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import { APIError } from "better-auth";

export type SignInFormState = {
  errors?: {
    properties?: {
      email?: string[];
      password?: string[];
    };
  };
  message?: string;
  success?: boolean;
  timestamp?: Date;
  redirectTo?: string;
};

export async function signIn(prevState: SignInFormState, formData: FormData) {
  const signInSchema = z.object({
    email: z.email(),
    password: z.string(),
  });

  const validateFileds = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFileds.success) {
    const tree = z.treeifyError(validateFileds.error);
    return {
      errors: {
        properties: {
          email: tree.properties?.email?.errors ?? [],
          password: tree.properties?.password?.errors ?? [],
        },
      },
      message: "Validation Failed",
      success: true,
      timestamp: new Date(),
    };
  }

  const { email, password } = validateFileds.data;
  try {
    const [userRecord] = await db
      .select()
      .from(user)
      .where(eq(user.email, email));
    if (!userRecord) {
      return {
        message: "User doesn't exist",
        success: false,
        timestamp: new Date(),
      };
    }
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return {
      message: "signed in successfully!",
      success: true,
      redirectTo: userRecord.role === "admin" ? "/admin" : "/qna",
      timestamp: new Date(),
    };
  } catch (error) {
    console.error("Error: ", error);
    if (error instanceof APIError) {
      switch (error.status) {
        case "UNPROCESSABLE_ENTITY":
          return {
            success: false,
            message: "Incorrect password",
            errors: {
              password: ["Incorrect password"],
            },
            timestamp: new Date(),
          };
        case "BAD_REQUEST":
          return {
            success: false,
            message: "Invalid email or password",
            errors: {
              email: ["Invalid email or password"],
            },
            timestamp: new Date(),
          };
        default:
          return {
            success: false,
            message: error.body?.message ?? "Something went wrong",
            timestamp: new Date(),
          };
      }
    }
    throw error;
  }
}
