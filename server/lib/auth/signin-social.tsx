import { Button } from "@/components/ui/button";
import { authClient } from "./auth-client";

export default function SignInSocial({
  provider,
  children,
}: {
  provider:
    | "github"
    | "apple"
    | "google"
    | "facebook"
    | "microsoft"
    | "spotify"
    | "gitlab"
    | "twitter"
    | "dropbox"
    | "twitch"
    | "kick"
    | "vk"
    | "reddit"
    | "tiktok"
    | "linkedin"
    | "discord";
  children: React.ReactNode;
}) {
  return (
    <Button
      onClick={async () => {
        try {
          await authClient.signIn.social({
            provider,
            callbackURL: "/qna",
          });
        } catch (err) {
          console.error("Social sign-in error:", err);
        }
      }}
      type="button"
      variant="outline"
    >
      {children}
    </Button>
  );
}
