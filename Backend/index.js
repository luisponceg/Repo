'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify',false)
mongoose.connect('mongodb://localhost:27017/api_rest_blog',{useUnifiedTopology: true,useNewUrlParser:true,useCreateIndex: true})
.then(()=> {
    console.log('La conexion a la base de datos se ha realizado correctamente!!!');
});