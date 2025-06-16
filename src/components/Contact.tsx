import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col md:flex-row gap-1.5 md:justify-around justify-center items-center w-full md:h-24 border-y border-gray-800 p-10">
        <div className="flex-2 flex justify-start gap-3">
          <h3 className="text-sm text-gray-300 mb-1">Email Me</h3>
          <p className="font-bold text-xl mb-1 text-white">alanawu@gmail.com</p>
        </div>

        <div className="flex-2 flex justify-start gap-3">
          <h3 className="text-sm text-gray-300 mb-1">Location</h3>
          <p className="font-bold text-lg mb-1 text-white">609 W Hastings St, Vancouver, BC V6B 4W4</p>
        </div>

        <div className="flex-1 flex justify-end pb-3 md:pb-0">
          <a href="/portfolio_alanawu/contact" className="group relative flex items-center gap-2 underline underline-offset-8 decoration-1 decoration-white hover:decoration-black px-4 py-1 rounded overflow-hidden text-white hover:text-white hover:bg-gray-700 cursor-pointer "><span className="transition-colors duration-300 group-hover:text-black ">Contact Me </span><MdArrowOutward className="transition-transform duration-200 group-hover:text-black group-hover:scale-125 delay-100 "/></a>
        </div>

        <div className="flex-1 flex justify-end gap-3 text-xl">
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-700 group relative overflow-hidden cursor-pointer 
          after:content-empty after:absolute after:inset-0 after:bg-white after:rounded-full after:scale-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-105">
          <GrFacebookOption className="text-white relative z-10 transition-colors duration-500 group-hover:text-black"/>
          </div>

          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-700 group relative overflow-hidden cursor-pointer 
          after:content-empty after:absolute after:inset-0 after:bg-white after:rounded-full after:scale-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-105">
          <TiSocialLinkedin className="text-white relative z-10 transition-colors duration-500 group-hover:text-black"/>
          </div>

          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-700 group relative overflow-hidden cursor-pointer 
          after:content-empty after:absolute after:inset-0 after:bg-white after:rounded-full after:scale-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-105">
          <BsWhatsapp className="text-white relative z-10 transition-colors duration-500 group-hover:text-black"/>
          </div>

          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-700 group relative overflow-hidden cursor-pointer 
          after:content-empty after:absolute after:inset-0 after:bg-white after:rounded-full after:scale-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-105">
          <RiInstagramFill className="text-white relative z-10 transition-colors duration-500 group-hover:text-black"/>
          </div>
        </div>
    </div>
  )
}

export default Contact