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
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');//permite que cualquier cliente realice peticiones ajax
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//Añadir prefijo para rutas/cargar rutas
app.use('/api',article_routes);
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