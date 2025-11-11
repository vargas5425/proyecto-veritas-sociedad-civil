import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teamMembers } from '../utils/teamData';
import '../styles/main.css';

const TeamMember = () => {
  const { id } = useParams();
  const member = teamMembers[id];

  if (!member) {
    return (
      <div className="container mt-5 text-center alert alert-danger">
        Miembro del equipo no encontrado
      </div>
    );
  }

  return (
    <div className="team-member-page">
      {/* HEADER */}
      <div className="member-header">
        <div className="member-header-content">
          <h1 className="member-name">{member.name}</h1>
          <h1 className="member-lastname"><strong>{member.lastName}</strong></h1>
          <h4 className="member-position">{member.position}</h4>

          <p>
            <i className="fas fa-envelope me-2"></i>
            <a
              href={`mailto:${member.email}`}
              className="text-white text-decoration-none"
            >
              {member.email}
            </a>
              
          </p>

          {member.whatsapp && (
            <p>
              <i className="fab fa-whatsapp me-2"></i>
              <a
                href={`https://wa.me/${member.whatsapp}?text=Hola%20${member.name},%20quiero%20mas%20informacion`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                Contactar por WhatsApp
              </a>
            </p>
          )}
        </div>

        {/* Animación con framer-motion */}
        <motion.img
          key={member.image}
          src={member.image}
          alt={`${member.name} ${member.lastName}`}
          className="member-photo"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* CONTENIDO */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-5">
            <h2 className="text-primary border-bottom pb-2 mb-4">Experiencia</h2>
            {member.experience.map((exp, i) => (
              <p key={i}>{exp}</p>
            ))}
          </div>

          <div className="col-md-6 mb-5">
            <h2 className="text-primary mb-4 border-bottom pb-2">Formación</h2>
            <ul className="list-unstyled">
              {member.education.map((item, index) => (
                <li key={index} className="mb-3">
                  <i className="fas fa-graduation-cap text-info me-2"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h3 className="text-primary mb-3">Perfil Profesional</h3>
            <p>{member.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

