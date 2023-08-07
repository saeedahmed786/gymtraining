const User = require('../models/userModel');
var fs = require('fs');
var bcrypt = require('bcryptjs');
const { jwtSecret } = require('../config/keys');
const jwt = require('jsonwebtoken');


exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    if (users) {
        res.status(200).json(users);
    }
    else {
        res.status(404).json({ errorMessage: 'No user found!' });
    }
}

exports.getUserById = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({ errorMessage: 'No user found!' });
    }
}

exports.signUp = async (req, res) => {
    const ifEmailAlreadyPresent = await User.findOne({ email: req.body.email });
    const ifUsernameAlreadyPresent = await User.findOne({ username: req.body.username });
    if (ifEmailAlreadyPresent) {
        res.status(201).json({ errorMessage: 'Email already exists. Please try another one.' });
    }
    else if (ifUsernameAlreadyPresent) {
        res.status(201).json({ errorMessage: 'Username already exists. Please try another one.' });
    }
    else {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const user = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            username: req.body.username,
            password: hash
        });

        const saveUser = await user.save();
        if (saveUser) {
            res.status(200).json({ successMessage: 'Account created successfuly!. Please Sign in.' });
        } else {
            res.status(400).json({ errorMessage: 'Account not created. Please try again' });
        }
    }
}


exports.login = async (req, res) => {
    const findUser = await User.findOne({
        $or: [{ email: req.body.email }, { username: req.body.email }]
    });

    if (findUser) {
        const checkPassword = bcrypt.compareSync(req.body.password, findUser.password);
        if (checkPassword) {
            const payload = {
                user: {
                    _id: findUser._id,
                    role: findUser.role
                }
            }
            jwt.sign(payload, jwtSecret, (err, token) => {
                if (err) res.status(400).json({ errorMessage: 'Jwt Error' })

                const { _id, fullName, role, username, email, verification } = findUser;
                res.status(200).json({
                    _id,
                    role,
                    fullName,
                    username,
                    email,
                    token,
                    verification,
                    successMessage: 'Logged In Successfully',

                });
            });
        } else {
            res.status(201).json({ errorMessage: 'Incorrect username or password.' })
        }

    } else {
        res.status(201).json({ errorMessage: 'Incorrect username or password.' })
    }
}