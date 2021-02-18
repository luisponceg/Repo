'use strict'
 
var validator = require('validator');
//importamos los módulos que periten eliminarlos arcchivos
var fs = require('fs');
var  path= require('path');
//-----------------------------


var Article = require('../models/article');
var controller ={
    datosCurso: (req,res)=> {
        //http codes para los codigos de respuesta
       //var hola =req.body.hola;
        return res.status(200).send({
            curso: 'Framework js',
            autor: 'Luis Ponce',
            url: 'www.LuisPonce.com'
         //   hola
    
        });       // console.log('Hola mundo');
   
   },

   test: (req,res) => {
       return res.status(200).send({
           message: 'soy la accion test de mi controlador de articulos'
       });
   } ,

   save: (req, res) =>{
       // Recoger datos por post
       var params = req.body; //recoge datos del body
       //console.log(params);
       //Validar datos(validator)
       try{
           var validate_title = !validator.isEmpty(params.title);//si el parametro tiltle del body está vacío
           var validate_content = !validator.isEmpty(params.content);
       }catch(err){
            return res.status(200).send({            
                status : 'error',
                message: 'Faltan datos por enviar'
        });
    }
    
    if(validate_title && validate_content){
        //Crear el objeto a guardar
        var article = new Article();

        //Asignar valores
        article.title= params.title;
        article.content = params.content;
        article.image = null;
        //Guardar el articulo
        
        article.save((err,articleStored)=>{
             if(err||!articleStored){
                 return res .status(404).send({
                     satatus: 'error',
                     message: 'El articulo no se ha guardado !!!'
                 })
             }
              //Devolver una respuesta
        return res.status(200).send({
            //message: 'Soy la accion SAVE de mi controlador'
            status: "succes",
            article: articleStored
        }); 
        });
        
       
       
    }else{
        return res.status(200).send({
            status : 'error',
            message: 'Los datos no son validos'
        });
    }
       
   },//end Save
   //Metodo que saca todos los articulos
   getArticles: (req, res) => {

    var query = Article.find({});

    var last = req.params.last;
    if(last || last != undefined){
        query.limit(5);
    }

    // Find
    query.sort('-_id').exec((err, articles) => {

        if(err){
            return res.status(500).send({
                status: 'error',
                message: 'Error al devolver los articulos !!!'
            });
        }

        if(!articles){
            return res.status(404).send({
                status: 'error',
                message: 'No hay articulos para mostrar !!!'
            });
        }

        return res.status(200).send({
            status: 'success',
            articles
        });

    });
},

   getArticle: (req, res) => {
       //Recoger el id de la url
       var articleID =req.params.id;

       //comprobar que existe
       if(!articleID || articleID == null){
          return res.status(404).send({
            status: 'error',
            message: 'no existe el articulo'
          }) ;
           
       }
       //Buscar el articulo 
       Article.findById(articleID,(err,article) =>{
      
        if (err || !article){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo!!!'
              }) ;
        }
        //Devolverlo en json
        return res.status(404).send({
            status: 'success',
            article: articleUpdated
        });
       
       });
    
   },

   update: (req,res)=>{
       // Recoger el id del articulo que viene de la url
       var articleID = req.params.id;
       //recogerlos dtos que llegan por put
       var params = req.body
       //validar datos
       try{
          var validate_title = !validator.isEmpty(params.title);
          var validate_content = !validator.isEmpty(params.content);
       }catch(err){
           return res.status(200).send({
               status: 'error',
               message: 'Faltan datos por enviar'
           });
        
    }
    
    if(validate_title && validate_content){
      //find and update
      Article.findOneAndUpdate({_id: articleID},params,{new:true},(err,articleUpdated) =>{
        if(err){
            return res.status(500).send({
                status: 'error',
                message: 'Error al actualizar'
            });
        }
        if(!articleUpdated){
          return res.status(404).send({
              status: 'error',
              message: 'No existe el articulo para actualizar'
          });
      }
      return res.status(200).send({
          status: 'success',
          article: articleUpdated
      });
      });
         
    }else{
          
       //devolver respuesta
       return res.status(200).send({
          status: 'error',
          message: 'La validacion no es correcta'
       });


    }
     
  },

    delete: (req,res)=>{
        //recoger el id del articulo
        var articleId = req.params.id;
        // metodo find one and delete
        Article.findOneAndDelete({_id: articleId},(err, articleRemoved) =>{
            if (err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar !!!'
                });
            }
            if(!articleRemoved){                
                return res.status(404).send({
                    status: 'error',
                    message: 'no se borro el articulo, posiblemente no existe !!!'
                });
            }

            return res.status(200).send({
                status: 'succes',
                article: articleRemoved
             });
        });

       

    } ,

    upload: (req, res)=>{
        // configurar el modulo connect multypart routes/articles.js

        // Recoger el fichero de la peticion
        var file_name = 'Imagen no subida......';

        console.log(req.files);
        if(!req.files){
            return res.status(404).send({
              status : 'error',
              message: file_name  
            })    
        }
        //conseguir nombre y la extension del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');
        //*Advertencia en LINUX o MAC
        //var file_split = file_path.split('/');

        // Nombre del erchivo

        var file_name = file_split[2];

        // Extension del archivo

        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        //comprobar la extension, solo imagenes, si es valida borre el fichero
        if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif' ){
            //borrar el archivo subido            
            fs.unlink(file_path,(err)=>{
                return res.status(200).send({
                    status: 'error',
                    message: 'La extension de la imagen no es valida'
                });
            });
        }else{
            //si todo es valido
            var articleId = req.params.id;
            if(articleId){
            //buscar el articulo asignar el nobre de la imagen y actualizarlo

            Article.findOneAndUpdate({_id: articleId}, {image: file_name}, {new:true}, (err, articleUpdated) => {
                if(err || !articleUpdated){
                    return res.status(200).send({
                        status: 'error',
                        message: 'Error al guardar la imagen de articulo !!!'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });
            } 
        }           
       
    },//end upload file

    getImage: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/articles/'+file;

        fs.exists(path_file, (exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: 'La imagen no existe !!!'
                });
            }
        });
    },
   
};// end controller

module.exports =controller;
