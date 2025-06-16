import { motion } from "framer-motion";

const sentences = [
  "I'm Alana Wu,",
  "a passionate front-end developer",
  "with a knack for crafting engaging and responsive web experiences.",
  "With a strong foundation in HTML, CSS."
];

const sentenceVariants = {
  hidden: { color: "#374151" }, 
  visible: {
    color: "#ffffff",
    transition: { duration: 1 }
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const About = () => {
  return (
    <div id='about' className="flex flex-col items-center md:items-start md:flex-row gap-6 p-6  md:p-15">
      <h2 className="md:flex-2 text-xl pl-3">[ About Me ]</h2>
      <motion.div
        className="flex-3 text-3xl leading-relaxed text-center md:text-left "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      >
        {sentences.map((text, index) => (
          <motion.p key={index} variants={sentenceVariants}>
            {text}
          </motion.p>
        ))}
    </motion.div>
    </div>
  )
}

export default About