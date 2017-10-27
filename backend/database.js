const mysql = require('mysql');
 const connection = mysql.createConnection({
 	host: 'localhost',
 	user: 'root',
 	password: '',
 	database: 'website'
 });


 module.exports = connection;