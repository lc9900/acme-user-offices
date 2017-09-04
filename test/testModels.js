const db = require('../models');
const User = require('../models/User');
const Office = require('../models/Office');

db.syncAndSeed()
    // Test out removing all users with project association
    .then(() => {
        return Office.findOne({
            where: {
                id: 1
            }
        }).then(office => {
            return office.setUsers([]); // Easy way to remove all users associated with this office
        }).then(result => {
            console.log("What does office.setUser return?");
            return console.log(result); // result is the office sequelize object itself
        })
    })
    .catch(err => {
        throw err;
    })
