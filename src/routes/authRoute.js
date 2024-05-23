import express from 'express'
import multer from 'multer'

import {
    signUp
} from '../controllers/authController.js'

const router = express.Router()
const upload = multer()

router.get("/signup", signUp)

export default router