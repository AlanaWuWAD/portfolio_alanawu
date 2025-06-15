import { SiPython, SiJavascript, SiHtml5, SiCss3, SiReact , SiPostman, SiGithub, SiGit, SiJira  } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaFileAlt, FaRobot } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";

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
    <div id="skills" className="flex flex-col gap-5"> 
        <h2 className="text-xl pl-3">[ Skills ]</h2>
        <h3 className="uppercase text-4xl text-center">My Advantages</h3>
        <section className="relative flex justify-between w-11/12 h-100 gap-5 m-15">
            <div className="skill-card relative left-15 top-0 flex flex-1 flex-col gap-10">
                <div className="absolute top-10 ellipse"></div>

                <h3 className="relative z-10 top-7 flex-2 text-white text-2xl font-bold text-center">Development<br/> Tools</h3>

                <ul className="flex-4 space-y-4 text-stone-200">
                    {Object.entries(devToolIcons).map(([name, Icon], i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-2xl">{Icon}</span>
                            <span className="text-lg">{name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative left-5 top-10 skill-card flex flex-1 flex-col gap-10">
                <div className="absolute top-10 ellipse"></div>
                <h3 className="relative z-10 top-7 flex-2 text-white text-2xl font-bold text-center">Programming Languages</h3>
                <ul className="flex-4 space-y-4 text-stone-200">
                    {Object.entries(skillIcons).map(([name, Icon], i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-2xl">{Icon}</span>
                            <span className="text-lg">{name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="skill-card relative right-5 top-0 flex flex-1 flex-col gap-10">
                <div className="absolute top-10 ellipse"></div>
                <h3 className="relative z-10 top-7 flex-2 text-white text-2xl font-bold text-center">Project Collaboration</h3>
                <ul className="flex-4 space-y-4 text-stone-200">
                    {Object.entries(projectToolIcons).map(([name, Icon], i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-2xl">{Icon}</span>
                            <span className="text-lg">{name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="skill-card relative right-15 top-10 flex flex-1 flex-col gap-10">
                <div className="absolute top-10 ellipse"></div>
                <h3 className="relative z-10 top-7 flex-2 text-white text-2xl font-bold text-center">Software<br/> Testing</h3>
                <ul className="flex-4 space-y-4 text-stone-200">
                    {Object.entries(qaSkillIcons).map(([name, Icon], i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-2xl">{Icon}</span>
                            <span className="text-lg">{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Skills