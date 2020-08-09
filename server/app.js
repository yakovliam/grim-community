/* express */
const express = new require('express');
// const path = require('path');
const cookieParser = new require('cookie-parser');
const logger = new require('morgan');

const indexRouter = new require('./routes/index');

const app = new express();

// create server from express
const server = new require('http').Server(app);

/* socket io */

// socket io on port 3000
const io = new require('socket.io')(server);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;

/* Socket */
io.on('connection', (socket) => {

    // get data
    const data = socket.request;

    // get username
    const username = data.username;

    // respond to all clients with data
    socket.emit('connections', {"username": username})
});

io.on('message', (socket) => {

    // get data
    const data = socket.request;

    // get username
    const username = data.username;
    // get message
    const message = data.message;

    // respond to all clients with data
    socket.emit('messages', {"username": username, "message": message})
});

