import express from 'express'
import multer from 'multer'
import {
    createFeedback,
    getFeedbackFromUserIdByQuantity
} from '../controllers/feedbackController.js'

const router = express.Router()
const upload = multer()

router.post("/createFeedback/:fromUserId/:toUserId", createFeedback)
router.get("/getFeedbackFromUserIdByQuantity/:fromUserId/:quantity", getFeedbackFromUserIdByQuantity)

export default router