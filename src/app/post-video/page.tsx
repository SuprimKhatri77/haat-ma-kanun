import PostVideoPage from "@/components/VideoPostPage";
import { auth } from "../../../server/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "../../../lib/db";
import { eq } from "drizzle-orm";
import { user } from "../../../lib/db/schema";

export default async function Page() {
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

  return <PostVideoPage userId={userRecord.id} />;
}
