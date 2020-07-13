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
        return res.status(200).send({
            //message: 'Soy la accion SAVE de mi controlador'
            article: params
        });
    }else{
        return res.status(200).send({
            status : 'error',
            message: 'Los datos no son validos'
           
    }
       //Crear el objeto a guardar
       //Asignar valores
       //Devolver una respuesta
      

   }//end Save
};// end controller

module.exports =controller;
