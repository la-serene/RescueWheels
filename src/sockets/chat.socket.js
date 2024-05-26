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

    sendMessage(message).then()
  })
}
