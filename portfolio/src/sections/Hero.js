import React, { useEffect, useState } from 'react';
import { smoothScrollToId } from "../utils/smoothScrollToId";

function Hero() {
  const [showArrow, setShowArrow] = useState(true);
  const heroParticles = [
    { left: 8, top: 78, size: 4, delay: 0, duration: 18 },
    { left: 14, top: 30, size: 3, delay: 4, duration: 16 },
    { left: 21, top: 68, size: 5, delay: 7, duration: 22 },
    { left: 28, top: 42, size: 3, delay: 2, duration: 17 },
    { left: 35, top: 84, size: 4, delay: 6, duration: 19 },
    { left: 44, top: 24, size: 4, delay: 9, duration: 20 },
    { left: 52, top: 74, size: 3, delay: 5, duration: 15 },
    { left: 60, top: 36, size: 5, delay: 11, duration: 21 },
    { left: 68, top: 80, size: 4, delay: 1, duration: 18 },
    { left: 74, top: 28, size: 3, delay: 8, duration: 17 },
    { left: 81, top: 62, size: 5, delay: 3, duration: 23 },
    { left: 89, top: 38, size: 3, delay: 10, duration: 16 },
    { left: 6, top: 48, size: 3, delay: 12, duration: 19 },
    { left: 18, top: 58, size: 4, delay: 14, duration: 21 },
    { left: 26, top: 18, size: 3, delay: 13, duration: 17 },
    { left: 33, top: 56, size: 5, delay: 15, duration: 20 },
    { left: 41, top: 72, size: 3, delay: 16, duration: 18 },
    { left: 49, top: 14, size: 4, delay: 18, duration: 24 },
    { left: 57, top: 52, size: 3, delay: 17, duration: 19 },
    { left: 64, top: 22, size: 4, delay: 19, duration: 22 },
    { left: 72, top: 70, size: 3, delay: 20, duration: 18 },
    { left: 79, top: 46, size: 5, delay: 21, duration: 23 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY <= 5;
      setShowArrow(isAtTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArrowClick = (event) => {
    event.preventDefault();
    setShowArrow(false); // Hide arrow when clicked
    smoothScrollToId("#About");
  };

  const handleCtaClick = (event, href) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    smoothScrollToId(href);
  };

  return (
    <section
      id="Hero"
      className="min-h-screen flex items-center justify-center px-6 py-10 sm:py-14 bg-background relative overflow-hidden"
    >
      <div aria-hidden="true" className="hero-animated-bg">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        {heroParticles.map((particle, idx) => (
          <span
            key={idx}
            className="hero-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `-${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14">
          <div className="flex justify-center md:justify-start md:w-auto">
            <img
              src="/Saathveek_Gowrishankar_photo_head.png"
              alt="Saathveek"
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full border-4 border-primary/90 shadow-[0_0_0_6px_rgba(92,186,208,0.12)] object-cover"
            />
          </div>

          <div className="text-center md:text-left max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-text font-normal tracking-tight mb-4">
              Hello, I'm <span className="text-primary">Saathveek</span>.
            </h1>
            <p className="text-base sm:text-lg uppercase tracking-[0.14em] text-text/75 mb-5">
              Computer Engineer and Data Scientist
            </p>
            <p className="text-sm sm:text-lg leading-relaxed text-text/85 max-w-2xl md:max-w-none mb-9">
              Recent UIUC graduate interested in software development, machine learning, ethical AI, and research that solves real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
          {[{
            label: 'View Resume',
            href: '/resume/',
            newTab: true,
          }, {
            label: 'Contact Me',
            href: '#Contact',
            newTab: false,
          }].map(({ label, href, newTab }) => (
            <a
              key={label}
              href={href}
              onClick={(event) => handleCtaClick(event, href)}
              target={newTab ? '_blank' : undefined}
              rel={newTab ? 'noopener noreferrer' : undefined}
              className={`min-w-[11rem] text-base sm:text-lg px-6 py-2.5 text-center rounded-full font-semibold border-2 transition-all duration-200 ease-in-out ${
                label === 'View Resume'
                  ? 'bg-primary text-background border-primary hover:brightness-110'
                  : 'bg-transparent text-primary border-primary hover:bg-primary hover:text-background'
              }`}
            >
              {label}
            </a>
          ))}
            </div>
          </div>
        </div>
        
        {/*
        {/* Disclaimer
        <div className="text-text text-xl mt-10">
          <p>
            Welcome! My React portfolio is currently still in progress, but I'm always happy to connect!
          </p>
        </div>
        */}

        {/* Bouncing Arrow Button */}
        {showArrow && (
          <div className="fixed bottom-3 left-0 w-full flex justify-center">
            <a
              href="#About"
              onClick={handleArrowClick}
              className="animate-bounce text-primary/85 hover:text-accent transition"
              aria-label="Scroll down"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className=" size-8
                            sm:size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
