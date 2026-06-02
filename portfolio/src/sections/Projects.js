import React, { useState } from "react";
import { skills_all } from "./Skills.js";

// Example projects array
const projects = [
  {
    title: "Data-Compute Asymmetry in LLM Training",
    type: "Research Project",
    link: "/UGRS_2026.pdf",
    image: "",
    timeframe: "Jan - May 2026",
    outcome: "Built an effective-corpus framework that exposed major language-ID and filtering losses in low-resource African language pipelines.",
    description: [
      "Using Common Crawl and GlotCC across 8,327 documents and 64 African languages, I benchmarked data retention against English/French baselines and presented implications for more equitable multilingual LLM development at UGRS 2026.",
    ],
    linkLabel: "View Slides",
    skillsUsed: [
      "Research",
      "Python",
      "API Handling",
      "Jupyter Notebooks",
      "Technical Writing",
      "Cross-Functional Collaboration",
    ],
  },
  {
    title: "E-PEEL: Semi-Autonomous Robotic Peeler",
    type: "Senior Design Project",
    link: "/project_e-peel.pdf",
    image: "",
    timeframe: "Jan - May 2026",
    outcome: "Built a semi-autonomous assistive peeling system that achieved ~90% cucumber peel coverage in less than 30 seconds.",
    description: [
      "I developed embedded Arduino firmware and finite-state force-control logic (TAL220B + HX711), while our team iterated PCB, motor, and mechanical integration through repeated real-world testing.",
    ],
    linkLabel: "View Final Report",
    additionalLinks: [
      { label: "Demo Video", pending: true, pendingText: "Video coming soon" },
    ],
    skillsUsed: [
      "C++",
      "Arduino",
      "Python",
      "Machine Learning",
      "Cross-Functional Collaboration",
      "Technical Writing",
    ],
  },
  {
    title: "Publication: \"Robots for Older Adults: A Scoping Review\"",
    type: "Publication",
    link: "https://doi.org/10.1145/3799977",
    image: "/project_acm.png",
    timeframe: "2025",
    outcome: "Published in ACM THRI with a structured synthesis of 12 years of HRI literature focused on older adults.",
    description: [
      "I co-authored a review of 205 studies (2010-2022) that identified under-supported daily tasks and recurring adoption barriers, informing later assistive-technology design decisions around usability, safety, and in-home feasibility.",
    ],
    skillsUsed: [
      "ACM Publication",
      "Cross-Functional Collaboration",
      "Research",
      "Technical Writing",
      "Excel",
      "Python"
    ],
  },
  {
    title: "Embedded Keyword Spotting with Tiny\u00A0Machine Learning",
    type: "ML Systems",
    link: "https://github.com/saathveek/embedded-tiny-ml-keyword-spotting",
    image: "/project_ntu.webp",
    timeframe: "2024",
    outcome: "Delivered a quantized on-device keyword spotting model for real-time command recognition on constrained microcontrollers.",
    description: [
      "I built a five-command tinyML pipeline from TensorFlow/Keras training through TensorFlow Lite quantization and validated embedded trade-offs between footprint, responsiveness, and accuracy.",
    ],
    skillsUsed: [
      "Machine Learning",
      "Python", 
      "Tensorflow", 
      "Keras",
      "Arduino",
      "C++"
    ],
  },
  {
    title: "Custom Linux-style Operating System with RISC-V",
    type: "Systems Project",
    link: "",
    image: "/project_os.png",
    timeframe: "2024",
    outcome: "Implemented core OS capabilities including persistent filesystem behavior and multithreading in a custom RISC-V environment.",
    description: [
      "I implemented storage-backed filesystem behavior, process/thread execution paths, and deterministic low-level debugging workflows in C and RISC-V assembly.",
    ],
    hideMissingLink: true,
    additionalLinks: [
      { label: "Source Code", pending: true, pendingText: "Source code available upon request (university guidelines)" },
    ],
    skillsUsed: [
      "C",
      "RISC-V Assembly",
      "Operating Systems",
      "GDB Debugger",
      "Git",
      
    ],
  },
  {
    title: "An ML Approach to Understanding Older Adults' Perspectives",
    type: "Applied ML",
    link: "https://github.com/saathveek/ml-predicting-older-adult-trust",
    image: "/project_hfa_2.png",
    timeframe: "2025",
    outcome: "Built interpretable trust-prediction models to support user-centered assistive robot design decisions.",
    description: [
      "I developed LASSO and RIDGE models with interpretable coefficient-level analysis to translate trust-prediction results into practical, user-centered assistive robot design decisions."
    ],
    skillsUsed: [
      "Machine Learning", 
      "Python", 
      "statsmodels", 
      "scikit learn",
      "Cross-Functional Collaboration",      
      "Formal Presentations",
    ],
  },
];

// map skill names to icon components
const skillIconMap = skills_all.reduce((map, skill) => {
  map[skill.name] = skill.icon;
  return map;
}, {});

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const featuredCount = 4;
  const visibleProjects = showAllProjects ? projects : projects.slice(0, featuredCount);

  return (
    <section id="Projects" className="bg-background px-6 py-12 sm:py-16 scroll-mt-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl
                       md:text-6xl
                       font-semibold text-primary mb-9">
          My Favorite Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="border border-primary/40 rounded-2xl transition-all duration-200 overflow-hidden bg-background_muted/15"
            >
              {/* Project Content */}
              <div className="p-5 sm:p-6 flex flex-col h-full">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-2xs sm:text-xs uppercase tracking-wide text-primary/90 border border-primary/50 rounded-full px-2 py-1">
                    {project.timeframe}
                  </span>
                  <span className="text-2xs sm:text-xs uppercase tracking-wide text-text/80 border border-background_muted rounded-full px-2 py-1">
                    {project.type}
                  </span>
                </div>

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

                <p className="text-sm sm:text-base leading-relaxed text-secondary mt-2 mb-3 font-medium">
                  {project.outcome}
                </p>

                <div className="mb-4 space-y-2 mt-1">
                  {project.description.map((line, i) => (
                    <p key={i} className="text-base sm:text-lg leading-relaxed text-text/90">
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

                <div className="mt-6">
                  <div className="flex flex-wrap gap-3">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center text-sm sm:text-base px-4 py-2 border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-background transition-colors duration-200"
                      >
                        {project.linkLabel || "View Project"}
                      </a>
                    ) : !project.hideMissingLink && !(project.additionalLinks?.length > 0) ? (
                      <span className="inline-flex items-center text-xs sm:text-sm text-muted border border-dashed border-primary/50 rounded-full px-3 py-2">
                        Link coming soon
                      </span>
                    ) : null}

                    {project.additionalLinks?.map((extra) =>
                      extra.pending ? (
                        <span
                          key={extra.label}
                          title={extra.pendingText}
                          className="inline-flex items-center text-xs sm:text-sm text-muted border border-dashed border-primary/50 rounded-full px-3 py-2"
                        >
                          {extra.pendingText || `${extra.label} (Soon)`}
                        </span>
                      ) : (
                        <a
                          key={extra.label}
                          href={extra.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-sm sm:text-base px-4 py-2 border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-background transition-colors duration-200"
                        >
                          {extra.label}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > featuredCount && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="inline-flex items-center justify-center text-sm sm:text-base px-5 py-2.5 border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-background transition-colors duration-200"
            >
              {showAllProjects ? "Show Featured Projects" : "Show More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
