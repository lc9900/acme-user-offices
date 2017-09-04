const Sequelize = require('sequelize');
const dbConn = process.env.DATABASE_URL || 'postgres://localhost/acmeuseroffices_db';
const db = new Sequelize(dbConn);

module.exports = db;
