import React from 'react';
import { SiPython, SiJavascript, SiCplusplus, SiReact, SiTensorflow, SiGit, SiDatabricks, SiDynatrace } from 'react-icons/si'; //https://react-icons.github.io/react-icons/icons/si/
import { VscAzureDevops } from 'react-icons/vsc';
import { PiMicrosoftExcelLogo } from 'react-icons/pi';

export const skills = [
    { name: 'Python', icon: SiPython },
    { name: 'C++', icon: SiCplusplus },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Tensorflow', icon: SiTensorflow },
    { name: 'Azure DevOps', icon: VscAzureDevops },
    { name: 'Databricks', icon: SiDatabricks },
    { name: 'Dynatrace', icon: SiDynatrace },
    { name: 'Git', icon: SiGit },
    { name: 'React', icon: SiReact },
    { name: 'Excel', icon: PiMicrosoftExcelLogo }
];

function Skills() {
  return (
    <section
      id="Skills"
      className="flex flex-col items-start justify-center p-8 bg-background"
    >
      <div className="max-w-xl mx-auto text-left">
        {/* Heading */}
        <h1 className="text-6xl font-semibold text-primary mb-12 text-left">
          Skills and Certificates
        </h1>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-6 justify-start">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="w-24 h-24 flex flex-col items-center justify-center border-2 border-primary 
                         rounded-xl shadow hover:scale-105 transition-transform"
            >
              <div className="text-4xl mt-2 text-primary">
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