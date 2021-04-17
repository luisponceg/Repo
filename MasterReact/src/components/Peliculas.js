import React, { Component } from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {
    state = {
        peliculas: [
            {titulo: 'Batman vs Superman', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomCYmuKN91yi6j1ESMivAhM9cgBqbhuSKnw&usqp=CAU'},
            {titulo: 'Gran Torino', image: 'data:image/jpeg;base64,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'},
            {titulo: 'Totoro', image: 'data:image/jpeg;base64,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'}

        ],
      
        nombre: 'Cine de Autor',
        favorita: {}
    };

    cambiarTitulo = () => {
        var {peliculas} = this.state;
        var random = Math.floor(Math.random()*3);
        alert(random);
        peliculas[random].titulo ="Batman Begins"+random;

        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula,indice) => {
        console.log("FAVORITA MARCADA");
        console.log(pelicula,indice);
        this.setState({
            favorita:pelicula
        });
    }


    render() {
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de peliculas favoritas de {this.state.nombre}</p>
                <p>
                    <button onClick={this.cambiarTitulo}>
                            Cambiar titulo de batman
                    </button>
                </p>
                {this.state.favorita.titulo &&
                 <p className = "favorita">
                   <strong>La pelicula favorita es: </strong>
                   <span>{this.state.favorita.titulo}</span>
                 </p>

                }
                
                {/** crear componentes peliculas */}
                
                <div id="articles" className="peliculas">
                {
                    this.state.peliculas.map((pelicula, i)=> {
                        return(
                           <Pelicula 
                           key={i} 
                           pelicula={pelicula}
                           indice={i}
                           marcarFavorita={this.favorita}
                           />
                        )                                      
                    })
                }
                </div >

            </div>                                       
        );
       
    }

}

export default Peliculas; 