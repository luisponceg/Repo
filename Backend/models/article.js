'use strict'

var mongoose=require('mongoose');
var schema=mongoose.Schema;

var ArticleSchema = Schema({
    title: String,
    content: String,
    date:{type:Date,default:Date.now},
    image: String
})

module.exports = mongoose.model('Article'.ArticleSchema);
// articles----->mongo db guarda documentos de este tipo y con estructura dntro de la coleccion
