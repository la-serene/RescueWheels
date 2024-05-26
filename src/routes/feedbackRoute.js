import express from 'express'
import multer from 'multer'
import {
    createFeedback,
    getFeedbackByFeedbackId,
    getFeedbackByQuantity,
} from '../controllers/feedbackController.js'

const router = express.Router()
const upload = multer()

router.post("/createFeedback/:fromUserId/:toUserId", createFeedback)
router.get("/getFeedbackById/:feedbackId", getFeedbackByFeedbackId)
router.get("/getFeedbackByQuantity/:quantity/:fromUserId?", getFeedbackByQuantity)

export default router