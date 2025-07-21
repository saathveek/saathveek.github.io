import React from 'react';
import { SiPython, SiCplusplus, SiReact, SiTensorflow, SiGit, SiDatabricks, SiDynatrace, SiOpenai, SiKeras, SiDocker, SiScikitlearn, SiApachespark, SiAcm } from 'react-icons/si'; //https://react-icons.github.io/react-icons/icons/si/
import { VscAzureDevops } from 'react-icons/vsc';
import { PiMicrosoftExcelLogo, PiFileSql } from 'react-icons/pi';
import { IoLogoMicrosoft, IoLogoJavascript } from 'react-icons/io5';
import { FaUsersGear, FaMagnifyingGlassChart } from 'react-icons/fa6';
import { MdQueryStats } from "react-icons/md";
import { RiPresentationLine } from "react-icons/ri";
// import { GiArtificialIntelligence } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";

export const skills_displayed = [
  // ML + DS
  { name: 'Mach. Learning', icon: MdQueryStats },
  { name: 'Python', icon: SiPython },
  { name: 'Tensorflow', icon: SiTensorflow },
  { name: 'statsmodels', icon: IoStatsChart },
  { name: 'scikit learn', icon: SiScikitlearn },

  // Big Data
  { name: 'PySpark', icon: SiApachespark },
  { name: 'Databricks', icon: SiDatabricks },

  // Programming
  { name: 'C++', icon: SiCplusplus },
  { name: 'JavaScript', icon: IoLogoJavascript },
  { name: 'Azure DevOps', icon: VscAzureDevops },
  { name: 'Git', icon: SiGit },

  // BI and reporting
  { name: 'SQL', icon: PiFileSql },
  { name: 'Power BI', icon: IoLogoMicrosoft },
  { name: 'Matplotlib', icon: FaMagnifyingGlassChart},
];

export const skills_all = [
  ...skills_displayed,
  { name: 'Machine Learning', icon: MdQueryStats },
  { name: 'Contextual Engineering', icon: FaUsersGear },
  { name: 'OpenAI API', icon: SiOpenai },
  { name: 'Docker', icon: SiDocker },
  { name: 'Dynatrace', icon: SiDynatrace },
  { name: 'Keras', icon: SiKeras },
  { name: 'React', icon: SiReact },
  { name: 'Excel', icon: PiMicrosoftExcelLogo },
  { name: 'ACM Publication', icon: SiAcm },
  { name: 'Formal Presentation', icon: RiPresentationLine}
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