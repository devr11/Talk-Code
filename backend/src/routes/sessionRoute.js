import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"

const router = express.Router()

router.post("/", protectRoute, createSession)
router.get("/active", protectRoute, getActiveSessions)
router.get("/my-recent", protectRoute, getMyRecentSessions)


router.get("/:id", protectRoute, getSessionById)

export default router