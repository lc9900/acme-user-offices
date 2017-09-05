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

Office.removeOffice = function(officeId){
    return Office.findOne({
        where: {
            id: officeId
        }
    }).then(office =>{
        return office.setUsers([]);
    }).then(office => {
        return office.destroy();
    })
}

module.exports = Office;
