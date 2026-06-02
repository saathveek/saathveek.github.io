import React from 'react';

function About() {
  return (
    <section
      id="About"
      className="bg-background px-6 py-12 sm:py-16 scroll-mt-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
        {/* Left */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-semibold text-primary mb-6">
            About Me
          </h1>

          {/* Description */}
          <div className="space-y-4 text-text/90 text-base sm:text-lg leading-relaxed">
            <p>I like building software and data-driven systems that are practical, reliable, and genuinely useful to people.</p>
            <p>I believe engineering should solve real problems and improve people&apos;s day-to-day lives, whether through better tools, smarter systems, or more equitable technology.</p>
            <p>I&apos;m always looking for opportunities that help me grow as an engineer, researcher, and collaborator.</p>
            <p>If anything here resonates with you, I&apos;d love to connect.</p>
          </div>
        </div>

        {/* Right */}
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[24rem] md:h-[26rem] flex-shrink-0">
          <img
            src="/Saathveek_Gowrishankar_photo_globe.png"
            alt="Saathveek standing with his arm around a globe"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
