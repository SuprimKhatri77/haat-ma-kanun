import { headers } from "next/headers";
import { auth } from "../../../server/lib/auth/auth";
import { redirect } from "next/navigation";
import { db } from "../../../lib/db";
import {
  advocateProfile,
  AdvocateProfileSelectType,
  user,
  UserSelectType,
} from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import AdvocateProfilesList from "@/components/AdvocateProfiles/AdvocateProfileList";

type AdvocateProfileWithUser = AdvocateProfileSelectType & {
  user: UserSelectType;
};

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
  
  if (userRecord.role === "advocate") {
    const [advocateProfileRecord] = await db
      .select()
      .from(advocateProfile)
      .where(eq(advocateProfile.id, userRecord.id));

    if (!advocateProfileRecord) {
      return redirect("/onboarding/advocate");
    }

    if (advocateProfileRecord.status !== "verified") {
      if (advocateProfileRecord.status === "rejected") {
        return redirect("/rejected");
      }
      return redirect("/waitlist");
    }

    return redirect("/qna");
  }
  const advocateProfiles: AdvocateProfileWithUser[] =
    await db.query.advocateProfile.findMany({
      where: (fields, { eq }) => eq(advocateProfile.status, "verified"),
      with: {
        user: true,
      },
    });

  return <AdvocateProfilesList advocateProfiles={advocateProfiles} />;
}
