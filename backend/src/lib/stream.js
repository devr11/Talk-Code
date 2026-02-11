import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";

import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const secretKey = ENV.STREAM_API_SECRET;

if (!apiKey || !secretKey) {
  console.error("Stream API_KEY or SECRET is missing");
}

export const chatClient = StreamChat.getInstance(apiKey, secretKey); // will be used for chat features
export const streamClient = new StreamClient(apiKey, secretKey); // will be used for video calls

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log("Stream user upsert successful:", userData);
  } catch (error) {
    console.error("Error upserting stream user:", error);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted successful:", userId);
  } catch (error) {
    console.error("Error deleting stream user:", error);
  }
};
