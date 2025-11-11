import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../utils/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-danger">Artículo no encontrado</h2>
        <Link to="/blog" className="btn btn-primary mt-3">Volver al Blog</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 mb-4">
          <Link to="/blog" className="btn btn-outline-primary mb-3">&larr; Volver al Blog</Link>
          <h1 className="display-4 text-primary">{post.title}</h1>
          <p className="text-muted">
            <i className="fas fa-user me-1"></i>{post.author} •
            <i className="fas fa-calendar ms-2 me-1"></i>{post.date} •
            <i className="fas fa-clock ms-2 me-1"></i>{post.readTime} •
            <span className="badge bg-primary ms-2">{post.category}</span>
          </p>
          <hr />
        </div>

        <div className="col-12">
          {/* Mostrar el excerpt primero */}
          <div className="lead mb-4 p-3 bg-light rounded">
            {post.excerpt}
          </div>

          {/* Renderizar el contenido estructurado */}
          {post.content && post.content.map((section, index) => (
            <section key={index} className="mb-5">
              <h2 className="h3 text-secondary mb-3">{section.subtitle}</h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-3">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {/* Fallback para posts antiguos que solo tienen content como string */}
          {!post.content && typeof post.content === 'string' && (
            <div className="article-content">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-3">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Botón para volver al final */}
        <div className="col-12 mt-5 text-center">
          <Link to="/blog" className="btn btn-outline-primary">
            &larr; Volver al Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;