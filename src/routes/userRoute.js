import express from "express"
import multer from "multer"
import {
	updateProfile,
	getUserByQuantity
} from "../controllers/userController.js"

const router = express.Router()
const upload = multer()

router.get("/getUserByQuantity/:quantity", getUserByQuantity)
router.put("/updateUserProfile/:userId", updateProfile)

export default router
