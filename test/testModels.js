const db = require('../models');
const User = require('../models/User');
const Office = require('../models/Office');

db.syncAndSeed()
    .catch(err => {
        throw err;
    })
