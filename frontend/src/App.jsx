import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './styles/main.css';
import TeamMember from './pages/TeamMember';
import BlogPost from './pages/blogPost';

function App() {
  return (

      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team/:id" element={<TeamMember />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
