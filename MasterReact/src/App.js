import React from 'react';

import './assets/ccs/App.css';
//Importar componentes

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';


function App() {


  return (

    <div className="App">
      <Header />
      <Slider />



      <SeccionPruebas />
      <Sidebar />
      <div class="clearfix"></div>


    </div>
  );
}

export default App;
