const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('/models/User');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res, next) => {
    // get email
    const email = req.body.email;
    // get raw password
    const rawPassword = req.body.password;

    // if any of the parameters are missing, return
    if (!email || !rawPassword) {
        return accessDenied(res, "Incorrect email or password!");
    }

    // get user object from mongoose
    const user = await User.findOne({email: email});

    // if user doesn't exist, *wrong credentials*
    if (!user) {
        return accessDenied(res, "Incorrect email or password!");
    }

    // compare hashed & raw password
    if (!(await bcrypt.compare(rawPassword, user.password))) {
        // no! *wrong credentials*
        return accessDenied(res, "Incorrect email or password!");
    }

    /* user is authenticated! */

    // sign new JWT - creates new token based on the user
    const token = await jwt.sign(user.toJSON(), process.env.JWT_SECRET);

    // set request http only cookie (prevents XSS attacks) ------------------------ X days * 86400 seconds per day
    res.cookie('token', token, {httpOnly: true, secure: true, maxAge: 1 * 86400});

    // send OK status
    res.status(200);
    res.send({message: "Success", user: user._id});
});

router.post('/logout', function (req, res, next) {
    // clear JWT cookie
    res.clearCookie("token");

    // send OK status
    res.status(200).send("Success");
});

router.post('/create', async (req, res, next) => {
    // get email
    const email = req.body.email;
    // get username
    const username = req.body.username;
    // get raw password
    const rawPassword = req.body.password;

    // if any of the required fields are missing, then...return!
    if (!username || !email || !rawPassword) {
        return badRequest(res, "Missing data!");
    }

    // does a user with that email or username already exist?
    const alreadyExists = await User.findOne({
        $or: [
            {email: email},
            {username: username}
        ]
    });

    // yup, so return
    if (alreadyExists) {
        return badRequest(res, "A user with that email or username already exists!");
    }

    // hash password to create a new safe-for-storage one!
    const hashedPassword = await bcrypt.hash(rawPassword, await bcrypt.genSalt());

    // create new user & save in DB!
    await User.create({email: email, username: username, password: hashedPassword});

    // get
    res.status(201).send("Success");
});

const accessDenied = (response, message) => {
    return response.status(401).send({message: message});
}

const badRequest = (response, message) => {
    return response.status(400).send({message: message});
}

const created = (response, message) => {
    return response.status(201).send({message: message});
}

async function auth(req, res, next) {
    // get JWT token
    const token = req.cookies.token;

    // if no token, err
    if (!token) return accessDenied(res, "Invalid token!");

    // verify
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        // send denied access
        if(error) return accessDenied(res, "Invalid token!");

        // get user from token and assign to request
        req.user = user;

        // call next
        next();
    });
}

module.exports = router;
