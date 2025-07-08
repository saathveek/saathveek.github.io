import React from 'react';
import { SiPython, SiCplusplus, SiReact, SiTensorflow, SiGit, SiDatabricks, SiDynatrace, SiOpenai, SiKeras, SiDocker, SiScikitlearn, SiApachespark } from 'react-icons/si'; //https://react-icons.github.io/react-icons/icons/si/
import { VscAzureDevops } from 'react-icons/vsc';
import { PiMicrosoftExcelLogo, PiFileSql } from 'react-icons/pi';
import { IoLogoMicrosoft, IoLogoJavascript } from 'react-icons/io5';
import { FaUsersGear } from 'react-icons/fa6';
import { MdQueryStats } from "react-icons/md";
// import { GiArtificialIntelligence } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";

export const skills_displayed = [
  // ML + DS
  { name: 'ML', icon: MdQueryStats },
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
  { name: 'Excel', icon: PiMicrosoftExcelLogo },
];

export const skills_all = [
  ...skills_displayed,
  { name: 'Contextual Engineering', icon: FaUsersGear },
  { name: 'OpenAI', icon: SiOpenai },
  { name: 'Docker', icon: SiDocker },
  { name: 'Dynatrace', icon: SiDynatrace },
  { name: 'Keras', icon: SiKeras },
  { name: 'React', icon: SiReact },
]

function Skills() {
  return (
    <section id="Skills" className="flex flex-col items-center p-8 bg-background">
      <div className="max-w-5xl mx-auto w-full text-left">
        {/* Heading */}
        <h1 className="text-6xl font-semibold text-primary mb-12 text-left">
          My Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(7rem,_7rem))] gap-9 justify-center mx-auto w-full">
          {skills_displayed.map((skill) => (
            <div
              key={skill.name}
              className="w-28 h-28 flex flex-col items-center justify-center border-2 border-primary 
              rounded-xl shadow hover:scale-105 transition-transform"
            >
              <div className="text-6xl text-primary">
                <skill.icon />
              </div>
              <span className="text-xs mt-2 text-text">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;