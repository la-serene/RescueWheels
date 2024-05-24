import authRoute from "./authRoute.js"
import userRoute from "./userRoute.js"

export default function route(app) {
    app.use('/', authRoute)
    app.use('/', userRoute)
}