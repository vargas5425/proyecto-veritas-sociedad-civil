import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>VERITAS Soc. Civ.</h5>
            <p>Bufete de abogados comprometido con la excelencia y la justicia.</p>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p><i className="fas fa-map-marker-alt me-2"></i> Av. CRISTO REDENTOR, 6° ANILLO 567</p>
            <p><i className="fas fa-phone me-2"></i> +1 234 567 890</p>
            <p><i className="fas fa-envelope me-2"></i> info@consortiumveritas.com</p>
          </div>
          <div className="col-md-4">
            <h5>Síguenos</h5>
            <div className="social-links">
              <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col text-center">
            <p>&copy; 2024 CONSORTIUM VERITAS. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;