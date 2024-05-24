import express from 'express'
import multer from 'multer'
import {
    createRequest
} from '../controllers/userController.js'

const router = express.Router()
const upload = multer()

router.post("/request/:userId", createRequest)

export default router