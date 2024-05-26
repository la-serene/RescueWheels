import feedbackRoute from "./feedbackRoute.js"
import authRoute from "./authRoute.js"
import userRoute from "./userRoute.js"
import serviceRoute from "./serviceRoute.js"
import providerRoute from "./providerRoute.js"
import chatRoute from "./chatRoute.js"

export default function route(app) {
  app.use("/", authRoute)
  app.use("/", userRoute)
  app.use("/", serviceRoute)
  app.use("/", feedbackRoute)
  app.use("/provider", providerRoute)
  app.use("/message", chatRoute)
}
