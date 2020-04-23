'use strict'

var express = require ('express');
var ArticleController = require('../controllers/article');

var router= express.Router();

router.get('/datos-curso',ArticleController.test);
router.post('/test-de-controlador',ArticleController.datosCurso);

module.exports = router;