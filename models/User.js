const db = require('./conn.js');
const Sequelize = db.Sequelize

const User = db.define('user', {
    name: Sequelize.STRING
})

module.exports = User;
