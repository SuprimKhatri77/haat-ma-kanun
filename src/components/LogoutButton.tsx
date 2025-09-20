"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { authClient } from "../../server/lib/auth/auth-client";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

export default function Logout() {
  const router = useRouter();
  const [pending, setPending] = useState<boolean>(false);
  const handleClick = async () => {
    setPending(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh();
        },
      },
    });
    setPending(false);
  };
  return (
    <Button onClick={handleClick} disabled={pending}>
      {pending ? <Loader /> : "Logout"}
    </Button>
  );
}
