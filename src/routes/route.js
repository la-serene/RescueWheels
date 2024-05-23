import authRoute from "./authRoute.js"

export default function route(app) {
    app.use('/', authRoute)
}