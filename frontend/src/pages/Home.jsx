import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Header con Imagen */}
      <header className="header-image-section">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <img 
                src="/images/logo8.png" 
                alt="Header Consortium Veritas" 
                className="img-fluid w-100"
                style={{ maxHeight: '1000px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold text-white mb-4">Excelencia Legal con Integridad</h1>
              <p className="lead text-white mb-4">
                En VERITAS SOC. CIV. combinamos experiencia, innovación y compromiso para ofrecer 
                soluciones legales efectivas y personalizadas.
              </p>
              <div className="hero-buttons">
                <Link to="/services" className="btn btn-primary btn-lg me-3">Nuestros Servicios</Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">Consulta Gratuita</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h2 className="section-title">¿Por Qué Elegirnos?</h2>
              <p className="section-subtitle">Más de 20 años de experiencia nos respaldan</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-card text-center p-4">
                <i className="fas fa-gavel feature-icon"></i>
                <h4>Experiencia</h4>
                <p>Más de 5 años resolviendo casos complejos con éxito demostrable.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card text-center p-4">
                <i className="fas fa-shield-alt feature-icon"></i>
                <h4>Confidencialidad</h4>
                <p>Tu información está segura con nosotros. Discreción absoluta garantizada.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card text-center p-4">
                <i className="fas fa-users feature-icon"></i>
                <h4>Enfoque Personal</h4>
                <p>Cada cliente recibe atención personalizada y estrategias a medida.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principios y Valores Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h2 className="section-title text-primary">Principios y Valores</h2>
              <p className="section-subtitle">Fundamentos del Derecho Familiar</p>
            </div>
          </div>

          <div className="row">
            {/* Principios */}
            <div className="col-md-6 mb-4">
              <div className="p-4 shadow-sm rounded bg-light h-100">
                <h4 className="text-primary mb-3">Principios del Derecho Familiar</h4>
                <ul className="text-start">
                  <li><strong>Protección a las Familias:</strong> El Estado garantiza la protección integral de las familias para asegurar una convivencia respetuosa, pacífica y armónica.</li>
                  <li><strong>Solidaridad:</strong> Los miembros de la familia deben actuar con comprensión mutua, cooperación y esfuerzo común, promoviendo el diálogo y la participación.</li>
                  <li><strong>Diversidad:</strong> Se reconoce la pluralidad de formas familiares, todas con igualdad de condiciones, en una sociedad plurinacional.</li>
                  <li><strong>Interculturalidad:</strong> Se valora el diálogo y la convivencia entre distintas expresiones culturales, lingüísticas, religiosas y sociales dentro de las familias.</li>
                  <li><strong>Equidad de Género:</strong> Las relaciones deben ser justas e igualitarias entre hombres y mujeres.</li>
                  <li><strong>Favorecimiento:</strong> Las normas se interpretan en beneficio de la protección de los derechos familiares.</li>
                </ul>
              </div>
            </div>

            {/* Valores */}
            <div className="col-md-6 mb-4">
              <div className="p-4 shadow-sm rounded bg-light h-100">
                <h4 className="text-primary mb-3">Valores del Derecho Familiar</h4>
                <ul className="text-start">
                  <li><strong>Responsabilidad:</strong> Cumplimiento de deberes para el bienestar familiar, especialmente hacia menores y personas vulnerables.</li>
                  <li><strong>Respeto:</strong> Garantiza la dignidad e igualdad sin discriminación.</li>
                  <li><strong>Solidaridad:</strong> Promueve la cooperación y apoyo mutuo en la familia.</li>
                  <li><strong>Protección Integral:</strong> Abarca la protección social, jurídica y económica del núcleo familiar.</li>
                  <li><strong>Interés Superior del Niño:</strong> Prioriza el bienestar integral de los menores.</li>
                  <li><strong>Unidad Familiar:</strong> La familia es el núcleo fundamental de la sociedad, cuya estabilidad debe preservarse.</li>
                  <li><strong>Pluralidad Cultural:</strong> Respeto a las distintas formas de organización familiar y diversidad cultural.</li>
                  <li><strong>Bienestar Común:</strong> Busca condiciones dignas y favorables para el desarrollo familiar.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
