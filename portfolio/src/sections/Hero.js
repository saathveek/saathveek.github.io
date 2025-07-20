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
      className="min-h-screen flex items-center justify-center p-8 bg-background"
    >
      <div className="max-w-6xl w-full text-center relative">
        {/* Profile Picture */}
        <img
          src="/Saathveek_Gowrishankar_Photo_head.png"
          alt="Saathveek"
          className=" w-40 h-40 
                      sm:w-48 sm:h-48 
                      rounded-full mx-auto mb-6 border-4 border-primary"
        />

        {/* Intro Text */}
        <h1 className=" text-3xl
                        sm:text-5xl
                        text-text mb-2">
          Hello, I'm <span className="text-primary">Saathveek</span>.
        </h1>
        <h1 className=" text-3xl
                        sm:text-5xl
                        text-text mb-8">
          I'm a computer&nbsp;engineer and data&nbsp;scientist.
        </h1>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
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
              className=" min-w-[9rem] text-base px-4 py-1.5
                          sm:min-w-[11rem] sm:text-xl sm:px-6 sm:py-2 
                          text-center bg-background text-primary
                          rounded font-semibold border-2 border-primary
                          hover:bg-primary hover:text-background transition-all duration-200 ease-in-out"
            >
              {label}
            </a>
          ))}
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
          <div className="fixed bottom-1 left-0 w-full flex justify-center">
            <a
              href="#About"
              onClick={handleArrowClick}
              className="animate-bounce text-primary hover:text-accent transition"
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
