import React, { useEffect } from 'react';


const Testimonios = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.testimonial, .video-container, .category-menu');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    const elements = document.querySelectorAll('.testimonial, .video-container, .category-menu');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar una vez al cargar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="testimonials" id="testimonios">
      <h3>Testimonios de Nuestros Clientes</h3>
      <div className="testimonial-container">
        <div className="testimonial">
          <img src="src/img/torito trabajo.png" alt="Cliente satisfecho" />
          <p>"La calidad de las piezas de Salazar Artesanía es incomparable. Cada detalle muestra el amor por el arte tradicional."</p>
          <span>- María G.</span>
        </div>
        <div className="testimonial">
          <img src="src/img/clientes torito.png" alt="Cliente satisfecho" />
          <p>"Compré un torito como regalo y quedaron encantados. Definitivamente volveré por más piezas."</p>
          <span>- Carlos R.</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;