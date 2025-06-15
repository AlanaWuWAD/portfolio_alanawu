import { useState } from "react"

const Menu = ({visible}) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <div className={`fixed top-7 right-2 flex flex-col items-end transition-opacity duration-500 ease-in-out ${visible? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <img src="/portfolio_alanawu/123.png" alt="" className="w-10 h-10 fixed top-4 right-2 bg-amber-50 rounded-full cursor-pointer" onClick={()=>{setMenuOpen(!menuOpen)}}/>
        
        
            <div className={`flex flex-col space-y-2 mt-12 transition-all duration-300 transform origin-top-right ease-out items-end 
            ${menuOpen? "opacity-100 translate-y-0 max-h-96":"opacity-0 -translate-y-4 max-h-0"}`}>
                <a href="#introduction" className="px-3 py-1 text-sm hover:bg-amber-200 hover:text-black">Introduction</a>
                <a href="#about" className="px-3 py-1 text-sm hover:bg-amber-200 hover:text-black">About</a>
                <a href="#skills" className="px-3 py-1 text-sm hover:bg-amber-200 hover:text-black">Skills</a>
                <a href="#experience" className="px-3 py-1 text-sm hover:bg-amber-200 hover:text-black">Experience</a>
                <a href="#project" className="px-3 py-1 text-sm hover:bg-amber-200 hover:text-black">Project</a>
                <a href="#contact" className="px-3 py-1 text-sm hover:bg-amber-200 hover:text-black">Contact</a>
            </div>
       
    </div>
  )
}

export default Menu