var mysql = require('mysql');

var conMySql = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'igor@mysql',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    return conMySql;
}