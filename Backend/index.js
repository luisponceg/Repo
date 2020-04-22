'use strict'

var mongoose = require('mongoose');
var app=require('./app');
var port = 3900 //puerto que uso para la plicacion
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify',false)
mongoose.connect('mongodb://localhost:27017/api_rest_blog',{useUnifiedTopology: true,useNewUrlParser:true,useCreateIndex: true})
.then(()=> {
    console.log('La conexion a la base de datos se ha realizado bien!!!');

    //Crear servidor y escuchar peticiones http
    app.listener(port,() =>{
      console.log('Servidor corriendo en http://localhost'+port)
    });
});