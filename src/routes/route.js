import authRoute from "./authRoute.js"
import userRoute from "./userRoute.js"
import serviceRoute from "./serviceRoute.js"

export default function route(app) {
    app.use('/', authRoute)
    app.use('/', userRoute)
    app.use('/', serviceRoute)
}