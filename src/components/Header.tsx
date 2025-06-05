import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
    <div className="flex justify-between items-center m-3 ">
        <div className="flex justify-center items-end">
            <img className="w-12 h-12 rounded-full object-cover" src="removebg-preview.png" alt="" /><span className="comic-relief-bold text-slate-400 ">ALANAWOOO...</span>
        </div>
        <ul className="flex justify-between items-center gap-5">
            <HashLink smooth to={"/#about"} className="relative overflow-hidden group h-10 w-32">
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full">[ About ]</span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 text-stone-50">[ I’m Alana! ]</span>
            </HashLink>

            <HashLink smooth to="/#skills" className="relative overflow-hidden group h-10 w-32">
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full">[ Skills ]</span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 text-stone-50">[ Skills ]</span>
            </HashLink>

            <HashLink smooth to="/#experience" className="relative overflow-hidden group h-10 w-32">
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full">[ Experience ]</span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 text-stone-50">[ Experience ]</span>
            </HashLink>

            <HashLink smooth to="/#project" className="relative overflow-hidden group h-10 w-32">
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full">[ Projects ]</span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 text-stone-50">[ Projects ]</span>
            </HashLink>

            <HashLink smooth to="/#contsct" className="relative overflow-hidden group h-10 w-32">
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full">[ Contact ]</span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 text-stone-50">[ Contact ]</span>
            </HashLink>
        </ul>
    </div>
  )
}

export default Header