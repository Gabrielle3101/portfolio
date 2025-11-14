import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/main.scss';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <Router>
    <Navbar />
    <div className="fixed-toggle-wrap">
      <DarkModeToggle />
    </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Education />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;