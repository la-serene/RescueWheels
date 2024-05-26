import express from "express"
import multer from "multer"
import {getMessageFromUserIdByQuantity, sendMessage} from "../controllers/chatController.js"

const router = express.Router()
router.get("/getMessageFromUserIdByQuantity/:fromUserId/:quantity", getMessageFromUserIdByQuantity)
router.post("/", sendMessage)

export default router
