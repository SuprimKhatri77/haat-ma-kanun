import { headers } from "next/headers";
import { auth } from "../../../server/lib/auth/auth";
import { redirect } from "next/navigation";
import { db } from "../../../lib/db";
import { advocateProfile, user } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";

export default async function AdminPage() {
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
  if (userRecord.role !== "admin") {
    return redirect("/qna");
  }
  return <div>Admin page</div>;
}
