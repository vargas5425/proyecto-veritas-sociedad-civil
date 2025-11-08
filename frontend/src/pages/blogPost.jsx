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
          <p>{post.excerpt}</p>
          {/* Aquí puedes agregar más contenido si quieres */}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
