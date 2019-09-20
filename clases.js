class Coche {
    costructor(modelo,velocidad,antiguedad){
        this.modelo = '';
        this.velocidad = '';
        this.antiguedad = '';

    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }
    reducirVelocidad(){
        this.velocidad += 1;
    }

}
var coche1 = new Coche('BMW',200,2017);
var coche2 = new Coche('Audi',200,2017);
var coche3 = new Coche('Mercedes',200,2017);
var coche4 = new Coche('Renault',200,2017);
console.log(coche1);
// coche1.aumentarVelocidad();
// coche1.aumentarVelocidad();
// coche1.aumentarVelocidad();
// coche1.aumentarVelocidad();
console.log(coche1);