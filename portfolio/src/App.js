import React, { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import Projects from './sections/Projects'
import Awards from './sections/Awards';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { smoothScrollToId } from "./utils/smoothScrollToId";

import './App.css';

function App() {
  const[showNavbar, setShowNavbar] = useState(false);
  const particleCount = 336;
  const particleColumns = 16;
  const siteParticles = Array.from({ length: particleCount }, (_, i) => {
    const col = i % particleColumns;
    const row = Math.floor(i / particleColumns);
    return {
      left: `${3 + col * 6.1}%`,
      top: `${6 + row * 44 + ((i * 11) % 20)}vh`,
      size: 2 + (i % 3),
      delay: i * 0.55,
      duration: 20 + (i % 10) * 1.8,
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('Hero')?.offsetHeight || 0;
      setShowNavbar(window.scrollY > heroHeight - 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash) {
        smoothScrollToId(window.location.hash);
      }
    };

    const timer = setTimeout(scrollToHash, 0);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 bottom-0 top-[100vh] overflow-hidden z-20 site-effects">
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />
        <div className="ambient-orb ambient-orb-three" />
        <div className="ambient-orb ambient-orb-four" />
        <div className="ambient-orb ambient-orb-five" />
        <div className="ambient-orb ambient-orb-six" />
        <div className="ambient-orb ambient-orb-seven" />
        <div className="ambient-orb ambient-orb-eight" />
        <div className="ambient-orb ambient-orb-nine" />
        <div className="ambient-orb ambient-orb-ten" />
        <div className="ambient-orb ambient-orb-eleven" />
        <div className="ambient-orb ambient-orb-twelve" />
        <div className="ambient-orb ambient-orb-thirteen" />
        <div className="ambient-orb ambient-orb-fourteen" />
        {siteParticles.map((particle, idx) => (
          <span
            key={idx}
            className="site-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `-${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Hero />
        <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
          <Navbar />
        </div>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );  
}

export default App;
