import React, { Component } from 'react';
import MiComponente from './MiComponente';



class SeccionPruebas extends Component {

    contador = 0;
    constructor(props){
        super(props);

        this.state = {
            contador : 0
        };
    }

    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola, soy {nombre}</h2>
                <h3>Tengo {edad} años</h3>
            </div>

        );

        return presentacion;
    }

    sumar = (e) => {
       //this.contador+1;
       //this.state.contador = +1;
       this.setState({
           contador: (this.state.contador +1 )
       });
    }
    restar = (e) =>{
        this.setState({
            contador: (this.state.contador -1 )
        });

    }

    render() {
        var nombre = "Luis Ponce";
        return (
            <section id="content">
                <h2 className="subheader">Ultimos articulos</h2>
                <p>
                    Bienvenido al master de react
                </p>
                <h2 className="subheader">Funciones y JSX basico</h2>
                {this.HolaMundo(nombre, 33)}
                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                    <MiComponente />
                    
                </section>
                <h2 className="subheader">Estados</h2>
                <p>
                   Contado: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}/>
                    <input type="button" value="Restar" onClick={this.restar}/>
                </p>
            </section>

        );

    }

}

export default SeccionPruebas;