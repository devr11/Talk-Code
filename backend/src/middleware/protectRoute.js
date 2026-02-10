import { clerkClient, getAuth, requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
    requireAuth(),
    async (req, res, next) => {
        try {
            const clerkId = req.auth().userId // here we got the id
            if(!clerkId) return res.status(401).json({msg: "Unauthorized"})
        } catch (error) {
            
        }
    }
]