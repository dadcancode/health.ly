const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');
const Logs = require('../models/logs.js');

//routes
//Login
router.get('/', (req, res) => {
    Users.find({}, (err, data) => {
        res.render('Login', {
            users: data
        });
    });
});

//New User
router.get('/new/user', (req, res) => {
    res.render('NewUser');
});

//Create User
router.post('/users', (req, res) => {
    req.body.currentWeight = req.body.startWeight;
    Users.create(req.body, (err, data) => {
        res.render('Home', {
            user: data
        });
    });
});

//Show User Profile
router.get('/user/home', (req, res) => {
    Users.findById(req.body._id, (err, data) => {
        res.redirect(`/healthly/user/${data._id}/home`);
    });
});

router.get('/user/:id/home', (req, res) => {
    Users.findById(req.params.id, (err, data) => {
        res.render('Home', {
            user: data
        });
    });
});

//New Log
router.get('/:id/new/log', (req, res) => {
    console.log('route')
    Users.findById(req.params.id, (err, data) => {
        res.render('NewLog', {
            user: data
        });
    });
});

//Create Log
router.put('/:id/logs', (req, res) => {
    req.body.createdAt = new Date();
    Users.findByIdAndUpdate(req.params.id, {$push: {logs: req.body}}, (err, data) => {
        res.redirect(`/healthly/user/${req.params.id}/home`);
    });
});

//View Log
router.get('/:id/view/:logIndex', (req, res) => {
    Users.findById(req.params.id, (err, data) => {
        res.render('ViewLog', {
            user: data,
            log: data.logs[req.params.logIndex]
        });
    });
});


module.exports = router;