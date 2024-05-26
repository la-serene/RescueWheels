export default function chatHandler(socket) {
  // Handle incoming chat messages
  socket.on("sendMessage", (message) => {
    // Broadcast the message
    socket.to(message.receiverId).emit("receiveMessage", {
      senderId: message.senderId,
      receiverId: message.receiverId,
      text: message.text,
    });
  });
}
