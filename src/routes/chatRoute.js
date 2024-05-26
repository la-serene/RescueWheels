import express from "express"
import multer from "multer"
import { getMessageFromUserIdByQuantity } from "../controllers/chatController.js"

const router = express.Router()
router.get("/getMessageFromUserIdByQuantity/:fromUserId/:quantity", getMessageFromUserIdByQuantity)

export default router
