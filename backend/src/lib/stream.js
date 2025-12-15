import { StreamChat } from "stream-chat";
import { ENV } from "./env";

const apiKey = ENV.STREAM_API_KEY
const secretKey = ENV.STREAM_API_SECRET

if(!apiKey || !secretKey){
    console.error("Stream API_KEY or SECRET is missing")
}

export const chatClient = StreamChat.getInstance(apiKey, secretKey)

export const upsertStreamUser = async (userData) => {
    try {
        await chatClient.upsertUser([userData])
        return userData
    } catch (error) {
        console.error("Error upserting stream user:", error)
    }
}