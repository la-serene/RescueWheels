

export default function initializeSocket(io) {
    io.on('connection', (socket) => {
        console.log(`A user with id ${socket.id} connected`);

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}