import React from 'react';
import { SiAcm, SiApachespark, SiC, SiCplusplus, SiDatabricks, SiDocker, SiDynatrace, SiGit, SiGnu, SiLinux, 
          SiOpenai, SiKeras, SiPython, SiReact, SiRiscv, SiScikitlearn, SiTensorflow, } 
          from 'react-icons/si'; //https://react-icons.github.io/react-icons/icons/si/
import { FaHandsHelping, FaSearch } from 'react-icons/fa';
import { FaHandHoldingDollar, FaUsersGear, FaMagnifyingGlassChart } from 'react-icons/fa6';
import { GiTeamUpgrade } from 'react-icons/gi';
import { IoLogoJavascript, IoLogoMicrosoft  } from 'react-icons/io5';
import { MdDraw, MdGroups3, MdQueryStats } from "react-icons/md";
import { PiMicrosoftExcelLogo, PiFileSql } from 'react-icons/pi';
import { RiPresentationLine, RiTeamFill } from "react-icons/ri";
import { VscAzureDevops } from 'react-icons/vsc';
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";

export const skills_displayed = [
  // Programming
  { name: 'Python', icon: SiPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'C', icon: SiC},
  { name: 'Assembly', icon: SiRiscv},
  { name: 'LLM Integration', icon: GiArtificialIntelligence },
  { name: 'Git', icon: SiGit },
  { name: 'Azure DevOps', icon: VscAzureDevops },
  // ML + DS
  { name: 'Mach. Learning', icon: MdQueryStats },
  { name: 'Tensorflow', icon: SiTensorflow },
  { name: 'statsmodels', icon: IoStatsChart },
  { name: 'scikit learn', icon: SiScikitlearn },
  { name: 'Databricks', icon: SiDatabricks },
  
  // Soft Skills
  { name: 'Leadership', icon: RiTeamFill},
  { name: 'Nonprofits', icon: FaHandsHelping},
];

export const skills_all = [
  ...skills_displayed,
  { name: 'ACM Publication', icon: SiAcm },
  { name: 'Cross-Functional Collaboration', icon: MdGroups3},
  { name: 'Contextual Engineering', icon: FaUsersGear },
  { name: 'Docker', icon: SiDocker },
  { name: 'Dynatrace', icon: SiDynatrace },
  { name: 'Excel', icon: PiMicrosoftExcelLogo },
  { name: 'Formal Presentations', icon: RiPresentationLine},
  { name: 'Fundraising and Grants', icon: FaHandHoldingDollar},
  { name: 'GDB Debugger', icon: SiGnu},
  { name: 'JavaScript', icon: IoLogoJavascript },
  { name: 'Keras', icon: SiKeras },
  { name: 'Machine Learning', icon: MdQueryStats },
  { name: 'Matplotlib', icon: FaMagnifyingGlassChart},
  { name: 'Nonprofit Volunteering', icon: FaHandsHelping},
  { name: 'OpenAI API', icon: SiOpenai },
  { name: 'Operating Systems', icon: SiLinux},
  { name: 'Power BI', icon: IoLogoMicrosoft },
  { name: 'PySpark', icon: SiApachespark },
  { name: 'React', icon: SiReact },
  { name: 'Research', icon: FaSearch },
  { name: 'RISC-V Assembly', icon: SiRiscv},
  { name: 'SQL', icon: PiFileSql },
  { name: 'Stakeholder Engagement', icon:  GiTeamUpgrade},
  { name: 'Technical Writing', icon: MdDraw},
]

function Skills() {
  return (
    <section id="Skills" className="flex flex-col items-center p-8 bg-background scroll-mt-8">
      <div className="max-w-5xl mx-auto w-full text-left">
        {/* Heading */}
        <h1 className="text-4xl
                       md:text-6xl
                       font-semibold text-primary mb-6">
          My Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(6rem,_1fr))] 
                        gap-4
                        md:gap-10 justify-center mx-auto w-full">
          {skills_displayed.map((skill) => (
            <div
              key={skill.name}
              className=" w-24 h-24
                          md:w-28 md:h-28 
                          flex flex-col items-center justify-center 
                          border-2 border-primary rounded-xl shadow group 
                          transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
            >
              <div className="text-5xl
                              md:text-6xl
                              text-primary 
                              transition-transform duration-300 ease-in-out group-hover:scale-105">
                <skill.icon />
              </div>
              <span className="text-2xs
                               md:text-xs 
                               mt-2 
                               text-text 
                               transition-opacity duration-300 ease-in-out group-hover:opacity-90">
                {skill.name}
              </span>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;