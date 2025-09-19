import { StreamChat } from "stream-chat";
import dotenv from "dotenv"
dotenv.config();

export const serverClient = StreamChat.getInstance(
    process.env.STREAM_API_KEY!,
    process.env.STREAM_API_SECRET_API!
);

export const upsertStreamUser= async(userData:any) =>{
    try {
        await serverClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.error("Error upserting stream users", error);
    }
}

export const generateStreamToken = async(userid:any) =>{
    try {
        const userIdStr = userid.toString();
        return serverClient.createToken(userIdStr);
    } catch (error) {
        console.error("Error generating stream token", error);
    }    
}