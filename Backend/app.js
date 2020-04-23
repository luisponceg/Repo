'use strict'
// cargar modulos de node para crear servidor
var express=require('express');
var bodyParser=require('body-parser');

//Ejecutar express (http)
var app = express();
//Cargar Ficheros Rutas
var article_routes = require('./routes/article');
//MiddLewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//CORS para permitir peticiones desde el front-end
//Añadir prefijo para rutas/cargar rutas
app.use('/',article_routes);
//ruta o metodo de prueba
/*
app.get('/probando',(req,res)=>{
    //http codes para los codigos de respuesta
   var hola =req.body.hola;
    return res.status(200).send({
        curso: 'Framework js',
        autor: 'Luis Ponce',
        url: 'www.LuisPonce.com',
        hola

    });
   // console.log('Hola mundo');
});
*/
//Exportar el módulo
module.exports=app;