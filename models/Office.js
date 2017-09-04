const db = require('./conn.js');
const Sequelize = db.Sequelize;

module.exports = Office;

const office = db.define('office', {
    name: Sequelize.STRING,
    lat: Sequelize.FLOAT,
    lng: Sequelize.FLOAT
})
