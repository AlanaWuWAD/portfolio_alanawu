import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide } from "swiper/react";
import { FaGithub } from "react-icons/fa";

const members = [
  { name: "Beauty Shop", role: "Discover stylish and affordable clothing for every occasion", img: "/portfolio_alanawu/project_img/beautyshop.png", link:"https://github.com/Cornerstone-CICCC/nodejs-midterm-project-AlanaWuWAD" },
  { name: "Ddsgnr - Clean Home", role: "Reliable and professional home cleaning services", img: "/portfolio_alanawu/project_img/cleanhome_web.png", link:"https://github.com/Cornerstone-CICCC/web-2-final-project-web2-final-team3", website: "https://ddsgnr-cleanhome.vercel.app/" },
  { name: "Kanban Board", role: "Task management tool with a clear, visual Kanban board", img: "/portfolio_alanawu/project_img/kanban.png", link:"https://github.com/Cornerstone-CICCC/oop-and-ts-midterm-AlanaWuWAD" },
  { name: "Sprout - Kids Diary", role: "A digital journal of self-growth and reflection", img: "/portfolio_alanawu/project_img/kidsdiary_sprout.png", link:"https://github.com/Cornerstone-CICCC/nodejs-midterm-project-AlanaWuWAD" },
  { name: "Popcorn Picks", role: "Popular New Releases – Movies & Serie", img: "/portfolio_alanawu/project_img/movie_web.png", link:"https://github.com/Cornerstone-CICCC/web-2-midterm-project-AlanaWuWAD/tree/main/img", website: "https://alanawuwad.github.io/popcornpicks/" },
];

const Project = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  return (
    <div id="project" className="p-15">
      <h2 className="text-xl pb-10">[ Project ]</h2>
        <section>
            <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={10}
            slidesPerView={3}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true}}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSlideChange={(swiper) => {
              setSlideIndex(swiper.realIndex)
            }}
            className='relative'
            
          >
            { members.map((slide, index) => (
              <SwiperSlide className='rounded-lg' key={index}>
                <div className={`p-2 rounded-lg shadow-md h-80 sm:h-64 md:h-80 flex flex-col justify-center items-center text-center overflow-hidden ${slideIndex === index ? "bg-stone-600 text-black":"bg-stone-700/50 text-black"}`}>
                  <img src={slide.img} alt={slide.name} className="rounded-xl h-60"/>
                  <h1 className="font-semibold text-2xl text-center pt-1 text-white">{slide.name}</h1>
                  <p className=" h-10 text-stone-300  text-sm max-w-xs sm:max-w-md md:max-w-lg w-full px-1 font-semibold">{slide.role}</p>
                  <a href={slide.link}><FaGithub className="text-neutral-200"/></a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx global>{`
            .swiper-pagination {
              position: relative;
              margin-top: 1.5rem;
              display: flex;
              justify-content: center;
              gap: 0.5rem;
            }
            .swiper-pagination-bullet {
              width: 4px;
              height: 4px;
              background: #a8a29e;
              opacity: 1;
              border-radius: 9999px;
              transition: background 0.3s;
            }
            .swiper-pagination-bullet-active {
              background: #fff;
            }
          `}</style>
        </section>
    </div>
  )
}

export default Project