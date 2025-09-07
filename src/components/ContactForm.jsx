import { useState } from 'react';
// import './ContactForm.css'; // Puedes definir estilos aquí

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    celular: '',
    producto: '',
    presupuesto: '',
    mensaje: ''
  });

  const [formMessage, setFormMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const showMessage = (text, type) => {
    setFormMessage({ text, type });
    setTimeout(() => setFormMessage({ text: '', type: '' }), 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, correo, producto } = formData;
    if (!nombre.trim() || !correo.trim() || !producto) {
      showMessage('Por favor complete todos los campos requeridos', 'error');
      return;
    }

    showMessage('Su consulta ha sido enviada. Nos pondremos en contacto pronto.', 'success');

    const consulta = {
      ...formData,
      fecha: new Date().toISOString()
    };

    const consultasPrevias = JSON.parse(localStorage.getItem('consultasSalazarArtesania')) || [];
    consultasPrevias.push(consulta);
    localStorage.setItem('consultasSalazarArtesania', JSON.stringify(consultasPrevias));

    setFormData({
      nombre: '',
      correo: '',
      celular: '',
      producto: '',
      presupuesto: '',
      mensaje: ''
    });
  };

  return (
    <section className="contact-form-section" id="contacto">
      <h3>Contáctanos para Pedidos Especiales</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre Completo:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />

        <label htmlFor="correo">Correo de Contacto:</label>
        <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />

        <label htmlFor="celular">Número Celular:</label>
        <input type="tel" id="celular" name="celular" value={formData.celular} onChange={handleChange} />

        <label htmlFor="producto">Tipo de Producto:</label>
        <select id="producto" name="producto" value={formData.producto} onChange={handleChange}>
          <option value="">Selecciona un producto</option>
          <option value="ceramica">Cerámica</option>
          <option value="textiles">Textiles</option>
          <option value="madera">Talla en Madera</option>
          <option value="joyeria">Joyería Artesanal</option>
          <option value="cuero">Trabajos en Cuero</option>
          <option value="otros">Otros</option>
        </select>

        <label htmlFor="presupuesto">Presupuesto Aproximado:</label>
        <input type="number" id="presupuesto" name="presupuesto" min="0" step="10" placeholder="Ej: 100"
          value={formData.presupuesto} onChange={handleChange} />

        <label htmlFor="mensaje">Mensaje Adicional:</label>
        <textarea id="mensaje" name="mensaje" rows="4" value={formData.mensaje} onChange={handleChange}></textarea>

        <button type="submit">Enviar Consulta</button>
      </form>

      {formMessage.text && (
        <p className={form-message}>{formMessage.text}</p>
      )}
    </section>
  );
};

export default ContactForm;