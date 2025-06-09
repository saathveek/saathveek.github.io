import React, { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Intro from './sections/Intro';
import XpSkills from './sections/XpSkills';
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
      <Intro />
      <XpSkills />
      <Contact />
    </div>
  );  
}

export default App;
