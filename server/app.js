const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

// routes
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user/user');

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

module.exports = app;
