import express from 'express'
import multer from 'multer'
import {
    updateProfile,
    createRequest
} from '../controllers/userController.js'

const router = express.Router()
const upload = multer()

router.put("/updateUserProfile/:userId", updateProfile)
router.post("/request/:userId", createRequest)

export default router