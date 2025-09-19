"use server";

import z from "zod";
import { auth } from "../../lib/auth/auth";

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
    return {
      message: "signed in successfully!",
      success: true,
      redirectTo: "/qna",
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
