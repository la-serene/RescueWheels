import chatHandler from "./chat.socket.js";
import notificationHandler from "./notification.socket.js";

export default function initializeSocket(io) {
    io.on('connection', (socket) => {
        console.log(`A user with id ${socket.id} connected`);

        chatHandler(socket)
        notificationHandler(socket)

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}