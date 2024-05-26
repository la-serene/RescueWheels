import express from "express";
import multer from "multer";
import { allMessages, sendMessage } from "../controllers/chatController";

const router = express.Router();
router.get("/", allMessages);
router.post("/", sendMessage);

export default router;
