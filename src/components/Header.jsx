import React, { useState} from 'react';
import logo from '../img/logo.png';

const Header = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const handleToggleMenu = () =>{
        setIsSidebarActive(!isSidebarActive);
    };

    return(
        <>
        <header>
            <div className="logo">
                <img src={logo} alt="Salazar Artesanía Logo"/>
                <h1>Salazar Artesanía</h1>
            </div>

            <nav className="main-nav">
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#catalogo.html">Catalogo</a></li>
                        <li><a href="#talleres">Talleres</a></li>
                        <li><a href="#nosotros">Sobre Nosotros</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
            </nav>
            <button className="menu-toggle" aria-label="Abrir menú" onClick={handleToggleMenu}>☰</button>
        </header>

            <aside className={`sidebar ${isSidebarActive ? 'active': ''}`}>
                <nav onClick={handleToggleMenu}> 
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#productos">Productos</a></li>
                        <li><a href="#talleres">Talleres</a></li>
                        <li><a href="#nosotros">Sobre Nosotros</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                        <li><a href="#testimonios">Testimonios</a></li>
                    </ul>
                </nav>
            </aside>

        </>
    );
};

export default Header;