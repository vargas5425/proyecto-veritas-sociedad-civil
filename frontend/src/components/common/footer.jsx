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
            <p><i className="fas fa-phone me-2"></i> +591 77802050</p>
            <p><i className="fas fa-envelope me-2"></i> info@veritas-sociedad-civil.com</p>
          </div>
          <div className="col-md-4">
            <h5>Síguenos</h5>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1ALosxP1K7/?mibextid=wwXIfr" target='_blank' className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/marianodi8141?igsh=MTdhMTQzc3hxd3dzMQ%3D%3D&utm_source=qr" target='_blank' className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/59177802050?text=Hola,%20me%20interesa%20obtener%20más%20información" target="_blank"className="text-white me-3"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col text-center">
            <p>&copy; 2024 VERITAS SOC. CIV. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;