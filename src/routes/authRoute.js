import express from 'express'
import multer from 'multer'
import {
    signUp,
    signIn,
    sendResetPasswordMail
} from '../controllers/authController.js'

const router = express.Router()
const upload = multer()

router.post("/signup", signUp)
router.post("/signin", signIn)
router.post("/sendResetPasswordMail", sendResetPasswordMail)

export default router