import React from "react";
import { skills_all } from "./Skills.js";

const experiences = [
    {
        companyName: "Blue Cross and Blue Shield of Illinois",
        companyLink: "https://www.bcbsil.com/",
        roleTitle: "Infrastructure Engineering Intern",
        summary: ["I built machine learning pipelines to forecast demand across 2,700+ apps, enabling proactive, data-driven capacity upgrades.",
            "I automated Dynatrace problem monitoring, boosting time and resource efficiency by over 60% across existing implementations."
        ],
        logo: "/logo_bcbs.jpg",
        dateRange: "Since May 2025",
        location: "Chicago, IL",
        skillsUsed: [
            "Machine Learning",
            "Python",
            "Databricks",
            "PySpark",
            "SQL",
            "Power BI",
            // "Dynatrace",
            // "Excel",
        ]
    },
    {
        companyName: "Mullbry, Inc. (Startup)",
        companyLink: "https://www.mullbry.com/",
        roleTitle: "Software Engineering Intern",
        summary: ["At Mullbry, I worked alongside the CEO to transform manual financial workflows into scalable, AI-powered systems using OpenAI function calling and Python.",
            "I engineered testing frameworks and automated backend operations to accelerate approvals and drive growth in a high-velocity startup environment."
        ],
        logo: "/logo_mullbry.jfif",
        dateRange: "May to August 2024",
        location: "New York, NY",
        skillsUsed: [
            "Python",
            "Azure DevOps",
            "Git",
            "OpenAI API",
            "JavaScript",
            "Excel",
        ]
    },
    {
        companyName: "Engineers Without Borders UIUC",
        companyLink: "https://www.ewbuiuc.org/",
        roleTitle: "President and Advisor",
        summary: ["At EWB-UIUC, I led 20+ student leaders and 170+ members advancing context-driven engineering solutions helping 20,000+ people across 4 countries.",
            "As President, I pioneered a membership incentive program and a workshop series focused on leadership, learning, and member enrichment."
        ],
        logo: "/logo_ewb.jfif",
        dateRange: "January 2024 to Present",
        location: "Urbana-Champaign, IL",
        skillsUsed: [
            "Contextual Engineering"
        ]
    },
    {
        companyName: "Human Factors and Aging Lab",
        companyLink: "https://hfaging.ahs.illinois.edu/",
        roleTitle: "Human-Robot Interaction Researcher",
        summary: ["At HFA, I co-authored a pending publication and conducted two symposium presentations on how older adults trust and interact with assistive robots.",
            "I automated data pipelines, modeled trust patterns, and shaped foundations for future human-centered assistive technology design."
        ],
        logo: "/logo_hfa.png",
        dateRange: "August 2022 to Present",
        location: "Urbana-Champaign, IL",
        skillsUsed: [
            "Python",
            "scikit learn",
            "statsmodels",
            "Excel",
            "Matplotlib",
            "ACM Publication",
        ]
    },
]

const skillIconMap = skills_all.reduce((map, skill) => {
    map[skill.name] = skill.icon;
    return map;
}, {});

function Experience() {
    return (
        <section
            id="Experience"
            className="flex flex-col items-start justify-center p-8 bg-background scroll-mt-8"
        >
            <div className="max-w-5xl w-full mx-auto text-left">
                <h1 className="text-4xl
                               md:text-6xl
                               font-semibold text-primary mb-6">
                    My Experience
                </h1>

                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="mb-10 p-4 border border-primary rounded-xl shadow hover:shadow-lg transition-all duration-300 ease-in-out"
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Left column: logo, title, company, dates, skills */}
                            <div className="flex-shrink-0 md:w-[54%]">
                                <div className="flex items-start gap-4">
                                    {/* Company Logo with link */}
                                    <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
                                        <div className="w-16 h-16 
                                                        md:w-24 md:h-24 
                                                        flex items-center justify-center 
                                                        bg-white 
                                                        border-2 border-white rounded-md
                                                        mt-1">
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.companyName} logo`}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                    </a>
                                    {/* Role, company title, date, location */}
                                    <div className="flex flex-col justify-start">
                                        <h2 className="text-xl
                                                       md:text-2xl
                                                       font-bold text-primary">
                                            {exp.roleTitle}
                                        </h2>
                                        <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
                                            <p className="text-sm
                                                        md:text-lg
                                                        text-text font-semibold">
                                                {exp.companyName}
                                            </p>
                                        </a>
                                        <p className="text-sm
                                                      md:text-base
                                                      text-text">
                                            {exp.dateRange} • {exp.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Skills Used */}
                                <div className="gap-3 
                                                sm:gap-4
                                                justify-start
                                                flex flex-wrap
                                                ">
                                    {exp.skillsUsed.map((skillName) => {
                                        const Icon = skillIconMap[skillName];
                                        return (
                                            Icon && (
                                                <div
                                                    key={skillName}
                                                    className="w-12 h-12 mt-4 
                                                               sm:w-16 sm:h-16 
                                                               md:w-18 md:h-18 md:mt-6 
                                                               flex items-center justify-center
                                                               border border-primary rounded-md 
                                                               hover:scale-105 transition-transform duration-150 relative group"
                                                >
                                                    {/* Icon */}
                                                    <div className="text-2xl
                                                                    sm:text-4xl
                                                                    md:text-4xl 
                                                                    text-primary">
                                                        <Icon />
                                                    </div>

                                                    {/* Tooltip */}
                                                    <div className="absolute top-[-2rem] left-1/2 -translate-x-1/2 bg-black text-white text-2xs md:text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                                                        {skillName}
                                                    </div>
                                                </div>
                                            )
                                        );
                                    })}

                                </div>

                            </div>

                            {/* Right column: Summary */}
                            <div className="md:w-1/2">
                                {exp.summary.map((line, i) => (
                                    <p key={i} className="text-sm
                                                          md:text-lg 
                                                          text-text mb-2">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


export default Experience;