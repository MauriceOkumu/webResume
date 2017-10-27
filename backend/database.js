const mysql = require('mysql');
 const connection = mysql.createConnection({
 	host: 'localhost',
 	user: 'websiteData',
 	password: '',
 	database: 'website'
 });

 connection.conect()

 connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
 	if (err) {
 		throw err;
 	}
 	console.log('The solution is : =>', rows[0].solution);
 });

 module.exports = connection;