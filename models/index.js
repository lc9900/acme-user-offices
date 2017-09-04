const db = require('./conn.js');
const User = require('./User');
const Office = require('./Office');

User.belongsTo(Office);
Office.hasMany(User);
