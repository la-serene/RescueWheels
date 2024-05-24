import express from 'express'
import multer from 'multer'
import {
    signIn,
} from '../controllers/providerController.js'

const router = express.Router()
const upload = multer()

router.post("/signin", signIn)

export default router