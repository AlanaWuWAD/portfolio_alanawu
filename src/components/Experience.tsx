import { VscChip } from "react-icons/vsc";
import { LuBrainCircuit } from "react-icons/lu";
import{motion, useScroll, useTransform} from "framer-motion"
import { useRef, useLayoutEffect, useState } from "react";

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // get scrollYProgress
    const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    });

    // get scroll to height
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // get icon y position
    const iconMaxY = 900
    const y =useTransform(scrollYProgress,[0,1],[0,iconMaxY])

  return (
    <div id="experience">
        <h2 className="flex-2 text-xl pl-3">[ Experiences ]</h2>
        <section ref={containerRef} className="relative flex flex-col h-[1200px]">
        
        {/* timeline */}
            <motion.div
                className="absolute left-[41%] top-[80px] origin-top w-[2px]  bg-gray-600/40 z-0 -translate-x-1/2"
                style={{ height: `${iconMaxY}px`, scaleY }} />

        {/* Sticky icon */}
            <motion.div 
            style={{y}}
            className="absolute top-[80px] w-15 h-15 rounded-full bg-slate-200 border-4 border-black left-[41%] z-10 -translate-x-1/2 ring-2 ring-stone-500/20 shadow-[0_0_30px_5px_rgba(122,222,200,0.3)] ">
                <img src="/circle-removebg-preview.png" className="w-full h-full object-contain" />
            </motion.div>

        {/* contents  */}
            <div className="flex justify-around p-5">
                <p className="basis-1/3 m-10 text-xl font-bold leading-loose"><span className=" text-stone-400">| Sep. 2024 - Aug. 2025 </span><br/> Cornerstone International Community College of Canada </p>
                <div className="basis-1/2  m-10 leading-relaxed">
                    <h3 className="text-3xl pb-3 font-bold">Full Stack Developer - As a student !</h3>
                    <p className="text-xl text-gray-300">Developed web applications using JavaScript, React.js. Implemented RESTful APIs and integrated with MySql databases. Collaborated with stakeholders to define project requirements and timelines.</p>
                </div>
            </div>

            <div className="flex justify-around p-5">
                <p className="basis-1/3 m-10 text-xl font-bold leading-loose"><span className="text-stone-400">| Mar. 2018 - Apr. 2024 </span><br/>MEDIATEK Inc. </p>
                <div className="basis-1/2 text-xl m-10 leading-relaxed">
                    <h3 className="text-3xl pb-3 font-bold">Software Quality Assurance Engineer</h3>
                    <fieldset className="flex flex-col justify-start text-xl space-y-3 text-gray-300">
                        <p className="flex items-start gap-2"><LuBrainCircuit className=" text-2xl"/>Explore new features and develop test cases to verify functions of various electronic products.</p>
                        <p className="flex items-start gap-2"><LuBrainCircuit className=" text-2xl"/> Analyze issues from customers and develop regression case to ensure product quality.</p>
                        <p className="flex items-start gap-2"><LuBrainCircuit className=" text-2xl"/> Benchmark experiments and tests for new product development.</p>
                    </fieldset>
                </div>
            </div>

            <div className="flex justify-around p-5">
                <p className="basis-1/3 m-10 text-xl font-bold leading-loose"><span className=" text-stone-400">| Oct. 2015 - Mar. 2018</span><br/>FOXCONN Inc. </p>
                <div className="basis-1/2 text-xl m-10 leading-relaxed">
                    <h3 className="text-3xl pb-3 font-bold">Hardware Engineer</h3>
                    <fieldset className="flex flex-col justify-start text-xl space-y-3 text-gray-300">
                        <p className="flex items-start gap-2"><VscChip className=" text-2xl"/>Measure signal's quality for communication products.</p>
                        <p className="flex items-start gap-2"><VscChip className=" text-2xl"/>Confirm that the voltage and current quality comply with the specifications.</p>
                        <p className="flex items-start gap-2"><VscChip className=" text-2xl"/>Solve problems from production line.</p>
                    </fieldset>
                </div>
            </div>
            
               <div className="flex justify-around p-5">
                <p className="basis-1/3 m-10 text-xl font-bold leading-loose"><span className=" text-stone-400">| Oct. 2015</span><br/>National Yang Ming Chiao Tung University</p>
                <div className="basis-1/2 text-xl m-10 leading-relaxed">
                    <h3 className="text-3xl pb-3 font-bold">Master Degree</h3>
                    <fieldset className="text-xl text-gray-300">
                        <p>Major - Digital Signal Processing</p>
                    </fieldset>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Experience