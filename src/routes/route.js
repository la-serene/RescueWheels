import authRoute from "./authRoute.js";

export default function route(app) {
    app.use('api/v1/auth/', authRoute);
}