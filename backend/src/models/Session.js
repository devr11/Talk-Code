import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
    problem: {
        type: String,
        required: true 
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true 
    }
})

const session = mongoose.model("Session", sessionSchema)

export default Session