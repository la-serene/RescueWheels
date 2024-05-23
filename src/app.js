import express from "express"
import 'dotenv/config';
import morgan from "morgan"
import helmet from "helmet"
import route from "./routes/route.js"
import compression from "compression"
const app = express()

// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.urlencoded({ extended: true }));

// init db
import db from "./dbs/init.mongodb.js"

// init routes
route(app)

// handling err

export default app