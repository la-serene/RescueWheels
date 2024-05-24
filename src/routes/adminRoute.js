import express from 'express'
import multer from 'multer'
import {
    approvePendingService,
    rejectPendingService,
} from '../controllers/adminController.js'

const router = express.Router()
const upload = multer()

router.post("/approvePendingService/:pendingServiceId", approvePendingService)
router.post("/rejectPendingService/:pendingServiceId", rejectPendingService)

export default router