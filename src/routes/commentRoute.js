import express from 'express'
import multer from 'multer'
import {
    createComment,
} from '../controllers/commentController.js'

const router = express.Router()
const upload = multer()

router.post("/createComment/:from/:feedbackId", createComment)

export default router