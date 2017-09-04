const db = require('./conn.js');
const Sequelize = db.Sequelize;



const Office = db.define('office', {
    name: Sequelize.STRING,
    lat: Sequelize.FLOAT,
    lng: Sequelize.FLOAT
});

Office.extractAllOffices = function() {
    return Office.findAll({
        include: [db.models.user]
    })
}

module.exports = Office;
