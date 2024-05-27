import {saveMessage} from "../controllers/chatController.js";

export default function chatHandler(socket) {
    // Handle incoming chat messages
    socket.on("sendMessage", (message) => {
        const {
            senderId, receiverId, text
        } = message

        // Broadcast the message
        socket.to(message.receiverId).emit("receiveMessage", {
            senderId,
            receiverId,
            text
        })

        saveMessage(message).then()
    })
}