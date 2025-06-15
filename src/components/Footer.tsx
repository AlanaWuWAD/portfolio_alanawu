import {HashLink} from "react-router-hash-link"

const Footer = () => {
    return (
        <div className="border-y border-gray-800 p-5 w-full ">
            <div className="flex justify-between items-center">
                <div className="text-gray-400">
                    © Copyright - Designed by  <span className="text-slate-50">ALANAWU</span> Jun. 2025
                </div>
                <ul className="flex justify-between items-center ">
                    <HashLink smooth to={"/#about"} className="flex-1 relative overflow-hidden group h-7 w-20">
                        <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full text-gray-400">About</span>
                        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 text-gray-400">I’m Alana!</span>
                    </HashLink>

                    <HashLink smooth to="/#skills"  className="flex-1 relative overflow-hidden group h-7 w-20">
                        <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full text-gray-400">Skills</span>
                        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 text-gray-400">Skills</span>
                    </HashLink>

                    <HashLink smooth to="/#experience" className="flex-1 relative overflow-hidden group h-7 w-20">
                        <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full text-gray-400">Experience</span>
                        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 text-gray-400">Experience</span>
                    </HashLink>

                    <HashLink smooth to="/#project" className="flex-1 relative overflow-hidden group h-7 w-20">
                        <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full text-gray-400">Projects</span>
                        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 text-gray-400">Projects</span>
                    </HashLink>

                    <HashLink smooth to="/#contsct" className="flex-1 relative overflow-hidden group h-7 w-20">
                        <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full text-gray-400">Contact</span>
                        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 text-gray-400">Contact</span>
                    </HashLink>
                </ul>
            </div>

        </div>
    )
}

export default Footer