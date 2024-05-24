import express from 'express'
import multer from 'multer'
import {
    signUp,
    signIn,
    sendResetPasswordMail,
    validateResetToken,
    resetPassword,
} from '../controllers/authController.js'

const router = express.Router()
const upload = multer()

router.post("/signup", signUp)
router.post("/signin", signIn)
router.post("/sendResetPasswordMail", sendResetPasswordMail)
router.get("/resetPassword", validateResetToken)
router.post("/resetPassword/:id", resetPassword)

export default router