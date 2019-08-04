function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    var queryString = "select * from noticias";
    this._connection.query(queryString, callback);
};

NoticiasDAO.prototype.getLastNoticias = function (callback) {
    var queryString = "select * from noticias order by data_criacao desc limit 5";
    this._connection.query(queryString, callback);
};

NoticiasDAO.prototype.getNoticia = function (id, callback) {
    var queryString = `select * from noticias where id = ${id}`;
    this._connection.query(queryString, callback);
};

NoticiasDAO.prototype.postNoticia = function (noticia, callback) {
    var queryString = `insert into noticias set ?`;
    this._connection.query(queryString, noticia, callback);
};

module.exports = function () {
    return NoticiasDAO;
}