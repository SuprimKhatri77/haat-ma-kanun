import { headers } from "next/headers";
import { auth } from "../../../server/lib/auth/auth";
import { redirect } from "next/navigation";
import { db } from "../../../lib/db";
import { advocateProfile, user } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import Checklist from "@/components/Admin/lawyer-applications/Checklist";
import LawyerApplications from "@/components/Admin/lawyer-applications/Checklist";

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
  return <LawyerApplications />;
}
