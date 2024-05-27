import express from "express"
import {
    updateProviderProfile,
    createProvider,
    getProviderByProviderId,
    getProviderByQuantity,
    deleteProvider
} from "../controllers/providerController.js"

const router = express.Router()

router.post("/createProvider", createProvider)
router.put("/updateProviderProfile/:providerId", updateProviderProfile)
router.get("/getProviderByProviderId/:providerId", getProviderByProviderId)
router.get("/getProviderByQuantity/:quantity/:providerId?", getProviderByQuantity)
router.delete("/deleteProvider/:providerId", deleteProvider)

export default router
