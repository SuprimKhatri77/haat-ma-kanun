import Logout from "@/components/LogoutButton";
import { auth } from "../../../server/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "../../../lib/db";
import { advocateProfile, user } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";

export default async function Waitlist() {
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
  if (!userRecord.role) {
    return redirect("/select-role");
  }
  if (userRecord.role === "user") {
    return redirect("/qna");
  }
  if (userRecord.role === "admin") {
    return redirect("/admin");
  }
  if (userRecord.role === "advocate") {
    const [advocateRecord] = await db
      .select()
      .from(advocateProfile)
      .where(eq(advocateProfile.id, userRecord.id));
    if (!advocateRecord) {
      return redirect("/onboarding/advocate");
    }
    if (advocateRecord.status === "rejected") {
      return redirect("/rejected");
    }
    if (advocateRecord.status === "verified") {
      return redirect("/qna");
    }
    return (
      <div className="mt-70 flex flex-col items-center justify-center gap-4">
        <h1>Please wailt till one our Admin verfies your profile</h1>
        <Logout />
      </div>
    );
  }
}
