import React from 'react';
import { blogPosts, categories } from '../utils/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Blog Legal</h1>
          <p className="lead">Artículos y noticias sobre derecho y actualidad legal</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {blogPosts.map(post => (
              <div key={post.id} className="col-md-6 mb-4">
                <div className="card blog-card h-100 border-0 shadow">
                  <div className="card-body">
                    <span className="badge bg-primary mb-2">{post.category}</span>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-muted">{post.excerpt}</p>
                    <div className="blog-meta mt-auto">
                      <small className="text-muted">
                        <i className="fas fa-user me-1"></i>{post.author} • 
                        <i className="fas fa-calendar ms-2 me-1"></i>{post.date} •
                        <i className="fas fa-clock ms-2 me-1"></i>{post.readTime}
                      </small>
                    </div>
                    <button className="btn btn-outline-primary btn-sm mt-3">
                      <Link to={`/blog/${post.id}`} className="text-decoration-none">
                        Leer Más <i className="fas fa-arrow-right ms-1"></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          <nav aria-label="Page navigation" className="mt-5">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">Anterior</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Siguiente</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-lg-4">
          {/* Sidebar */}
          <div className="card border-0 shadow mb-4">
            <div className="card-body">
              <h5 className="card-title">Categorías</h5>
              <ul className="list-unstyled">
                {categories.map((category, index) => (
                  <li key={index} className="mb-2">
                    <a href="#" className="text-decoration-none">
                      <i className="fas fa-folder me-2 text-primary"></i>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card border-0 shadow mb-4">
            <div className="card-body">
              <h5 className="card-title">Artículos Populares</h5>
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action border-0">
                  <small>Cómo proteger su marca comercial</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0">
                  <small>Guía de contratos laborales 2024</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0">
                  <small>Derechos en un divorcio contencioso</small>
                </a>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow">
            <div className="card-body">
              <h5 className="card-title">Suscríbase</h5>
              <p className="small text-muted">Reciba las últimas noticias legales en su email.</p>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Su email" />
                <button className="btn btn-primary">Suscribir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
