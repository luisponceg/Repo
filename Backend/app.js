'use strict'
// cargar modulos de node para crear servidor
var express=require('express');
var bodyParser=require('body-parser');

//Ejecutar express (http)
var app = express();
//Cargar Ficheros Rutas
//MiddLewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//CORS para permitir peticiones desde el front-end
//Añadir prefijo para rutas
//ruta o metodo de prueba
app.get('/probando',(req,res)=>{
   console.log('Hola mundo');
});
//Exportar el módulo
module.exports=app;