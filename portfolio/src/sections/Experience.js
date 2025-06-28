import React from "react";
import { skills_all } from "./Skills.js";

const experiences = [
    {
        companyName: "Blue Cross and Blue Shield of Illinois",
        companyLink: "https://www.bcbsil.com/",
        roleTitle: "Infrastructure Engineer Intern",
        summary: ["I built machine learning pipelines and ARIMA models forecasting infrastructure demand across 2,700+ apps, enabling proactive, data-driven capacity upgrades.",
            "I automated Dynatrace problem monitoring, boosting time and resource efficiency by over 60% across existing implementations."
        ],
        logo: "/logo_bcbs.jpg",
        dateRange: "Since May 2025",
        location: "Chicago, IL",
        skillsUsed: [
            "Python",
            "Databricks",
            "Dynatrace",
            "Git",
            "Power BI",
            "Excel",
        ]
    },
    {
        companyName: "Mullbry, Inc.",
        companyLink: "https://www.mullbry.com/",
        roleTitle: "Software Engineer Intern",
        summary: ["At Mullbry, I worked alongside the CEO to transform manual financial workflows into scalable, AI-powered systems using OpenAI function calling and Python.",
            "I engineered testing frameworks and automated backend operations to accelerate approvals and drive growth in a high-velocity startup environment."
        ],
        logo: "/logo_mullbry.jfif",
        dateRange: "May to August 2024",
        location: "New York, NY",
        skillsUsed: ["Python", "Azure DevOps", "Git"]
    },
    {
        companyName: "Engineers Without Borders UIUC",
        companyLink: "https://www.ewbuiuc.org/",
        roleTitle: "President and Advisor",
        summary: ["At EWB-UIUC, I led 20+ student leaders and 170+ members advancing context-driven engineering solutions impacting 20,000+ people across 4 countries.",
            "As President, I pioneered a membership incentive program and a workshop series focused on leadership, technical education, and member enrichment."
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
        roleTitle: "Undergraduate Researcher",
        summary: ["At HFA, I co-authored a pending publication and conducted two symposium presentations on how older adults trust and interact with assistive robots.",
            "I automated data pipelines, modeled trust patterns with Lasso and Ridge regression, and shaped foundations for future human-centered assistive technology design."
        ],
        logo: "/logo_hfa.png",
        dateRange: "August 2022 to Present",
        location: "Urbana-Champaign, IL",
        skillsUsed: ["Python", "Excel"]
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
            className="flex flex-col items-start justify-center p-8 bg-background"
        >
            <div className="max-w-5xl w-full mx-auto text-left">
                <h1 className="text-6xl font-semibold text-primary mb-10">
                    My Experience
                </h1>

                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="mb-10 p-6 border border-primary rounded-xl shadow hover:shadow-lg transition-shadow"
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Left column: logo, title, company, dates, skills */}
                            <div className="flex-shrink-0 md:w-1/2">
                                <div className="flex items-start gap-4 mb-4">
                                    {/* Company Logo with link */}
                                    <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={exp.logo}
                                            alt={`${exp.companyName} logo`}
                                            className="w-20 h-20 object-contain rounded-md bg-white border border-white border-2 hover:scale-105"
                                        />
                                    </a>
                                    {/* Role, company title, date, location */}
                                    <div className="flex flex-col justify-start">
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
                                                    className="w-16 h-16 mt-6 flex items-center justify-center border border-primary rounded-md hover:scale-105 transition-transform duration-150 relative group"
                                                >
                                                    {/* Icon */}
                                                    <div className="text-4xl text-primary">
                                                        <Icon />
                                                    </div>

                                                    {/* Tooltip (scoped to this icon only) */}
                                                    <div className="absolute top-[-2rem] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
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
                                    <p key={i} className="text-text text-lg mb-2">
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