import { headers } from "next/headers";
import { auth } from "../../../server/lib/auth/auth";
import { redirect } from "next/navigation";
import { db } from "../../../lib/db";
import { user } from "../../../auth-schema";
import ChatPage from "@/components/chat/ChatPage";
import { UserSelectType } from "../../../lib/db/schema";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/login");
  }
  const userRecord: UserSelectType = (await db.query.user.findFirst({
    where: (fields, { eq }) => eq(user.id, session.user.id),
  })) as UserSelectType;
  if (!userRecord) {
    return redirect("/sign-up");
  }

  return <ChatPage userRecord={userRecord} />;
}
