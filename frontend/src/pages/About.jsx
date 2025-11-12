import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const About = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (id) => {
    // En móviles, activar/desactivar flip con click
    if (window.innerWidth <= 768) {
      setFlippedCard(flippedCard === id ? null : id);
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: "Dra. Alicia Vargas",
      position: "Socia",
      description: "Especialista en Asistencia Familiar y Proceso Extraordinario",
      specialties: [
        "Proceso Extraordinario de Asistencia Familiar.",
        "Medidas cautelares y provisionales.",
        "Audiencias y conciliaciones.",
        "Apelaciones contra sentencias.",
        "Ejecución de sentencias de asistencia familiar"
      ],
      imageUrl: "/images/alicia.png"
    },
    {
      id: 2,
      name: "Dra. Luciane Cuellar",
      position: "Socia",
      description: "Experta en Ejecución y Modificación de Obligaciones Alimenticias",
      specialties: [
        "Ejecución judicial de obligaciones alimenticias.",
        "Gestión de liquidaciones, intimaciones y pagos.",
        "Solicitud y tramitación de modificaciones en montos de pensión alimenticia.",
        "Aplicación de medidas coercitivas por incumplimiento."
      ],
      imageUrl: "/images/luciane.jpg"
    },
    {
      id: 3,
      name: "Dra. Nazira Morales",
      position: "Socia",
      description: "Especialista en materia de Derecho Familiar, Divorcio o Desvinculación Notarial",
      specialties: [
        "Proceso de Divorcio o Desvinculación Notarial.",
        "Conciliaciones y Audiencias.",
        "Representación por Poder.",
        "Redacción de demandas, de acuerdo regulador y documentos."
      ],
      imageUrl: "/images/nazira.jpg"
    },
    {
      id: 4,
      name: "Dra. Alejandra López ",
      position: "Socia",
      description: "Especialista en Divorcios y Desvinculación Notarial (Ley Nº 603).",
      specialties: [
        "Gestión y conducción de procesos de divorcio.",
        "Asesoría y representación integral en todas las fases del proceso.",
        "Conducción de audiencias y obtención de sentencias definitivas.",
        "Resolución pacífica y diálogo en conflictos familiares."
      ],
      imageUrl: "/images/lopez1.jpeg"
    }
  ];

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Sobre Nosotros</h1>
          <p className="lead">Más de 5 años de excelencia legal</p>
        </div>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4">Nuestra Historia</h2>
          <p className="mb-4">
            <strong>"Veritas Soc. Civ."</strong> nació del compromiso compartido entre un grupo de abogadas 
            apasionadas por el derecho familiar y la justicia social. Al identificar la necesidad creciente 
            de asesoría accesible y humana en casos de divorcio y asistencia familiar, decidimos unir fuerzas 
            para crear un espacio profesional que priorice la verdad, la justicia y el respeto. Desde nuestros 
            inicios, hemos apostado por una práctica ética y cercana, enfocada en acompañar a cada familia como 
            si fuera la nuestra, con procesos claros y una comunicación constante
          </p>
          <p className="mb-4">
            Hemos representado con éxito a más de 1,000 clientes en casos complejos, 
            siempre manteniendo los más altos estándares éticos y profesionales.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="card border-0 shadow">
            <div className="card-body p-4 text-center">
              <i className="fas fa-balance-scale fa-5x text-primary mb-3"></i>
              <h4 className="fw-bold">Misión</h4>
              <p className="mb-4">
                Brindar asesoría y representación legal especializada en materia familiar, 
                con un enfoque ético, humano y profesional, garantizando la defensa efectiva 
                de los derechos e intereses de las familias en procesos de divorcio y asistencia familiar, 
                promoviendo soluciones justas que contribuyan al bienestar integral y la estabilidad emocional
                de nuestros clientes.
              </p>
              <h4 className="fw-bold">Visión</h4>
              <p>
                Ser un estudio jurídico líder y reconocido en materia familiar, comprometido con la excelencia 
                en el servicio, la innovación en la resolución de conflictos y la promoción de la justicia social, 
                contribuyendo a fortalecer la familia como núcleo fundamental de la sociedad y favoreciendo la 
                reconstrucción y armonía en cada caso que atendemos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h3 className="text-center mb-4">Nuestro Equipo</h3>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="d-flex justify-content-center">
                <div 
                  className={`flip-card ${flippedCard === member.id ? 'flipped' : ''}`}
                  onClick={() => handleCardClick(member.id)}
                >
                  <div className="flip-card-inner">
                    {/* Cara frontal con la imagen */}
                    <div className="flip-card-front">
                      <div className="card border-1 shadow h-100">
                        <div className="card-img-container">
                          <img 
                            src={member.imageUrl} 
                            alt={member.name}
                            className="card-img"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/300x400/007bff/ffffff?text=Abogada';
                            }}
                          />
                          <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <div className="bg-dark bg-opacity-50 text-white p-3">
                              <h5 className="mb-1">{member.name}</h5>
                              <p className="mb-0">{member.position}</p>
                              <small className="mobile-indicator">
                                Toca para ver más
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Cara trasera con la información */}
                    <div className="flip-card-back">
                      <div className="card border-1 shadow h-100">
                        <div className="card-body">
                          <div className="text-center mb-3">
                            <h5>{member.name}</h5>
                            <p className="text-muted">{member.position}</p>
                            <p className="small">{member.description}</p>
                          </div>
                          <div className="text-start">
                            <ul className="small">
                              {member.specialties.map((specialty, index) => (
                                <li key={index}>{specialty}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-auto pt-3">
                            <Link 
                              to={`/team/${member.id}`} 
                              className="text-primary fw-bold text-decoration-none"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Contactar &gt;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;