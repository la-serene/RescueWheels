import express from 'express'
import multer from 'multer'
import {
    submitService,
    getServiceByQuantity,
    updateService,
    deleteService,
} from '../controllers/providerController.js'

const router = express.Router()
const upload = multer()

router.post("/submitService/:providerId", submitService)
router.get("/getServiceByBatchSize/:quantity", getServiceByQuantity)
router.put("/updateService/:providerId/:serviceId", updateService)
router.delete("/deleteService/:serviceId", deleteService)

export default router