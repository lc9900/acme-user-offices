const db = require('./conn.js');
const Sequelize = db.Sequelize

module.exports = User;

const User = db.define('user', {
    name: Sequelize.STRING
})
