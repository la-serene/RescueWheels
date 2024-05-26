import httpServer from "./src/app.js"

const PORT = process.env.HTTP_SERVER_PORT

httpServer.listen(PORT, () => {
    console.log(`Server starts at http://localhost:${PORT}`)
})

process.on("SIGINT", () => {
    httpServer.close( () => {
        console.log("Exit Server Express.")
    })
})