import express from "express"
import multer from "multer"
import { getMessageByQuantityFromUserId } from "../controllers/chatController.js"

const router = express.Router()
router.get("/getMessageByQuantityFromUserId/:quantity/:fromUserId", getMessageByQuantityFromUserId)

export default router
