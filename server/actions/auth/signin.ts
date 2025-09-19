"use server";

import z from "zod";
import { auth } from "../../lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "../../../lib/db";
import { user } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";

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
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
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

    return {
      message: "signed in successfully!",
      success: true,
      redirectTo: userRecord.role === "admin" ? "/admin" : "/qna",
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
