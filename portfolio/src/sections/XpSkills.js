import React from 'react';
import { SiPython, SiJavascript, SiCplusplus, SiReact, SiTensorflow, SiGit } from 'react-icons/si'; //https://react-icons.github.io/react-icons/icons/si/

const skills = [
    { name: 'Python', icon: SiPython },
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Git', icon: SiGit },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: SiReact },
];

function XpSkills() {
    return (
        <section
            id="XpSkills"
            className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 bg-background">
            <div className="max-w-xl">
                <h1 className="text-6xl font-semibold text-primary mb-6">
                    Experience & Skills
                </h1>
                <p className="text-xl text-text mb-6">
                    Yappppppppppppppppppppppppppppppppppppppppp <br />
                    Yappppppppppppppppppppppppppppppppppppppppp <br />
                    Yappppppppppppppppppppppppppppppppppppppppp <br />
                    Yappppppppppppppppppppppppppppppppppppppppp <br />
                    Yappppppppppppppppppppppppppppppppppppppppp <br />
                </p>


            </div>
            <div className="flex flex-wrap gap-6 justify-center">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        // TODO: experiment with different shapes, not a fan of the circle right now
                        className="w-24 h-24 flex flex-col items-center justify-center border-2 border-primary rounded-full shadow hover:scale-105 transition-transform" 
                    >
                        <div className={`text-4xl text-primary`}>
                            <skill.icon />
                        </div>
                        <span className="text-xs mt-1 text-text">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default XpSkills;