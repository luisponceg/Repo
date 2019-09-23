
document.addEventListener('DOMContentLoaded', () => {
    class Coche{
        costructor(modelo, velocidad, antiguedad){
            
            this.modelo = modelo;
            this.velocidad = velocidad;
            this.antiguedad = antiguedad;
    
        }
        get   velocidad  ()   {
            return this.velocidad();}

        aumentarVelocidad(){
            
            this.velocidad += 1;
        }
        reducirVelocidad(){
           
            this.velocidad += 1;
        }
    
    }
    
    
    let coche1 = new Coche('BMW',200,2017);
    let  coche2 = new Coche('Audi',200,2017);
    let coche3 = new Coche('Mercedes',200,2017);
    let coche4 = new Coche('Renault',200,2017);
    
    console.log(coche1.velocidad);
    document.write("<h1>Velocidad:"+coche1.velocidad+"<h1>")
    //coche1.aumentarVelocidad();
    // coche1.aumentarVelocidad();
    // coche1.aumentarVelocidad();z
    // coche1.aumentarVelocidad();
    
})




