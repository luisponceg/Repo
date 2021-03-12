import React from 'react';

import './assets/ccs/App.css';
//Importar componentes

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';


function App() {
  var buttonString = "Ver mas";

  return (

    <div className="App">
      <Header />
      <Slider 
          title="Bienvenido a mi pagina"
          btn={buttonString}
      />



      <Peliculas />
      <Sidebar />
      <div class="clearfix"></div>


    </div>
  );
}

export default App;
