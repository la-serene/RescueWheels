import express from 'express'
import multer from 'multer'
import {
    createFeedback,
} from '../controllers/feedbackController.js'

const router = express.Router()
const upload = multer()

router.post("/createFeedback/:from/:to", createFeedback)

export default router