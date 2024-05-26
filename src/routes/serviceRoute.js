import express from 'express'
import multer from 'multer'
import {
    submitService,
    getServiceByServiceId,
    getAllServiceFromProviderId,
    getServiceByQuantity,
    getServiceFromProviderIdByQuantity,
    updateService,
    deleteService,
} from '../controllers/serviceController.js'

const router = express.Router()
const upload = multer()

router.post("/submitService/:providerId", submitService)
router.get("/getServiceByServiceId/:serviceId", getServiceByServiceId)
router.get("/getAllServiceFromProviderId/:providerId", getAllServiceFromProviderId)
router.get("/getServiceByQuantity/:quantity", getServiceByQuantity)
router.get("/getServiceFromProviderIdByQuantity/:providerId/:quantity", getServiceFromProviderIdByQuantity)
router.put("/updateService/:providerId/:serviceId", updateService)
router.delete("/deleteService/:serviceId", deleteService)

export default router