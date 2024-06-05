import express from 'express'
import multer from 'multer'
import {
    submitService,
    getServiceByServiceId,
    getServiceByQuantity,
    updateService,
    deleteService,
} from '../controllers/serviceController.js'

const router = express.Router()
const upload = multer()

router.post("/submitService/:fromProviderId", submitService)
router.get("/getServiceByServiceId/:serviceId", getServiceByServiceId)
router.get("/getServiceByQuantity/:quantity/:fromProviderId?", getServiceByQuantity)
router.put("/updateService/:providerId/:serviceId", updateService)
router.delete("/deleteService/:serviceId", deleteService)

export default router