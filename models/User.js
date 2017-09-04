const db = require('./conn.js');
const Sequelize = db.Sequelize

const User = db.define('user', {
    name: Sequelize.STRING
})

User.extractAllUsers = function() {
    return User.findAll({
        include: [db.models.office]
    });
};
module.exports = User;
