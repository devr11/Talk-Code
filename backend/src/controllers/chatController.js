import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
    try {
        // use clerkId for stream not mongodb id => it should match the id we have in the stream dashboard
        const token = chatClient.createToken(req.user.clerkId)

        res.status(200).json({
            
        })
    } catch (error) {
        
    }
}
