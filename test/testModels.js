const db = require('../models');
const User = require('../models/User');
const Office = require('../models/Office');

// db.syncAndSeed()
//     // Test out removing all users with project association
//     .then(() => {
//         return Office.findOne({
//             where: {
//                 id: 1
//             }
//         }).then(office => {
//             return office.setUsers([]); // Easy way to remove all users associated with this office
//         }).then(result => {
//             console.log("What does office.setUser return?");
//             return console.log(result); // result is the office sequelize object itself
//         })
//     })
//     .catch(err => {
//         throw err;
//     })


// db.syncAndSeed()
//     .then(() => {
//         return User.extractAllUsers()
//     }).then(result => {
//         result.forEach((user) => {
//             console.log(user.office);
//         })
//     })
//     .catch(err => {
//         throw err;
//     })

// db.syncAndSeed()
//     .then(() => {
//         return Office.extractAllOffices()
//     }).then(result => {
//         result.forEach((office) => {
//             console.log(office.users);
//         })
//     })
//     .catch(err => {
//         throw err;
//     })


// Testing User.setUserOffice
// db.syncAndSeed()
//     .then(() => {
//         return User.findOne({
//             where: {
//                 name: 'Storm'
//             }
//         })
//     }).then( user => {
//         return User.setUserOffice(user.id, 1); // Seed data only contains one office
//     }).then( result => {
//         console.log(result); // This is the result of update, and it return [1], so it's an array container office id.
//     })
//     .catch(err => {
//         throw err;
//     })

// Testing User.removeUser
// db.syncAndSeed()
//     // Test out removing all users with project association
//     .then(() => {
//         return User.removeUser(2);
//     })
//     .then(result => {
//         console.log(result); // returned 1. I am thinking it's the count of users deleted
//     })
//     .catch(err => {
//         throw err;
//     })

// Tesitng User.updateUserOffice(userId, officeId)
db.syncAndSeed()
    .then(() => {
        return User.updateUserOffice(1, 0);
    })
    .catch(err => {
        throw err;
    })
