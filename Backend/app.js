'use strict'
// cargar modulos de node para crear servidor
var expres=require('express');
var bodyPerse=require('body-parser');

//Ejecutar express (http)
var app = express();
//Cargar Ficheros Rutas
//MiddLewares
app.use(bodyParser.urlencoded({extended:false}))
//CORS para permitir peticiones desde el front-end
//Exportar el módulo
module.exports=app;