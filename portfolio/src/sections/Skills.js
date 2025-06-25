import React from 'react';
import { SiPython, SiJavascript, SiCplusplus, SiReact, SiTensorflow, SiGit, SiDatabricks, SiDynatrace, SiOpenai, SiKeras, SiDocker } from 'react-icons/si'; //https://react-icons.github.io/react-icons/icons/si/
import { VscAzureDevops } from 'react-icons/vsc';
import { PiMicrosoftExcelLogo } from 'react-icons/pi';
import { IoLogoMicrosoft} from 'react-icons/io5'; // Placeholder for Power BI icon
import { FaUsersGear } from 'react-icons/fa6';

export const skills_displayed = [
  { name: 'Python', icon: SiPython }
  ,{ name: 'Tensorflow', icon: SiTensorflow }
  ,{ name: 'Keras', icon: SiKeras }
  ,{ name: 'C++', icon: SiCplusplus }
  ,{ name: 'Azure DevOps', icon: VscAzureDevops }
  ,{ name: 'Databricks', icon: SiDatabricks }
  ,{ name: 'Dynatrace', icon: SiDynatrace }
  ,{ name: 'Git', icon: SiGit }
  ,{ name: 'Power BI', icon: IoLogoMicrosoft } // Placeholder for now
  ,{ name: 'Excel', icon: PiMicrosoftExcelLogo }
  ,{ name: 'OpenAI', icon: SiOpenai }
  ,{ name: 'React', icon: SiReact }
  ,{ name: 'JavaScript', icon: SiJavascript }
  ,{ name: 'Docker', icon: SiDocker }
  // Add more skills as needed
];

export const skills_all = [
  ...skills_displayed,
  { name: 'Contextual Engineering', icon: FaUsersGear}
]

function Skills() {
  return (
    <section
      id="Skills"
      className="flex flex-col items-start justify-center p-8 bg-background "
    >
      <div className="max-w-5xl mx-auto w-full text-left">
        {/* Heading */}
        <h1 className="text-6xl font-semibold text-primary mb-12 text-left">
          My Skills and Certificates
        </h1>

        <div className="grid grid-cols-7 gap-y-8 max-w-5xl w-full items-center justify-items-center mx-auto">
          {skills_displayed.map((skill) => (
            <div
              key={skill.name}
              className="w-28 h-28 flex flex-col items-center justify-center border-2 border-primary 
                         rounded-xl shadow hover:scale-105 transition-transform p-4"
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