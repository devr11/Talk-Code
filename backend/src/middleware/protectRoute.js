import { clerkClient, getAuth, requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
    requireAuth(),
    async (req, res, next) => {
        try {
            
        } catch (error) {
            
        }
    }
]