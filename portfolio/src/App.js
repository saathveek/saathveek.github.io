import React, { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import About from './sections/About';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import Projects from './sections/Projects'
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import './App.css';

function App() {
  const[showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('Hero')?.offsetHeight || 0;
      setShowNavbar(window.scrollY > heroHeight - 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Hero />
      {showNavbar && <Navbar />}
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );  
}

export default App;
