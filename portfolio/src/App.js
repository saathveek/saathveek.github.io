import React, { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

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
      <Contact />
    </div>
  );  
}

export default App;
