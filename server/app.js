const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// routes
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user/user');
const roomRouter = require('./routes/room/room');

// configure dotenv
dotenv.config();

// create app
const app = express();

// configure cors
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/room', roomRouter);

// connect to mongodb
mongoose.connect(process.env.MONGO_CONN_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (e) => {
    if(e) return console.error(e);
    console.log("Successfully connected to MongoDB");
});

module.exports = app;
