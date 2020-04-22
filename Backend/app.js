'use strict'

var mongoose= require('mongoose')
 
mongoose.connect('momgodb7/localhost:27017/api_rest_blog',{userNewUrlParser:true}).then(()=>{
console.log('La consola de datos se ha realizado bien !!')
})