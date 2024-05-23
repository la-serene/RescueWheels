import express from 'express'
import multer from 'multer'

const router = express.Router()
const upload = multer()

router.get("/getPostByOffset", (req, res) => {
    res.send("Hello World")
})

export default router