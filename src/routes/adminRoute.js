import express from 'express'
import multer from 'multer'
import {
    createRequest
} from '../controllers/adminController.js'

const router = express.Router()
const upload = multer()

router.post("/request/:userId", createRequest)

export default router