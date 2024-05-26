import express from 'express'
import multer from 'multer'
import {
    createFeedback,
    getFeedbackFromUserIdByQuantity,
    getFeedbackById
} from '../controllers/feedbackController.js'

const router = express.Router()
const upload = multer()

router.post("/createFeedback/:fromUserId/:toUserId", createFeedback)
router.get("/getFeedbackFromUserIdByQuantity/:fromUserId/:quantity", getFeedbackFromUserIdByQuantity)
router.get("/getFeedbackById/:feedbackId", getFeedbackById)

export default router