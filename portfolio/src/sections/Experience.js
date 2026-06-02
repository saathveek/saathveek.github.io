import React from "react";
import { skills_all } from "./Skills.js";

const experiences = [
    {
        companyName: "Blue Cross and Blue Shield of Illinois",
        companyLink: "https://www.bcbsil.com/",
        category: "professional",
        roleTitle: "ML and Infrastructure Engineering Intern",
        summary: ["Built machine learning pipelines to forecast demand across 2,700+ applications, enabling proactive capacity planning and resource optimization.",
            "Automated daily Dynatrace problem monitoring and reporting workflows, improving time and resource efficiency by over 60%."
        ],
        logo: "/logo_bcbs.jpg",
        dateRange: "May to August 2025",
        location: "Chicago, IL",
        skillsUsed: [
            "Machine Learning",
            "Python",
            "Databricks",
            "PySpark",
            "SQL",
            "Power BI",
        ]
    },
    {
        companyName: "Mullbry, Inc. (Startup)",
        companyLink: "https://www.mullbry.com/",
        category: "professional",
        roleTitle: "Software Engineering Intern",
        summary: ["Partnered directly with the CEO to convert manual financial workflows into scalable AI-assisted systems using Python and OpenAI function calling.",
            "Built testing frameworks and backend automations that accelerated approvals in a fast-moving startup environment."
        ],
        logo: "/logo_mullbry.jfif",
        dateRange: "May to August 2024",
        location: "Rochester, NY",
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
        companyName: "UIUC School of Information Sciences",
        companyLink: "http://ischool.illinois.edu/people/haileleol-tibebu",
        category: "research",
        roleTitle: "LLM Linguistic Resource Researcher",
        summary: ["Investigated data scarcity in LLM training corpora across 80+ languages to surface challenges in equitable AI development.",
            "Collaborated with Dr. Tibebu on sampling methods for more realistic and representative large-scale dataset analysis."
        ],
        logo: "/logo_ischool.png",
        dateRange: "January 2026 to Present",
        location: "Urbana-Champaign, IL",
        skillsUsed: [
            "Python",
            "Research",
            "Technical Writing",
            "Leadership",
            "Git",
            "Formal Presentations"
        ]
    },
    {
        companyName: "Human Factors and Aging Lab",
        companyLink: "https://hfaging.ahs.illinois.edu/",
        category: "research",
        roleTitle: "Human-Robot Interaction Researcher",
        summary: ["Co-authored a publication and presented findings at two symposiums on trust and interaction patterns of Older Adults with assistive robots.",
            "Automated data pipelines, modeled trust patterns, and helped shape foundations for future human-centered assistive technology design"
        ],
        logo: "/logo_hfa.png",
        dateRange: "August 2022 to August 2025",
        location: "Urbana-Champaign, IL",
        skillsUsed: [
            "Python",
            "scikit learn",
            "statsmodels",
            "Excel",
            "Technical Writing",
            "ACM Publication",
        ]
    },
    {
        companyName: "Engineers Without Borders UIUC",
        companyLink: "https://www.ewbuiuc.org/",
        category: "leadership",
        roleTitle: "President and Advisor",
        summary: ["Led 22 student leaders and 170+ members advancing context-driven engineering projects serving 25,000+ people across 4 countries.",
            "Launched a membership incentive program and leadership workshop series to strengthen learning, collaboration, and retention."
        ],
        logo: "/logo_ewb.jfif",
        dateRange: "January 2024 to Present",
        location: "Urbana-Champaign, IL",
        skillsUsed: [
            "Contextual Engineering",
            "Leadership",
            "Cross-Functional Collaboration",
            "Nonprofit Volunteering",
            "Stakeholder Engagement",
            "Fundraising and Grants"
        ]
    },
]

const skillIconMap = skills_all.reduce((map, skill) => {
    map[skill.name] = skill.icon;
    return map;
}, {});

const experienceGroups = [
    { key: "professional", label: "Professional Experience" },
    { key: "research", label: "Research Experience" },
    { key: "leadership", label: "Leadership Experience" },
];

function Experience() {
    return (
        <section
            id="Experience"
            className="bg-background px-6 py-12 sm:py-16 scroll-mt-8"
        >
            <div className="max-w-6xl w-full mx-auto text-left">
                <h1 className="text-4xl md:text-6xl font-semibold text-primary mb-4">
                    My Experience
                </h1>

                {experienceGroups.map((group) => {
                    const groupItems = experiences.filter((exp) => exp.category === group.key);
                    if (groupItems.length === 0) return null;

                    return (
                        <div key={group.key} className="mb-10">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-5">
                                {group.label}
                            </h2>
                            {groupItems.map((exp, idx) => (
                                <div
                                    key={`${group.key}-${idx}`}
                                    className="mb-8 p-5 sm:p-6 border border-primary/40 rounded-2xl bg-background_muted/10 transition-all duration-300 ease-in-out"
                                >
                                    <div className="flex flex-col lg:flex-row gap-7 lg:gap-8">
                                        {/* Left column: logo, title, company, dates, skills */}
                                        <div className="flex-shrink-0 lg:w-[54%]">
                                            <div className="mb-4">
                                                <span className="inline-flex items-center text-2xs sm:text-xs uppercase tracking-wide text-primary/90 border border-primary/60 rounded-full px-3 py-1">
                                                    {exp.dateRange}
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                {/* Company Logo with link */}
                                                <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
                                                    <div className="w-16 h-16 
                                                                    sm:w-20 sm:h-20 
                                                                    flex items-center justify-center 
                                                                    bg-white 
                                                                    border-2 border-white rounded-md">
                                                        <img
                                                            src={exp.logo}
                                                            alt={`${exp.companyName} logo`}
                                                            className="max-w-full max-h-full object-contain"
                                                        />
                                                    </div>
                                                </a>
                                                {/* Role, company title, date, location */}
                                                <div className="flex flex-col justify-start">
                                                    <h3 className="text-xl
                                                                   sm:text-2xl
                                                                   font-bold text-primary">
                                                        {exp.roleTitle}
                                                    </h3>
                                                    <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
                                                        <p className="text-sm
                                                                    sm:text-lg
                                                                    text-text font-semibold">
                                                            {exp.companyName}
                                                        </p>
                                                    </a>
                                                    <p className="text-sm sm:text-base text-text/80">
                                                        {exp.location}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Skills Used */}
                                            <div className="gap-3 
                                                            sm:gap-4
                                                            justify-start
                                                            flex flex-wrap
                                                            mt-1">
                                                {exp.skillsUsed.map((skillName) => {
                                                    const Icon = skillIconMap[skillName];
                                                    return (
                                                        Icon && (
                                                            <div
                                                                key={skillName}
                                                                className="w-11 h-11 mt-3 
                                                                           sm:w-14 sm:h-14 
                                                                           md:w-16 md:h-16 md:mt-4 
                                                                           flex items-center justify-center
                                                                           border border-primary/75 rounded-md 
                                                                           hover:scale-105 transition-transform duration-150 relative group"
                                                            >
                                                                {/* Icon */}
                                                                <div className="text-2xl
                                                                                sm:text-3xl
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
                                        <div className="lg:w-[46%] lg:pt-10">
                                            {exp.summary.map((line, i) => (
                                                <p key={i} className="text-base
                                                                      sm:text-lg
                                                                      leading-relaxed
                                                                      text-text/90 mb-3">
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}


export default Experience;