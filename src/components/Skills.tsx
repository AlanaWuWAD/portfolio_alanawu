import { SiPython, SiJavascript, SiHtml5, SiCss3, SiReact , SiPostman, SiGithub, SiGit, SiJira  } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaFileAlt, FaRobot } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { motion } from "framer-motion";

const skillIcons = {
  Python: <SiPython />,
  JavaScript: <SiJavascript />,
  HTML: <SiHtml5 />,
  "CSS / SCSS": <SiCss3 />,
  React: <SiReact />,
};
const devToolIcons = {
  "Visual Studio Code": <VscVscode  />,
  Postman: <SiPostman />,
  GitHub: <SiGithub />,
};
const projectToolIcons = {
  Git: <SiGit />,
  GitHub: <SiGithub />,
  JIRA: <SiJira />,
};
const qaSkillIcons = {
  "Test Case Writing": <FaFileAlt />,
  "Manual Testing": <MdChecklist />,
  "Automated Testing": <FaRobot />,
  "Postman API": <SiPostman />,
};

const Skills = () => {
  return (
    <motion.div id="skills" 
        className="flex flex-col gap-5 p-15 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{
            hidden:{},
            visible:{ 
                transition:{ staggerChildren:0.5}
            }
        }}
        > 
        <h2 className="text-xl pl-3 text-center md:text-left">[ Skills ]</h2>
        <motion.h3 
            className="uppercase text-4xl text-center"
            variants={{
                hidden:{opacity:0, y:90},
                visible:{opacity:1, y:0, transition:{duration: 0.3}}
            }}
            >My Advantages</motion.h3>
        <motion.section 
            className="relative flex flex-col md:flex-row md:justify-between md:w-11/12 h-full md:h-100 gap-5 m-15"
            variants={{
                hidden:{opacity:0, y:90},
                visible:{opacity:1, y:0, transition:{staggerChildren:0.5}}
            }}
        >
            <motion.div 
                className="skill-card relative md:left-15 md:top-0 flex flex-1 flex-col gap-10"
                variants={{
                    hidden:{opacity:0, y:90},
                    visible:{opacity:1, y:0, transition:{duration: 0.5}}
                }}
            >
                <div className="absolute hidden md:block md:top-10 ellipse"></div>

                <h3 className="relative z-10 md:top-7 flex-2 text-white text-xl md:text-2xl font-bold text-center">Development<br/> Tools</h3>

                <ul className="flex-4 space-y-4 text-stone-200">
                    {Object.entries(devToolIcons).map(([name, Icon], i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-2xl">{Icon}</span>
                            <span className="text-lg">{name}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            <motion.div 
                className="relative md:left-5 md:top-10 skill-card flex flex-1 flex-col gap-10"
                variants={{
                    hidden:{opacity:0, y:90},
                    visible:{opacity:1, y:0, transition:{duration: 0.5}}
                }}
            >
                <div className="absolute hidden md:block md:top-10 ellipse"></div>
                <h3 className="relative z-10 md:top-7 flex-2 text-white text-xl md:text-2xl font-bold text-center">Programming Languages</h3>
                <ul className="flex-4 space-y-4 text-stone-200">
                    {Object.entries(skillIcons).map(([name, Icon], i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-2xl">{Icon}</span>
                            <span className="text-lg">{name}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            <motion.div 
                className="skill-card relative md:right-5 md:top-0 flex flex-1 flex-col gap-10"
                variants={{
                    hidden:{opacity:0, y:90},
                    visible:{opacity:1, y:0, transition:{duration: 0.5}}
                }}>
                <div className="absolute hidden md:block md:top-10 ellipse"></div>
                <h3 className="relative z-10 md:top-7 flex-2 text-white text-xl md:text-2xl font-bold text-center">Project Collaboration</h3>
                <ul className="flex-4 space-y-4 text-stone-200">
                    {Object.entries(projectToolIcons).map(([name, Icon], i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-2xl">{Icon}</span>
                            <span className="text-lg">{name}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            <motion.div 
                className="skill-card relative md:right-15 md:top-10 flex flex-1 flex-col gap-10"
                variants={{
                    hidden:{opacity:0, y:90},
                    visible:{opacity:1, y:0, transition:{duration: 0.5}}
                }}
            >
                <div className="absolute hidden md:block md:top-10 ellipse"></div>
                <h3 className="relative z-10 md:top-7 flex-2 text-white text-xl md:text-2xl font-bold text-center">Software<br/> Testing</h3>
                <ul className="flex-4 space-y-4 text-stone-200">
                    {Object.entries(qaSkillIcons).map(([name, Icon], i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-2xl">{Icon}</span>
                            <span className="text-lg">{name}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.section>
    </motion.div>
  )
}

export default Skills