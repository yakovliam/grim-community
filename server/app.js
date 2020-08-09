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

/*
socket_id: {
    username: 'username'
}
 */
let users = {};

/* Socket */

io.on('connection', (socket) => {

    // when the client joins the actual server
    socket.on('join', (data) => {
        // add object to users
        users[socket.id] = {username: data.username};

        io.emit('connections', {username: data.username, totalCount: Object.keys(users).length});
    });

    // when the client sends a message
    socket.on('message', (data) => {
        // get user data
        const username = users[socket.id].username;

        // get message
        const message = data.message;

        // respond to all clients with data
        io.emit('messages', {"username": username, "message": message})
    });

    // when the client disconnects (also acts as "leave" server)
    socket.on('disconnect', () => {
        // get user data
        const username = users[socket.id];

        // remove user
        delete users[socket.id];

        // emit to all clients updating that a user left
        io.emit('leave', {"username": username, "totalCount": Object.keys(users).length})
    });
});


// listen 3000
server.listen(3000, () => {
    console.log("Starting server!");
});

