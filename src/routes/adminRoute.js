import express from 'express'
import multer from 'multer'
import {
    approveService,
    rejectService,
} from '../controllers/adminController.js'

const router = express.Router()
const upload = multer()

router.post("/approveService/:pendingServiceId", approveService)
router.post("/rejectService/:pendingServiceId", rejectService)

export default router