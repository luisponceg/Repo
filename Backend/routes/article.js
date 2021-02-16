'use strict'

var express = require ('express');
var ArticleController = require('../controllers/article');

var router= express.Router();

//variables para la carga de archivos
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/articles'});
//Rutas de prueba
router.post('/datos-curso',ArticleController.datosCurso);
router.get('/test-de-controlador',ArticleController.test);
// Rutas para articulos
router.post('/save',ArticleController.save);
router.get('/articles/:last?',ArticleController.getArticles);
router.get('/article/:id',ArticleController.getArticle);
router.put('/article/:id',ArticleController.update);
router.delete('/article/:id',ArticleController.delete);
router.post('/upload-image/:id',md_upoad,ArticleController.upload);


module.exports = router;