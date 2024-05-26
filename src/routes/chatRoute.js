import express from "express";
import multer from "multer";
import { attr, sendMessage } from "../controllers/chatController";

const router = express.Router();
router.get("/", attr);
router.post("/", sendMessage);

export default router;
