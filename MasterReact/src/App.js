import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/ccs/App.css';

function HolaMundo(nombre){
  var presentacion = <h2>Hola, soy {nombre}</h2>
  return presentacion;
}
function App() {
  var nombre = "LuisPonce"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master de react
        </p>
        {HolaMundo(nombre)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
