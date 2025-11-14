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
import RouteWithScrollToTop from './components/routeWithScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <RouteWithScrollToTop>
                <Home />
              </RouteWithScrollToTop>
            } 
          />
          <Route 
            path="/about" 
            element={
              <RouteWithScrollToTop>
                <About />
              </RouteWithScrollToTop>
            } 
          />
          <Route 
            path="/services" 
            element={
              <RouteWithScrollToTop>
                <Services />
              </RouteWithScrollToTop>
            } 
          />
          <Route 
            path="/blog" 
            element={
              <RouteWithScrollToTop>
                <Blog />
              </RouteWithScrollToTop>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <RouteWithScrollToTop>
                <Contact />
              </RouteWithScrollToTop>
            } 
          />
          <Route 
            path="/team/:id" 
            element={
              <RouteWithScrollToTop>
                <TeamMember />
              </RouteWithScrollToTop>
            } 
          />
          <Route 
            path="/blog/:id" 
            element={
              <RouteWithScrollToTop>
                <BlogPost />
              </RouteWithScrollToTop>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;