import chatHandler from "./chat.socket.js"
import feedbackHandler from "./feedback.socket.js"

export default function initializeSocket(io) {
    io.use((socket, next) => {
        const userId = socket.handshake.query.userId
        if (!userId) {
            return next(new Error("Invalid userId"))
        }
        else {
            socket.userId = socket.handshake.query.userId
            next()
        }
    })

    io.on('connection', (socket) => {
        socket.join(socket.userId)
        console.log(`A user with id ${socket.userId} connected`)

        socket.broadcast.emit("userConnected", {
            userID: socket.id
        })

        chatHandler(socket)
        feedbackHandler(socket)

        socket.on('disconnect', () => {
            console.log('user disconnected')
        })
    })
}