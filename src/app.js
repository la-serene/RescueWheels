import express from "express"
import 'dotenv/config'
import cors from 'cors';
import morgan from "morgan"
import helmet from "helmet"
import compression from "compression"
import { createServer } from "http"
import { Server } from "socket.io"
import initializeSocket from "./sockets/socket.js"
import route from "./routes/route.js"
const app = express()

// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
	origin: "*"
}))

// init db
import db from "./dbs/init.mongodb.js"

// init server
const httpServer = createServer(app)

// init socket
const io = new Server(httpServer, {
	cors: {
		origin: "*",
	},
});
initializeSocket(io)

// init routes
route(app)

// handling err

export default httpServer