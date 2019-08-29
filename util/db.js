const Sequelize = require('sequelize');
require('dotenv').config();

const db = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;




const sequelize  = new Sequelize(db, username, password , {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('connected');
}).catch((err) => {
    console.log('ss');
})

module.exports = sequelize;