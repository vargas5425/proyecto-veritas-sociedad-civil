import React, { useState } from 'react';
import { blogPosts, categories } from '../utils/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Blog Legal</h1>
          <p className="lead">Artículos y noticias sobre derecho y actualidad legal</p>
        </div>
      </div>

      {/* Blog posts en 3 columnas */}
      <div className="row">
        {currentPosts.map(post => (
          <div key={post.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card blog-card h-100 border-0 shadow d-flex flex-column">
              <div className="card-body d-flex flex-column flex-grow-1">
                {/* Contenido superior */}
                <div className="flex-shrink-0">
                  <span className="badge bg-primary mb-2">{post.category}</span>
                  <h5 className="card-title fw-bold">{post.title}</h5>
                  <p className="card-text text-muted">{post.excerpt}</p>
                </div>

                {/* Espacio flexible que empuja el contenido hacia abajo */}
                <div className="flex-grow-1"></div>

                {/* Contenido inferior fijo */}
                <div className="flex-shrink-0 mt-3">
                  <div className="blog-meta">
                    <small className="text-muted">
                      <i className="fas fa-user me-1"></i>{post.author} • 
                      <i className="fas fa-calendar ms-2 me-1"></i>{post.date} •
                      <i className="fas fa-clock ms-2 me-1"></i>{post.readTime}
                    </small>
                  </div>
                  <div className="mt-3 pt-2 border-top">
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="btn btn-outline-primary btn-sm w-100 text-decoration-none"
                    >
                      Leer Más <i className="fas fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <nav aria-label="Page navigation" className="mt-5">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li 
              key={index + 1} 
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
            >
              <button 
                className="page-link" 
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Blog;