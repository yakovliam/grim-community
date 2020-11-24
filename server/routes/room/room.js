const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Room = require('../../models/Room');

/**
 * Required params:
 * {
 *     "name": "nameHere"
 * }
 */
router.post('/create', auth, async (req, res, next) => {
    // get user
    const user = req.user;

    // if no user, return
    if (!user) return accessDenied(res, "Invalid user!");

    // get name
    const name = req.body.name;

    // if params not complete, return
    if (!name) return badRequest(res, "Missing data!");

    // create new room object
    await Room.create({
        owner: user._id,
        name: name
    }, (error, room) => {
        // don't do anything w/ error right now

        // if error, return...
        if (error) return badRequest(res, "There was an error creating the room!");

        // if none, return also!
        return created(res, {message: "Created!", room: room});
    });
});

const accessDenied = (response, message) => {
    return response.status(401).send({message: message});
}

const badRequest = (response, message) => {
    return response.status(400).send({message: message});
}

const created = (response, data) => {
    return response.status(201).send(data);
}

async function auth(req, res, next) {
    // get JWT token
    const token = req.cookies.token;

    // if no token, err
    if (!token) return err(res, "Invalid token!");

    // verify
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        // send denied access
        if (error) return err(res, "Invalid token!");

        // get user from token and assign to request
        req.user = user;

        // call next
        next();
    });
}

module.exports = router;
