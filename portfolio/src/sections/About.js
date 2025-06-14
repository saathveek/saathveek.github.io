import React from 'react';

function About() {
  return (
    <section
      id="About"
      className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 bg-background"
    >
      {/* Left */}
      <div className="max-w-xl">

        {/* Header */}
        <h1 className="text-6xl font-semibold text-primary mb-6">
          About Me
        </h1>

        {/* Description */}
        <div className="space-y-4 text-text text-xl">
          <p>Hi! I'm Saathveek, a student studying Computer Engineering and Data Science at the University of Illinois Urbana-Champaign.</p>
          <p>I'm passionate about applying my skills to drive meaningful impact - whether through internships, research, extracurriculars, or my future career.</p>
          <p>With experience in software development, infrastructure engineering, data analysis, and machine learning, I'm always seeking new challenges and opportunities to grow as an engineer, problem solver, and leader.</p>
        </div>

      </div>

      {/* Right */}
      <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-[28rem] flex-shrink-0">
        <img
          src="/saathveek_globe.png"
          alt="Saathveek standing with his arm around a globe"
          className="w-full h-full object-contain rounded-xl border-primary"
        />
      </div>

    </section>
  );
}

export default About;
