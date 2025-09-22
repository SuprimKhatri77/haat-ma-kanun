import { StreamChat } from "stream-chat";
import dotenv from "dotenv";
dotenv.config();

export type StreamUserForUpsert = {
  id: string;
  name?: string;
  role?: string;
  email?: string;
  // add other allowed fields
};

export const serverClient = StreamChat.getInstance(
  process.env.STREAM_API_KEY!,
  process.env.STREAM_API_SECRET_KEY!
);

export const upsertStreamUser = async (userData: StreamUserForUpsert) => {
  try {
    await serverClient.upsertUsers([userData]);
    console.log("upserting user");
    return userData;
  } catch (error) {
    console.error("Error upserting stream users", error);
  }
};

export const generateStreamToken = async (userid: string) => {
  try {
    return serverClient.createToken(userid);
  } catch (error) {
    console.error("Error generating stream token", error);
  }
};
