import express from "express"
import {
    createNotification,
} from "../controllers/notificationController.js"

const router = express.Router()

router.post("/createNotification", createNotification)

export default router