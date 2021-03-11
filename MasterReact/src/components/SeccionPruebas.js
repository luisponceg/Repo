import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';


class SeccionPruebas extends Component {

    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola, soy {nombre}</h2>
                <h3>Tengo {edad} años</h3>
            </div>

        );

        return presentacion;
    }

    render() {
        var nombre = "Luis Ponce";
        return (
            <section id="content">
                <h2 class="subheader">Ultimos articulos</h2>
                <p>
                    Bienvenido al master de react
                </p>
                <h2 class="subheader">Funciones y JSX basico</h2>
                {this.HolaMundo(nombre, 33)}
                <h2 class="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                    <Peliculas />
                </section>
            </section>

        );

    }

}

export default SeccionPruebas;