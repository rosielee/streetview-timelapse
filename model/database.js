'use strict';

var settings = require('../conf/settings');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: settings.MYSQL_HOST,
    user: settings.MYSQL_USER,
    password: settings.MYSQL_PASS,
    database: settings.MYSQL_DB
    // port: 3306,
});

connection.connect();

module.exports = connection;

// connection.end(); // should this go somewhere?