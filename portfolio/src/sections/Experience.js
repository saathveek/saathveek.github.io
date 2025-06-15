import React from "react";
import { skills } from "./Skills.js";

const experiences = [
    {
        companyName: "Blue Cross Blue Shield of Illinois",
        companyLink: "https://www.bcbsil.com/",
        roleTitle: "Infrastructure Engineer Intern",
        summary: "insert summary here",
        logo: "/bcbs_logo.jpg",
        dateRange: "Since May 2025",
        location: "Chicago, IL",
        skillsUsed: ["Python", "Git"]
    },
    {
        companyName: "Mullbry",
        companyLink: "https://www.mullbry.com/",
        roleTitle: "Software Engineer Intern",
        summary: "insert summary here",
        logo: "/mullbry_logo.jfif",
        dateRange: "May to August 2024",
        location: "New York, NY",
        skillsUsed: ["Python", "Azure DevOps", "Git"]
    }
]

const skillIconMap = skills.reduce((map, skill) => {
    map[skill.name] = skill.icon;
    return map;
}, {});


function Experience() {
  return (
    <section
      id="Experience"
      className="flex flex-col items-start justify-center p-8 bg-background"
    >
      <div className="max-w-5xl w-full mx-auto text-left">
        <h1 className="text-6xl font-semibold text-primary mb-10">
          Experience
        </h1>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="mb-10 p-6 border border-primary rounded-xl shadow hover:shadow-lg transition-shadow"
          >
            {/* Two-column layout */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left column: logo, title, company, dates, skills */}
              <div className="flex-shrink-0 md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.companyName} logo`}
                    className="w-16 h-16 object-contain rounded-md border border-gray-400 bg-white"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-primary">
                      {exp.roleTitle}
                    </h2>
                    <p className="text-text font-semibold text-lg">
                      {exp.companyName}
                    </p>
                    <p className="text-sm text-text">
                      {exp.dateRange} • {exp.location}
                    </p>
                  </div>
                </div>

                {/* Skills Used */}
                <div className="flex gap-4 flex-wrap">
                  {exp.skillsUsed.map((skillName) => {
                    const Icon = skillIconMap[skillName];
                    return (
                      Icon && (
                        <div
                          key={skillName}
                          className="w-10 h-10 flex items-center justify-center border border-primary rounded-md"
                        >
                          <div className="text-xl text-primary">
                            <Icon />
                          </div>
                        </div>
                      )
                    );
                  })}
                </div>
              </div>

              {/* Right column: Summary */}
              <div className="md:w-1/2">
                <p className="text-text text-base">{exp.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Experience;