'use strict';

module.exports = {

    init: function () {},

    getUserBy: function(field, value, callback) {
        var connection = require('./database');
        var query = connection.query( 'SELECT * from users WHERE ' + field + ' = "' + value + '"' );
        query.on('result', function(row) {
            callback(null, row);
        });
    }

};