import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  const handleNavClick = () => {
    setIsNavCollapsed(true);
  };

  const handleToggleClick = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleNavClick}>
          <i className="fas fa-balance-scale me-2"></i>
          VERITAS SOC. CIV.
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleToggleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div 
          className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} 
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/" 
                onClick={handleNavClick}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
                to="/about" 
                onClick={handleNavClick}
              >
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} 
                to="/services" 
                onClick={handleNavClick}
              >
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} 
                to="/blog" 
                onClick={handleNavClick}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                to="/contact" 
                onClick={handleNavClick}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;