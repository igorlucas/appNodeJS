module.exports.noticias = (application, request, response) => {
    //res.send(result);
    var connection = application.config.dbConnection();
    var noticiaModel = new application.app.models.NoticiasDAO(connection);
    noticiaModel.getNoticias((error, result) => {
        response.render('noticias/noticias.ejs', { noticias: result });
    });
}

module.exports.noticia = (application, request, response) => {
    //res.send(result);
    var connection = application.config.dbConnection();
    var noticiaModel = new application.app.models.NoticiasDAO(connection);
    var id_noticia = request.query.id;
    noticiaModel.getNoticia(id_noticia, (error, result) => {
        response.render('noticias/noticia.ejs', { noticias: result });
    });
}