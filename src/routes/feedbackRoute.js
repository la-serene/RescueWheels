import express from 'express'
import multer from 'multer'
import {
    createFeedback,
    likeFeedback,
} from '../controllers/feedbackController.js'

const router = express.Router()
const upload = multer()

router.post("/createFeedback/:fromUserId/:toUserId", createFeedback)

export default router