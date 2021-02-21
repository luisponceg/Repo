import React,{Component} from 'react';

class MiComponente extends React.Component{
    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate','Queso','Jamon'],
            calorias: 400
        }
        return (
            <div className='mi componente"'>
               <h1>Hola soy el componente: MiComponente</h1> 
               <h2>Probando el componente</h2>  
               <hr/>
            </div>
                 
        );
        }

}

export default MiComponente;