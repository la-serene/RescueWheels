import express from "express"
import { updateProviderProfile } from "../controllers/providerController.js"

const router = express.Router()
router.put("/:providerId", updateProviderProfile)
export default router
