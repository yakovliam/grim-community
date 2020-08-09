/* express */
const express = new require('express');
// const path = require('path');
const cookieParser = new require('cookie-parser');
const logger = new require('morgan');
const cors = new require('cors');

const indexRouter = new require('./routes/index');

const app = new express();

// create server from express
const server = new require('http').Server(app);

/* socket io */

// socket io!
const io = new require('socket.io')(server);

app.use(cors({credentials: true, origin: 'http://localhost:8080'}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// exports
module.exports = app;

let connectionCounter = 0;

/* Socket */
io.on('connection', (socket) => {

    socket.on('connect', function () {
        connectionCounter++;
    });
    socket.on('disconnect', function () {
        connectionCounter--;
    });

    socket.on('join', (data) => {
        io.emit('connections', {username: data.username, totalCount: connectionCounter});
    });

    socket.on('message', (data) => {

        // get username
        const username = data.username;
        // get message
        const message = data.message;

        // respond to all clients with data
        io.emit('messages', {"username": username, "message": message})
    });
});
// listen 3000
server.listen(3000, () => {
    console.log("Starting server!");
});

