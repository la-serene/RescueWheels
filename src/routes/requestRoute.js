import express from "express"
import multer from "multer"
import {
    createRequest,
    getRequestByUserId,
    deleteRequest
} from "../controllers/requestController.js"

const router = express.Router()
const upload = multer()

router.post("/createRequest/:userId", createRequest)
router.get("/getRequestByUserId/:fromUserId", getRequestByUserId)
router.delete("deleteRequest/:requestId", deleteRequest)

export default router