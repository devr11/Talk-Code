import User from "../models/User.js";
import { connectDB } from "./db.js";
import Inngest from "inngest"

export const inngest = new Inngest({ id: "talent-iq" });

const syncUser = inngest.createFunction(
    {id:"sync-user"},
    {event:"clerk/user,created"}
)