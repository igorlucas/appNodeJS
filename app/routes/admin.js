const { check, validationResult } = require('express-validator');

module.exports = (application) => {

    application.get('/addnoticia', (req, res) => {
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
    });

    application.post('/noticias/salvar',
    [
        check("titulo", "titulo tem que entre 5 a 100 caracteres").isLength({ min: 4, max: 100 }),
        check("titulo", "titulo n pode ser vazio").not().isEmpty(),
        check("resumo", "resumo tem que entre 5 a 100 caracteres").isLength({ min: 4, max: 100 }),
        check("resumo", "resumo n pode ser vazio").not().isEmpty(),
        check("autor", "autor tem que entre 5 a 100 caracteres").isLength({ min: 4, max: 100 }),
        check("autor", "autor n pode ser vazio").not().isEmpty(),
        check("noticia", "noticia tem que entre 5 a 100 caracteres").isLength({ min: 4, max: 100 }),
        check("noticia", "noticia n pode ser vazio").not().isEmpty(),
        check("data_noticia", "data n pode ser vazio").not().isEmpty()
    ]
        , (req, res) => {

            let noticia = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.render('admin/form_add_noticia.ejs', { validacao: errors.array(), noticia: noticia });
                return;
                //return response.status(422).json({ errors: errors.array() });
            }
            application.app.controllers.admin.noticias_salvar(application, req, res);
        });
}