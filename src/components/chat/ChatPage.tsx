"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchStreamToken } from "@/lib/api";
import {
  Channel as StreamChannel,
  Chat,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { StreamChat, Channel } from "stream-chat";
import ChatLoader from "@/components/ChatLoader";
import CallButton from "@/components/CallButton";
import { UserSelectType } from "../../../lib/db/schema";

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY!;

export default function ChatPage({
  userRecord,
}: {
  userRecord: UserSelectType;
}) {
  const { targetUid } = useParams(); // /chat/[targetUid]
  const [chatClient, setChatClient] = useState<StreamChat | null>(null);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL = process.env.NEXT_PUBLIC_BETTER_AUTH_URL;
  const imageUrl = userRecord?.image
    ? `${BASE_URL}/uploads/${userRecord.image}`
    : `${BASE_URL}/uploads/user.svg`;

  const chatClientRef = useRef<StreamChat | null>(null);

  // Fetch token using Next.js API route
  const { data: token, isSuccess: tokenReady } = useQuery({
    queryKey: ["streamToken", userRecord.id],
    queryFn: () => fetchStreamToken(userRecord.id),
    enabled: !!userRecord,
  });

  useEffect(() => {
    const initChat = async () => {
      if (!userRecord || !token || !targetUid || !tokenReady) return;

      try {
        const client = StreamChat.getInstance(STREAM_API_KEY);

        await client.connectUser(
          {
            id: userRecord.id,
            name: userRecord.name,
            image: imageUrl,
          },
          token
        );

        const channelId = [userRecord.id, targetUid].sort().join("-");
        const currentChannel = client.channel("messaging", channelId, {
          members: [userRecord.id, targetUid],
        });

        await currentChannel.watch();
        chatClientRef.current = client;
        setChatClient(client);
        setChannel(currentChannel);
      } catch (error) {
        console.error("Stream init failed:", error);
      } finally {
        setLoading(false);
      }
    };

    initChat();

    return () => {
      chatClientRef.current?.disconnectUser().catch(console.error);
    };
  }, [userRecord, targetUid, token, imageUrl]);

  const handleVideoCall = () => {
    if (channel) {
      const callUrl = `${window.location.origin}/call/${channel.id}`;
      channel.sendMessage({
        text: `I've started a video call. Join me here: ${callUrl}`,
      });
      // optional: show toast if you have react-hot-toast installed
      // toast.success("Video call link sent successfully!");
    }
  };

  if (loading || !chatClient || !channel) return <ChatLoader />;

  return (
    <Chat client={chatClient}>
      <StreamChannel channel={channel}>
        <CallButton handleVideoCall={handleVideoCall} />
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </StreamChannel>
    </Chat>
  );
}
