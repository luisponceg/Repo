'use strict'

var mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/api_rest_blog',{useUnifiedTopology: true,useNewUrlParser:true,useCreateIndex: true})
.then(()=> {
    console.log('La conexion a la base de datos se ha realizado correcta!!!');
});