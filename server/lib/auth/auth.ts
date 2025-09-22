import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../../../lib/db";
import { nextCookies } from "better-auth/next-js";
// import { upsertStreamUser } from "@/config/stream";
// import { upsertStreamUser } from "@/config/stream";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  account: {
    accountLinking: {
      enabled: true,
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET_KEY as string,
      prompt: "select_account",
      accessType: "offline",
    },
  },
  plugins: [nextCookies()],
  // events: {
  //   async userCreated({
  //     user,
  //   }: {
  //     user: { id: string; name?: string | null; email?: string | null };
  //   }) {
  //     console.log("New Better Auth user:", user);

  //     // Upsert into Stream Chat
  //     await upsertStreamUser({
  //       id: user.id,
  //       name: user.name ?? undefined,
  //       role: "user",
  //       email: user.email ?? undefined,
  //     });
  //     console.log(`Successfully user upserted in stream for ${user.name}`);
  //   },
  //   async sessionCreated({
  //     user,
  //   }: {
  //     user: { id: string; name?: string | null; email?: string | null };
  //   }) {
  //     console.log("🔑 Session created for user:", user);

  //     await upsertStreamUser({
  //       id: user.id,
  //       name: user.name ?? "Anonymous",
  //       role: "user",
  //       email: user.email ?? "",
  //     });

  //     console.log(
  //       `✅ Successfully upserted user in Stream (login): ${user.name}`
  //     );
  //   },
  // },
});
