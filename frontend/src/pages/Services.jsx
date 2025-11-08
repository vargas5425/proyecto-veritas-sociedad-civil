import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-briefcase',
      title: 'Derecho Corporativo',
      description: 'Asesoría legal integral para empresas, fusiones, adquisiciones y gobierno corporativo.',
      features: ['Constitución de empresas', 'Contratos comerciales', 'Fusiones y adquisiciones']
    },
    {
      icon: 'fas fa-home',
      title: 'Derecho Inmobiliario',
      description: 'Asesoramiento en transacciones inmobiliarias, contratos de arrendamiento y propiedad horizontal.',
      features: ['Compraventa de inmuebles', 'Contratos de arrendamiento', 'Regularización de propiedades']
    },
    {
      icon: 'fas fa-users',
      title: 'Derecho de Familia',
      description: 'Representación en casos de divorcio, custodia, alimentos y sucesiones.',
      features: ['Divorcios', 'Custodia y alimentos', 'Sucesiones y testamentos']
    },
    {
      icon: 'fas fa-gavel',
      title: 'Litigio Penal',
      description: 'Defensa legal en procesos penales y asesoramiento en derecho penal empresarial.',
      features: ['Defensa penal', 'Asesoría preventiva', 'Recursos y apelaciones']
    },
    {
      icon: 'fas fa-file-contract',
      title: 'Derecho Laboral',
      description: 'Asesoría en relaciones laborales, despidos y negociación colectiva.',
      features: ['Contratos laborales', 'Despidos e indemnizaciones', 'Negociación colectiva']
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Propiedad Intelectual',
      description: 'Protección de marcas, patentes, derechos de autor y secretos comerciales.',
      features: ['Registro de marcas', 'Patentes y modelos', 'Derechos de autor']
    }
  ];

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Nuestros Servicios</h1>
          <p className="lead">Soluciones legales integrales para particulares y empresas</p>
        </div>
      </div>

      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card service-card h-100 border-0 shadow">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <i className={`${service.icon} fa-3x text-primary`}></i>
                </div>
                <h4 className="text-center mb-3">{service.title}</h4>
                <p className="text-muted mb-4">{service.description}</p>
                <ul className="list-unstyled">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <div className="bg-primary text-white p-5 rounded">
            <h3 className="mb-3">¿Necesita asesoría legal especializada?</h3>
            <p className="mb-4">Contáctenos para una consulta inicial sin costo</p>
            <a href="/contact" className="btn btn-light btn-lg">Solicitar Consulta</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;