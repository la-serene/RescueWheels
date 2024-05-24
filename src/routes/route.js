import authRoute from "./authRoute.js"
import userRoute from "./userRoute.js"
import providerRoute from "./providerRoute.js"

export default function route(app) {
    app.use('/', authRoute)
    app.use('/', userRoute)
    app.use('/', providerRoute)
}