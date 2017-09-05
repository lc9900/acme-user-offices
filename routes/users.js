const router = require('express').Router();
const User = require('../models/User');
const utils = require('../utils');

module.exports = router;

router.get('/', (req, res, next) => {
    return User.extractAllUsers()
                .then(users => {
                    res.json(users);
                })
                .catch(next);
});

router.delete('/:id', (req, res, next) => {
    var userId = parseInt(req.params.id);
    return User.removeUser(userId)
                .then(() => {
                    res.send('User removed');
                })
                .catch(next);

});

// Assigning an office
router.put('/:id', (req, res, next) => {
    var userId = parseInt(req.params.id);
    utils.inform(userId);
    var officeId = parseInt(req.body.officeId);
    utils.inform(officeId);
    return User.updateUserOffice(userId, officeId)
            .then(() => {
                res.send('Office set for user on office ' + officeId);
            })
            .catch(err => { throw err; });
});

router.post('/', (req, res, next) => {
    return User.create({name: req.body.name})
                .then(() => {
                    res.send('User created');
                })
                .catch(next);
})
