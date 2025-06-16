import { motion } from "framer-motion"

const Introduction = () => {
  return (
    <motion.div id="introduction" 
        className="flex flex-col items-center justify-center p-15 w-full md:h-1/2"
        initial="hidden"
        whileInView="visible"
        variants={{
            hidden:{},
            visible:{
                transition:{ staggerChildren:0.2}
            }
        }}
      >
        <motion.h1 className="text-3xl sm:text-8xl text-center font-bold "
            style={{ wordSpacing: "2rem" }}
            variants={{
                hidden:{opacity: 0, y: 90},
                visible:{opacity: 1, y: 0, transition: { duration: 0.8 }}
            }}
        >I’M ALANA WU</motion.h1>

        <motion.div className="flex flex-col sm:flex-row w-full max-w-6xl justify-between items-center gap-8 mt-8 border-y border-solid border-gray-800"
           variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
                }}>
            <motion.div className="flex-1 text-center sm:text-left text-2xl"
             variants={{
                hidden: { opacity: 0, y: 90 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}>
                <p>Reflection of my work as a front-end developer, showcasing different range of projects.</p>
            </motion.div>

            <motion.div className="flex-1 flex justify-center"
            variants={{
                hidden: { opacity: 0, y: -90 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            >
                <img className="fade-edges" src="/portfolio_alanawu/IMG_1565.jpg" alt="" />
            </motion.div>
            
            <motion.div className="flex-1 flex flex-col justify-end items-end text-center sm:text-right h-90"
            variants={{
                hidden: { opacity: 0, y: 90 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}>
                <p className="text-xl uppercase text-gray-300">available for freelance work</p>
                <h1 className="text-3xl md:text-5xl font-bold">SEP. 2025</h1>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Introduction