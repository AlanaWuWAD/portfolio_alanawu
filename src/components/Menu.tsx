import { useState } from "react"

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <div className="fixed top-7 right-2 flex flex-col items-end">
        <img src="removebg-preview.png" alt="" className="w-10 h-10 fixed top-4 right-2 bg-amber-50 rounded-full cursor-pointer" onClick={()=>{setMenuOpen(!menuOpen)}}/>
        
        {menuOpen && (
            <div className="flex flex-col space-y-2 mt-20 transition-all duration-300 items-end">
                <a href="#introduction" className="px-3 py-1 text-sm hover:bg-amber-200 hover:text-black">Introduction</a>
                <a href="#about" className="px-3 py-1 text-sm hover:bg-amber-200 hover:text-black">About</a>
                <a href="#skills" className="px-3 py-1 text-sm hover:bg-amber-200 hover:text-black">Skills</a>
                <a href="#experience" className="px-3 py-1 text-sm hover:bg-amber-200 hover:text-black">Experience</a>
                <a href="#project" className="px-3 py-1 text-sm hover:bg-amber-200 hover:text-black">Project</a>
                <a href="#contsct" className="px-3 py-1 text-sm hover:bg-amber-200 hover:text-black">Contact</a>
            </div>
        )}
    </div>
  )
}

export default Menu