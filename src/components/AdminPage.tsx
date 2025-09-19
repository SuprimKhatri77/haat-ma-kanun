import { AdvocateProfileWithUser } from "../../types/all-types";
import Logout from "./LogoutButton";

export default function AdminPage({
  advocateRecords,
}: {
  advocateRecords: AdvocateProfileWithUser[];
}) {
  return (
    <div>
      <h1>Verify a advocate</h1>
      <Logout />
    </div>
  );
}
