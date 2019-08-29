const Sequelize = require('sequelize');
const db = require('../util/db');



const Todo = db.define('todo_tables', {
    'title': {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})


module.exports = Todo;