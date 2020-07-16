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
       
   }//end Save
};// end controller

module.exports =controller;
