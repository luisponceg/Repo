import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
class Header extends Component {
    render() {
        return (

            <header id="header">

                <div className="center">
                    {/* Logo */}
                    <div id="logo">
                        <img src= {logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Master</strong>Frameworws.js
                          </span>
                    </div>

                    {/*menu*/}
                    <nav id="menu">
                        <ul>
                            <li><a href="index.html">Inicio</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="formulario.html">Formulario</a></li>
                            <li><a href="#">Pagina1</a></li><li><a href="#">Pagina2</a></li>
                        </ul>
                    </nav>

                    {/*Limpiar float del ccs*/}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;