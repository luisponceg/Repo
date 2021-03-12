import React, { Component } from 'react';
import MensajeEstatico from './MensajeEstatico';

class Peliculas extends Component {
    state = {
        peliculas: [
            {titulo: 'Batman vs Superman', image: 'https://static.wikia.nocookie.net/batman/images/9/91/Batman_v_Superman_comic_n1.jpg/revision/latest?cb=20160205140433&path-prefix=es'}
        ]
    }
    render() {
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas </h2>
                
                
            </div>
        );
    }

}

export default Peliculas; 