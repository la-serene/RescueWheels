import express from 'express'
import multer from 'multer'
import {
    approvePendingService,
    getPendingServiceByPendingServiceId,
    getPendingServiceByQuantity,
    rejectPendingService,
} from '../controllers/pendingServiceController.js'

const router = express.Router()
const upload = multer()

router.post("/approvePendingService/:pendingServiceId", approvePendingService)
router.get("/getPendingServiceByPendingServiceId/:pendingServiceId", getPendingServiceByPendingServiceId)
router.get("/getPendingServiceByQuantity/:quantity/:fromProviderId?", getPendingServiceByQuantity)
router.post("/rejectPendingService/:pendingServiceId", rejectPendingService)

export default router