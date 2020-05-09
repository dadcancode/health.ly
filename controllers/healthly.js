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
    Users.create(req.body, (err, data1) => {
        Logs.find({ owner: data1._id }, (err, data2) => {
            res.render('Home', {
                user: data1,
                logs: data2
            });
        })
    });
});

//Show User Profile
router.get('/user/home', (req, res) => {
    Users.findById(req.body._id, (err, data) => {
        res.redirect(`/healthly/${data._id}/home`);
    });
});

router.get('/:id/home', (req, res) => {
    Users.findById(req.params.id, (err, data) => {
        let user = data;
        console.log('>>>>>>>>>>>>', user._id);
        Logs.find({ owner: user._id }, (err, data) => {
            res.render('Home', {
                user: user,
                logs: data
            });
        });
    });
});

//Edit User Profile
router.get('/:id/editProfile', (req, res) => {
    Users.findById(req.params.id, (err, data) => {
        res.render('EditProfile', {
            user: data
        });
    });
});

//Update User Profile
router.put('/:id', (req, res) => {
    Users.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            avatar: req.body.avatar,
            age: req.body.age,
            goalWeight: req.body.goalWeight
        }
    }, () => {
        res.redirect(`/healthly/${req.params.id}/home`);
    });
});

//Delete User Profile
router.get('/deleteUser/:id', (req, res) => {
    Users.findById(req.params.id, (err, data) => {
        res.render('DeleteProfile', {
            user: data
        });
    });
});

router.delete('/:id', (req, res) => {
    Logs.remove({ owner: req.params.id }, () => {
        Users.findByIdAndRemove(req.params.id, () => {
            res.redirect('/healthly');
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
router.post('/:id/logs', (req, res) => {
    req.body.owner = req.params.id;
    Users.findById(req.params.id, (err, data) => {
        req.body.difference = (req.body.loggedWeight - data.currentWeight);
        req.body.prevWeight = data.currentWeight;
        Logs.create(req.body, (err, data) => {
            let userID = data.owner;
            Users.findByIdAndUpdate(data.owner, { currentWeight: data.loggedWeight }, () => {
                res.redirect(`/healthly/${userID}/home`);
            })
        });
    });
});

//View Log
router.get('/view/:logId', (req, res) => {
    console.log('log viewed')
    Logs.findById(req.params.logId, (err, data) => {
        res.render('ViewLog', {
            log: data
        });
    });
});

////Edit Log
//Show Edit Page
router.get('/edit/log/:logId', (req, res) => {
    Logs.findById(req.params.logId, (err, data) => {
        res.render('EditLog', {
            log: data
        });
    });
});
//Update Log
router.put('/update/:logId', (req, res) => {
    console.log('>>>>>>>>>>> went thru put route')
    let update = req.body;
    console.log('>>>>>>>>>> req.body:', req.body)
    Logs.findById(req.params.logId, (err, data) => {
        update.difference = update.loggedWeight - data.prevWeight;
        Logs.findByIdAndUpdate(data._id, {
            $set: {
                title: update.title,
                loggedWeight: update.loggedWeight,
                notes: update.notes,
                difference: update.difference
            }
        }, (err, data) => {
            Logs.findById(req.params.logId, (err, data) => {
                console.log('>>>>>>>>> data.owner:', data.owner)
                res.redirect(`/healthly/${data.owner}/home`)
            })
        });
    });
});

//Delete Log
router.delete('/deleteLog/:logId', (req, res) => {
    Logs.findById(req.params.logId, (err, data) => {
        let userId = data.owner
        Users.findByIdAndUpdate(userId, { currentWeight: data.prevWeight }, () => {
            Logs.findByIdAndRemove(req.params.logId, (err, data) => {
                res.redirect(`/healthly/${userId}/home`);
            });
        });
    });
});


module.exports = router;