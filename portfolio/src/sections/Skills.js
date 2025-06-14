import React from 'react';
import { SiPython, SiJavascript, SiCplusplus, SiReact, SiTensorflow, SiGit } from 'react-icons/si'; //https://react-icons.github.io/react-icons/icons/si/

const skills = [
    { name: 'Python', icon: SiPython },
    { name: 'C++', icon: SiCplusplus },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Tensorflow', icon: SiTensorflow },
    { name: 'React', icon: SiReact },
    { name: 'Git', icon: SiGit },
];

function Skills() {
    return (
        <section
            id="Skills"
            className="flex flex-col items-center justify-center gap-8 p-8 bg-background"
        >
            {/* Heading */}
            <h1 className="text-6xl font-semibold text-primary mb-4 text-center">
                Skills
            </h1>

            {/* Skill Badges Container */}
            <div className="flex flex-wrap gap-6 justify-center max-w-4xl">
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
        </section>
    );
}


export default Skills;