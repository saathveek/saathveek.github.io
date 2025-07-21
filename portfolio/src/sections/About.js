import React from 'react';

function About() {
  return (
    <section
      id="About"
      className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 bg-background scroll-mt-8"
    >
      {/* Left */}
      <div className="max-w-xl">

        {/* Header */}
        <h1 className="text-4xl
                       md:text-6xl
                       font-semibold text-primary mb-6">
          About Me
        </h1>

        {/* Description */}
        <div className="space-y-4 text-text text-xl">
          <p>Hi! I'm Saathveek, a Computer Engineering and Data Science student at the University of Illinois Urbana-Champaign.</p>
          <p>I'm passionate about applying my skills in software engineering, data analysis, and machine learning to solve real-world problems and drive lasting, positive change.</p>
          <p>I'm always looking for new challenges that push me to grow as an engineer, problem solver, and leader.</p>
          <p>Take a look around, and feel free to reach out. I'd love to connect or collaborate!</p>
        </div>

      </div>

      {/* Right */}
      <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-[28rem] flex-shrink-0">
        <img
          src="/Saathveek_Gowrishankar_Photo_globe.png"
          alt="Saathveek standing with his arm around a globe"
          className="w-full h-full object-contain rounded-xl border-primary"
        />
      </div>

    </section>
  );
}

export default About;
