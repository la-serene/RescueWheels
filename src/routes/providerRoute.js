import express from 'express'
import multer from 'multer'
import {
    submitService,
} from '../controllers/providerController.js'

const router = express.Router()
const upload = multer()

router.post("/submitService/:providerId", submitService)

export default router