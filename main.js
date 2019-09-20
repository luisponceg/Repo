document.addEventListener('DOMContentLoaded', () => {

     alert("Hello World!");
     //console.log('Hola Mundo');
     var nombre = "luis ponce";
     var altura = 170;
     //var concat = nombre + " " +altura;   
    // /*document.write(concat);*/
    
    
  
    //  if(altura > 190){
    //      datos.innerHTML += 'Eres una persona alta </h1>';
    //  }else{
    //      datos.innerHTML +='eres chaparro </h1>';
    //  }

    //  for(var i=2000;i<=2020;i++){
    //      datos.innerHTML +='<h2>Estamos en el año'+i;
    //  }
    function MuestraMiNombre(nombre,altura){
        var misDatos = 
         `<h1> Soy caja de datos</h1>
         <h2>Mi nombre es: ${nombre}</h2>
         <h3>Mido: ${altura} cm</h3>`;
         return misDatos;
    }

    function imprimir(){
        var datos = document.getElementById("datos");
        datos.innerHTML= MuestraMiNombre("Luis Ponce",180);
    }
   imprimir();
   var nombres = ['Luis','Alberto','Luigi'];

   document.write('<h1>Listado de nombres</h1>');
//    for(i = 0; i < nombres.length; i++){
//     document.write(nombres[i]+ '<br/>');
//    }

nombres.forEach((nombre)=> {
    document.write(nombre+ '<br/>');
    var coche ={
        modelo: 'Mercedes Clase A',
        maxima: 500,
        antiguedad: 2020,
        mostrarDatos(){
            console.log(this.modelo,this.maxima,this.antiguedad)
        },
        propiedad1: "valor aleatorio"
    };
document.write("<h2>" + coche.modelo+ "</h2>");
coche.mostrarDatos();
console.log(coche);


});
 var saludar = new Promise((resolve, reject)=>{
     setTimeout(()=>{
         //let saludo = "Hola soy un saludo";
         let saludo = false;
         if (saludo){
             resolve(saludo);
         }else{
             reject('No hay saludo disponible');
         }
     },2000)
 })

saludar.then(resultado => {
    alert(resultado);
})
.catch(err=> {
    alert(err);

});


});
