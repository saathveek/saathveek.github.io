import React from "react";
import { skills_all } from "./Skills.js";

// Example projects array
const projects = [
  {
    title: "Embedded Keyword Spotting with Tiny\u00A0Machine Learning",
    link: "https://github.com/saathveek/embedded-tiny-ml-keyword-spotting",
    image: "/project_tinyml.jpg",
    description: [
      "I designed real-time voice recognition for five standard commands (e.g. \"forward\", \"stop\") for use in interactive IoT applications, such as robots and wearables.",
      "To deploy the project on a resource-constrained microcontroller, I trained a neural network using TensorFlow Lite and optimized the model with weight quantization.",
    ],
    skillsUsed: [
      "Machine Learning",
      "Python", 
      "Tensorflow", 
      "Keras",
      "statsmodels",
      "C++"
    ],
  },
  {
    title: "An ML Approach to Understanding Older Adults' Perspectives",
    link: "/project_tinyml.jpg",
    
    image: "/",
    description: [
      "I developed LASSO and RIDGE regression models to predict older adults' trust in novel assistive robots based on their familiarity with other technologies.",
      "The resulting insights offer a data-driven foundation for how to design more trustworthy, user-centered  robots that support aging in place."
    ],
    skillsUsed: [
      "Machine Learning", 
      "Python", 
      "statsmodels", 
      "scikit learn",
      "Matplotlib",      
      "Formal Presentation",
    ],
  },
];

// map skill names to icon components
const skillIconMap = skills_all.reduce((map, skill) => {
  map[skill.name] = skill.icon;
  return map;
}, {});

function Projects() {
  return (
    <section id="Projects" className="bg-background p-8 scroll-mt-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl
                       md:text-6xl
                       font-semibold text-primary mb-6">
          My Favorite Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-primary rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden"
            >
              {/* Project Banner */}
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-48 object-cover bg-background_muted"
                />
              )}

              {/* Project Content */}
              <div className="p-6">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-primary hover:underline"
                  >
                    {project.title}
                  </a>
                ) : (
                  <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
                )}

                <div className="mb-4 space-y-2 mt-2">
                  {project.description.map((line, i) => (
                    <p key={i} className="text-text text-base">
                      {line}
                    </p>
                  ))}
                </div>

                {/* Skills Used */}
                <div className="flex gap-3 flex-wrap mt-4">
                  {project.skillsUsed.map((skillName) => {
                    const Icon = skillIconMap[skillName];
                    return (
                      Icon && (
                        <div
                          key={skillName}
                          className="relative group w-16 h-16 flex items-center justify-center border border-primary rounded-md hover:scale-105 transition-transform duration-150"
                        >
                          <div className="text-3xl text-primary">
                            <Icon />
                          </div>

                          {/* Tooltip */}
                          <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 pointer-events-none">
                            {skillName}
                          </div>
                        </div>
                      )
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
