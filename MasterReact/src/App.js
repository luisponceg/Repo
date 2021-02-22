import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/ccs/App.css';
//Importar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

function HolaMundo(nombre, edad){
  var presentacion = <div>
     <h2>Hola, soy {nombre}</h2>
     <h3>Tengo {edad} años</h3>
    </div>;
 
  return presentacion;
}
function App() {
  var nombre = "Luis Ponce"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master de react
        </p>
        {HolaMundo(nombre,33)}
        <section className="componentes">
        <MiComponente/>
        <Peliculas/>
      </section>
        
      </header>
      
    </div>
  );
}

export default App;
