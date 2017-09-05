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

User.removeUser = function(userId){
    return User.destroy({
        where: {
            id: userId
        }
    });
};

User.updateUserOffice = function(userId, officeId){
    if(officeId === 0) officeId = null;
    return User.update({
        officeId: officeId
    }, {
        where: {
            id: userId
        }
    });
};


module.exports = User;
