const mysql = require('mysql');
// create coonection

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi'
});

conn.connect ((err) => {
    if (err) throw err;
    console.log('Database connected');
})

module.exports = conn
