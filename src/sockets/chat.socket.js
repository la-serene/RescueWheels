export default function chatHandler(socket) {
  // Handle incoming chat messages
  socket.on("sendMessage", (message) => {
    // Broadcast the message
    socket.emit("receiveMessage", {
      text: message.text,
    });
  });
}
