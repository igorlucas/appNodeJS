

module.exports.formulario_inclusao_noticia = (application, request, response) => {
    response.render('admin/form_add_noticia.ejs', { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = (application, request, response) => {
    
    let noticia = request.body;
    let conn = application.config.dbConnection();
    let noticiasModel = new application.app.models.NoticiasDAO(conn);
    
    noticiasModel.postNoticia(noticia, (error, result) => {
        response.redirect('/noticias');
    });
}