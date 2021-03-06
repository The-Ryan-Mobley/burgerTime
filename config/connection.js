const sql = require('mysql');
require('dotenv').config();
if (process.env.JAWSDB_URL) {
    connection = sql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = sql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: process.env.SQL_PW.toString(),
        database: 'burgers_db',
    });
};

connection.connect((err) => {
    if (err) throw err;
});
module.exports = connection;