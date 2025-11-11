{/*import React, { useState } from 'react';
import api from '../utils/api'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await api.post('/contact', formData);
    alert('Mensaje enviado. Nos pondremos en contacto pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      serviceType: ''
    });
  } catch (error) {
    alert('Error al enviar el mensaje. Intenta nuevamente.');
    console.error(error);
  }
};

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Contáctenos</h1>
          <p className="lead">Estamos aquí para ayudarle con sus necesidades legales</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mb-5">
          <div className="card border-0 shadow">
            <div className="card-body p-4">
              <h4 className="mb-4">Solicitar Consulta</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Nombre Completo *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="serviceType" className="form-label">Tipo de Servicio</label>
                    <select 
                      className="form-select" 
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="corporativo">Derecho Corporativo</option>
                      <option value="inmobiliario">Derecho Inmobiliario</option>
                      <option value="familia">Derecho de Familia</option>
                      <option value="penal">Litigio Penal</option>
                      <option value="laboral">Derecho Laboral</option>
                      <option value="propiedad">Propiedad Intelectual</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Asunto *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensaje *</label>
                  <textarea 
                    className="form-control" 
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow mb-4">
            <div className="card-body">
              <h5 className="card-title">Información de Contacto</h5>
              <div className="mb-3">
                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                <strong>Dirección:</strong><br />
                Av. CRISTO REDENTOR, 6° ANIILO <br />
                NRO. 567
              </div>
              <div className="mb-3">
                <i className="fas fa-phone text-primary me-2"></i>
                <strong>Teléfono:</strong><br />
                +1 (234) 567-8900
              </div>
              <div className="mb-3">
                <i className="fas fa-envelope text-primary me-2"></i>
                <strong>Email:</strong><br />
                info@consortiumveritas.com
              </div>
              <div className="mb-3">
                <i className="fas fa-clock text-primary me-2"></i>
                <strong>Horario:</strong><br />
                Lunes - Viernes: 9:00 - 18:00<br />
                Sábados: 9:00 - 13:00
              </div>
            </div>
          </div>

          <div className="card border-0 shadow">
            <div className="card-body">
              <h5 className="card-title">Ubicación</h5>
              <div className="bg-light rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.385860678999!2d-63.17071622844542!3d-17.726449036380593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e707b6637099%3A0x884d35623b13c05e!2sNRO.%20567%2C%20Av.%20Cristo%20Redentor%206%2C%20Santa%20Cruz%20de%20la%20Sierra!5e0!3m2!1ses!2sbo!4v1762408711098!5m2!1ses!2sbo"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Consortium Veritas"
                ></iframe>
              </div>
              {/*<div className="bg-light rounded p-3 text-center">
                <i className="fas fa-map fa-3x text-muted mb-3"></i>
                <p className="text-muted mb-0">
                  Mapa interactivo<br />
                  (Integrar Google Maps aquí)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;*/}

import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Contáctenos</h1>
          <p className="lead">Estamos aquí para ayudarle con sus necesidades legales</p>
        </div>
      </div>

      <div className="row">
        {/* FORMULARIO */}
        <div className="col-lg-8 mb-5">
          <div className="card border-0 shadow">
            <div className="card-body p-4">
              <h4 className="mb-4">Solicitar Consulta</h4>
              <form
                action="https://formspree.io/f/mrbonvyq"  // <-- reemplaza con tu Form ID
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Nombre Completo *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="serviceType" className="form-label">Tipo de Servicio</label>
                    <select
                      className="form-select"
                      id="serviceType"
                      name="serviceType"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="corporativo">Obligaciones y Derechos </option>
                      <option value="inmobiliario">Asistencia Familiar</option>
                      <option value="familia">Derecho de Familia</option>
                      <option value="penal">Regimen de Visitas</option>
                      <option value="laboral">Medidas Cautelares</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Asunto *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensaje *</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* INFORMACIÓN Y UBICACIÓN */}
        <div className="col-lg-4">
          <div className="card border-0 shadow mb-4">
            <div className="card-body">
              <h5 className="card-title">Información de Contacto</h5>
              <div className="mb-3">
                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                <strong>Dirección:</strong><br />
                Av. CRISTO REDENTOR, 6° ANIILO <br />
                NRO. 567
              </div>
              <div className="mb-3">
                <i className="fas fa-phone text-primary me-2"></i>
                <strong>Teléfono:</strong><br />
                +591 (700) 567-890
              </div>
              <div className="mb-3">
                <i className="fas fa-envelope text-primary me-2"></i>
                <strong>Email:</strong><br />
                info@veritas-sociedad-civil.com
              </div>
              <div className="mb-3">
                <i className="fas fa-clock text-primary me-2"></i>
                <strong>Horario:</strong><br />
                Lunes - Viernes: 9:00 - 18:00<br />
                Sábados: 9:00 - 13:00
              </div>
            </div>
          </div>

          <div className="card border-0 shadow">
            <div className="card-body">
              <h5 className="card-title">Ubicación</h5>
              <div className="bg-light rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.385860678999!2d-63.17071622844542!3d-17.726449036380593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e707b6637099%3A0x884d35623b13c05e!2sNRO.%20567%2C%20Av.%20Cristo%20Redentor%206%2C%20Santa%20Cruz%20de%20la%20Sierra!5e0!3m2!1ses!2sbo!4v1762408711098!5m2!1ses!2sbo"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Consortium Veritas"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
