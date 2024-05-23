import app from "./src/app.js"

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
    console.log(`Server starts at http://localhost:${PORT}`)
})

process.on("SIGINT", () => {
    server.close( () => {
        console.log("Exit Server Express.")
    })
})