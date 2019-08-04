module.exports.index = (application, request, response) => {
    //res.send(result);
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getLastNoticias((error, result) => {
        console.log(result);
        response.render('home/index.ejs',{ noticias: result });
    });

}