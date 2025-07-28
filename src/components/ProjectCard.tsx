'use client';
import {motion} from "framer-motion";
import {IconType} from "react-icons";

interface Props {
    Project: {
        name: string,
        description: string,
        link: string,
        skills:
            {
                name: string,
                icon: IconType,
                color: string
            }[]

    }
}

function ProjectCard({Project}: Props) {
    const {name, description, link, skills} = Project;
    return (
        <motion.a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 rounded-xl p-6 text-left transition-shadow duration-300 shadow hover:shadow-blue-500/30"
        >
            <div className={'flex items-center justify-between'}>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    {name}
                </h3>
                <span className={'flex gap-2'}>{
                    skills.map((skill, i) => (
                        <skill.icon size={25}
                                    key={skill.name}
                                    style={{color: skill.color}}/>
                    ))
                }

                            </span>

            </div>
            <p className="text-gray-300 text-sm">{description}</p>
            <span className="inline-block mt-4 text-sm text-blue-500 hover:underline">
                View Project →
              </span>
        </motion.a>
    );
}

export default ProjectCard;