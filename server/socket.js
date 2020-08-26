let io = require('socket.io');

module.exports = (server) => {
    // set server
    io = io(server);

    // set on
    io.on('connection', (socket) => {
        console.log('A user connected to the socket!');

        // on disconnect
        socket.on('disconnect', () => {
            console.log("A user disconnected!");
        });
    });
}