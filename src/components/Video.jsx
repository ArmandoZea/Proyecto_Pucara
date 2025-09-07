import React from 'react';


const Productos = () => {
  return (
    <section className="content-columns" id="productos">
      <div className="video-container">
        <h4>Nuestro Proceso Artesanal</h4>
        <video controls muted loop>
          <source src="src/img/Multimedia/istockphoto-517120534-640_adpp_is.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>

      <div className="category-menu">
        <h4>Explora Nuestras Categorías</h4>
        <ul>
          <li><a href="#ceramica">Cerámica Tradicional</a></li>
          <li><a href="#textiles">Textiles y Bordados</a></li>
          <li><a href="#madera">Talla en Madera</a></li>
          <li><a href="#joyeria">Joyería Artesanal</a></li>
          <li><a href="#cuero">Trabajos en Cuero</a></li>
          <li><a href="#especiales">Pedidos Especiales</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Productos;