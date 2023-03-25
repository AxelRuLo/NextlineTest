const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.HOSTDB,
    user: process.env.USERDATABASE,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: process.env.PORTDB
});

connection.connect((err) => {
    if (err) throw err;
    console.log("success connection");

});


module.exports = connection;