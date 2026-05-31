import React, { useEffect, useState } from 'react';

function Hero() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY <= 5;
      setShowArrow(isAtTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArrowClick = () => {
    setShowArrow(false); // Hide arrow when clicked
  };

  return (
    <section
      id="Hero"
      className="min-h-screen flex items-center justify-center px-6 py-10 sm:py-14 bg-background"
    >
      <div className="max-w-6xl w-full relative">
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
            href: '/Saathveek_Gowrishankar_Resume.pdf',
            newTab: true,
          }, {
            label: 'Contact Me',
            href: '/#Contact',
            newTab: false,
          }].map(({ label, href, newTab }) => (
            <a
              key={label}
              href={href}
              target={newTab ? '_blank' : undefined}
              rel={newTab ? 'noopener noreferrer' : undefined}
              className={`min-w-[11rem] text-base sm:text-lg px-6 py-2.5 text-center rounded font-semibold border-2 transition-all duration-200 ease-in-out ${
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
