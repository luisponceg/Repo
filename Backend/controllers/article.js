'use strict'

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
       return res.status(200).send({
           message: 'Soy la accion SAVE de mi controlador'
       });

   }
};// end controller

module.exports =controller;
