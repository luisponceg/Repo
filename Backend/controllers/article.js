'use strict'
 
var validator = require('validator');
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

    delete: (req,res) =>{
        return res.status(200).send({
            status: 'error',
            message: 'La validacion no es correcta'
         });

    } ,
   
};// end controller

module.exports =controller;
