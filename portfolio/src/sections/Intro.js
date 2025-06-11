import React from 'react';

function Intro() {
  return (
    <section
      id="Intro"
      className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 bg-background"
    >
      {/* Left */}
      <div className="max-w-xl">
        
        {/* Header */}
        <h1 className="text-6xl font-semibold text-primary mb-6">
          About Me
        </h1>
        
        {/* Description */}
        <p className="text-xl text-text mb-6">
          (This is from ChatGPT, I need to write my own and make it sound less robotic. Maybe 5-6 sentences.)
          I am a computer engineer and data scientist with a passion for solving complex problems through technology. 
          My journey in the tech world has been driven by curiosity and a desire to make a positive impact.
        </p>
      </div>

      {/* Right */}
      <div className="w-96 h-[28rem]">
        
        {/* Profile Picture */}
        <img
          src="/saathveek_globe.png"
          alt="Saathveek standing with his arm around a globe"
          className="w-full h-full object-cover rounded-xl border-primary"
        />
      </div>
    </section>
  );
}

export default Intro;
