import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";

const Contact = () => {
  return (
    <div id="contact" className="flex justify-around items-center w-full h-25 border-y border-gray-800 p-10">
        <div className="flex-1">
          <h3 className="text-sm text-gray-300 mb-1">Email Me</h3>
          <p className="font-bold text-xl mb-1 text-white">alanawu@gmail.com</p>
        </div>

        <div className="flex-1">
          <h3 className="text-sm text-gray-300 mb-1">Location</h3>
          <p className="font-bold text-xl mb-1 text-white">609 W Hastings St, Vancouver, BC V6B 4W4</p>
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