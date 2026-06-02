import React from 'react';
import {
  SiArduino,
  SiAcm,
  SiPostman,
  SiApachespark,
  SiC,
  SiCplusplus,
  SiDatabricks,
  SiDocker,
  SiDynatrace,
  SiGit,
  SiGnu,
  SiKeras,
  SiJupyter,
  SiLinux,
  SiOpenai,
  SiPandas,
  SiPython,
  SiReact,
  SiRiscv,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { FaHandsHelping, FaSearch } from "react-icons/fa";
import { FaHandHoldingDollar, FaUsersGear, FaMagnifyingGlassChart } from "react-icons/fa6";
import { GiArtificialIntelligence, GiTeamUpgrade } from "react-icons/gi";
import { IoLogoJavascript, IoLogoMicrosoft, IoStatsChart } from "react-icons/io5";
import { MdDraw, MdGroups3, MdQueryStats } from "react-icons/md";
import { PiFileSql, PiMicrosoftExcelLogo } from "react-icons/pi";
import { RiPresentationLine, RiTeamFill } from "react-icons/ri";
import { VscAzureDevops } from "react-icons/vsc";

// Single source of truth:
// 1) Add/edit skills in SKILL_DEFINITIONS.
// 2) Reference those exact names in skillGroups to display them.
const SKILL_DEFINITIONS = [
  // Featured technical skills
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "C", icon: SiC },
  { name: "Arduino", icon: SiArduino },
  { name: "Assembly", icon: SiRiscv },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "Git", icon: SiGit },
  { name: "Azure DevOps", icon: VscAzureDevops },
  { name: "Agentic AI", icon: GiArtificialIntelligence },
  { name: "LLM Integration", icon: GiArtificialIntelligence },
  { name: "Pandas", icon: SiPandas },
  { name: "Tensorflow", icon: SiTensorflow },
  { name: "Jupyter Notebooks", icon: SiJupyter },
  { name: "statsmodels", icon: IoStatsChart },
  { name: "scikit-learn", icon: SiScikitlearn },
  { name: "Databricks", icon: SiDatabricks },
  { name: "Mach. Learning", icon: MdQueryStats },

  // Featured non-technical skills
  { name: "Leadership", icon: RiTeamFill },
  { name: "Nonprofits", icon: FaHandsHelping },
  { name: "Cross-Functional Collaboration", icon: MdGroups3 },
  { name: "Formal Presentations", icon: RiPresentationLine },
  { name: "Technical Writing", icon: MdDraw },
  { name: "Stakeholder Engagement", icon: GiTeamUpgrade },

  // Additional skills used by other sections/projects
  { name: "ACM Publication", icon: SiAcm },
  { name: "Contextual Engineering", icon: FaUsersGear },
  { name: "Docker", icon: SiDocker },
  { name: "Dynatrace", icon: SiDynatrace },
  { name: "Excel", icon: PiMicrosoftExcelLogo },
  { name: "Fundraising and Grants", icon: FaHandHoldingDollar },
  { name: "GDB Debugger", icon: SiGnu },
  { name: "Keras", icon: SiKeras },
  { name: "Machine Learning", icon: MdQueryStats },
  { name: "Matplotlib", icon: FaMagnifyingGlassChart },
  { name: "Nonprofit Volunteering", icon: FaHandsHelping },
  { name: "OpenAI API", icon: SiOpenai },
  { name: "API Handling", icon: SiPostman },
  { name: "Operating Systems", icon: SiLinux },
  { name: "Power BI", icon: IoLogoMicrosoft },
  { name: "PySpark", icon: SiApachespark },
  { name: "React", icon: SiReact },
  { name: "Research", icon: FaSearch },
  { name: "RISC-V Assembly", icon: SiRiscv },
  { name: "SQL", icon: PiFileSql },
];

export const skills_all = SKILL_DEFINITIONS;

const skillGroups = [
  {
    title: "Programming & Tools",
    skills: ["Python", "C++", "C", "Arduino", "Git", "Azure DevOps", "Agentic AI", "LLM Integration"],
  },
  {
    title: "Machine Learning & Data",
    skills: ["Pandas", "Tensorflow", "Keras", "statsmodels", "scikit-learn", "Databricks"],
  },
  {
    title: "Non-Technical",
    skills: ["Leadership", "Formal Presentations", "Nonprofits", "Technical Writing", "Cross-Functional Collaboration"],
  },
];

const skillMap = skills_all.reduce((map, skill) => {
  if (!map.has(skill.name)) {
    map.set(skill.name, skill.icon);
  }
  return map;
}, new Map());

// skillGroups supports two forms:
// - "Skill Name" (uses icon from SKILL_DEFINITIONS when available)
// - { name: "Skill Name" } (same behavior; useful for future metadata)
const normalizeGroupSkill = (skillEntry) =>
  typeof skillEntry === "string" ? { name: skillEntry } : skillEntry;

function Skills() {
  return (
    <section id="Skills" className="bg-background px-6 py-14 sm:py-16 scroll-mt-8">
      <div className="max-w-6xl mx-auto w-full text-left">
        {/* Heading */}
        <h1 className="text-4xl
                       md:text-6xl
                       font-semibold text-primary mb-9">
          My Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {skillGroups.map((group, groupIdx) => (
            <article
              key={`${group.title}-${groupIdx}`}
              className="h-full border border-primary/40 rounded-2xl bg-background_muted/10 p-5 sm:p-6 transition-all duration-300"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-4">{group.title}</h2>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 content-start">
                {group.skills.map((entry, skillIdx) => {
                  const { name } = normalizeGroupSkill(entry);
                  const Icon = skillMap.get(name);

                  if (!Icon && process.env.NODE_ENV !== "production") {
                    console.warn(`[Skills] No icon mapping for "${name}" (displaying text only).`);
                  }

                  return (
                    <div
                      key={`${name}-${skillIdx}`}
                      className="inline-flex items-center gap-2 px-3 py-2 border border-primary/60 rounded-full bg-background/40 hover:bg-background_muted/40 transition-colors"
                    >
                      {Icon ? (
                        <span className="text-primary text-lg">
                          <Icon />
                        </span>
                      ) : null}
                      <span className="whitespace-nowrap leading-none text-[11px] sm:text-sm text-text/95">{name}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;