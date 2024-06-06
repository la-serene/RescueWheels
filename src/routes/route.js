import authRoute from "./authRoute.js"
import providerAuthRoute from "./providerAuthRoute.js"
import userRoute from "./userRoute.js"
import serviceRoute from "./serviceRoute.js"
import feedbackRoute from "./feedbackRoute.js"
import providerRoute from "./providerRoute.js"
import pendingServiceRoute from "./pendingServiceRoute.js"
import chatRoute from "./chatRoute.js"

export default function route(app) {
  app.use("/", authRoute)
  app.use("/", providerAuthRoute)
  app.use("/", userRoute)
  app.use("/", serviceRoute)
  app.use("/", feedbackRoute)
  app.use("/", providerRoute)
  app.use("/", pendingServiceRoute)
  app.use("/", chatRoute)
}
