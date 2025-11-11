import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-users',
      title: 'Derecho Familiar',
      description:
        'En nuestra firma, contamos con un equipo de profesionales especializados en Derecho Familiar, comprometidos con brindar atención integral, ética y eficiente para la resolución de conflictos familiares bajo el marco legal vigente en Bolivia.',
      features: [
        'Divorcios y separación de bienes',
        'Custodia de hijos y régimen de visitas',
        'Reconocimiento y negación de paternidad',
        'Asesoramiento en mediación y conciliación familiar',
        'Sucesiones y testamentos'
      ]
    },
    {
      icon: 'fas fa-gavel',
      title: 'Divorcios y Desvinculación Notarial',
      description:
        'Ofrecemos soluciones legales ágiles y efectivas para la disolución matrimonial mediante procedimiento notarial.',
      features: [
        'Gestión de divorcios por mutuo acuerdo y contencioso',
        'Trámites de desvinculación notarial conforme a los requisitos legales',
        'Conducción de conciliaciones y audiencias de resolución de conflictos',
        'Representación mediante poderes especiales debidamente otorgados',
        'Redacción de demandas, acuerdos reguladores y documentos jurídicos'
      ]
    },
    {
      icon: 'fas fa-file-contract',
      title: 'Asistencia Familiar y Obligaciones Alimenticias',
      description:
        'Especialistas en la gestión y defensa de procesos de asistencia familiar y obligaciones alimenticias bajo el Proceso Extraordinario regulado por la Ley 603.',
      features: [
        'Presentación y tramitación de procesos de asistencia familiar',
        'Solicitud de medidas cautelares y provisionales de protección inmediata',
        'Ejecución judicial y modificación de pensiones alimenticias',
        'Aplicación de medidas coercitivas (embargos, apremios, etc.)',
        'Recursos y apelaciones para garantizar la justicia familiar'
      ]
    }
  ];

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Nuestros Servicios</h1>
          <p className="lead">Soluciones legales integrales para particulares y familias</p>
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
                <ul className="list-style-disc ps-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
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
            <a href="/contact" className="btn btn-light btn-lg">
              Solicitar Consulta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
