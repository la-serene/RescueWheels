import express from 'express'
import multer from 'multer'
import {
    updateProfile,
    createRequest,
    deleteRequest
} from '../controllers/userController.js'

const router = express.Router()
const upload = multer()

router.put("/updateUserProfile/:userId", updateProfile)

export default router