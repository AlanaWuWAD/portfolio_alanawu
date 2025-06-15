import About from "../components/About"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Introduction from "../components/Introduction"
import Project from "../components/Project"
import Skills from "../components/Skills"

const Home = () => {
  return (
    <>
        <Introduction />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Contact />
    </>
  )
}

export default Home