import express from 'express'
import multer from 'multer'
import {
    signUp,
    signIn
} from '../controllers/authController.js'

const router = express.Router()
const upload = multer()

router.post("/signup", signUp)
router.post("/signin", signIn)

export default router