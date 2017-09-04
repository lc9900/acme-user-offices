const db = require('./conn.js');
const User = require('./User');
const Office = require('./Office');
const utils = require('../utils');

User.belongsTo(Office);
Office.hasMany(User);

function syncAndSeed (){
    return db.sync({force:true})
            .then(() => {
                utils.inform('Database Synced');
                return Office.create({
                            name: '2 Times Square, New York, NY 10036, USA',
                            lat: 40.7594456,
                            lng: -73.9847779
                        }).then(() => {
                            return Promise.all([
                                    User.create({ name: 'Wolverine', officeId: 1}),
                                    User.create({ name: 'Cyclops', officeId: 1}),
                                    User.create({ name: 'Storm'}),
                                ])
                        }).then(() => {
                            return utils.inform('Database Seeded');
                        }).catch( err => { throw err });
            })
}

module.exports = {
    syncAndSeed
}
