import About from "../components/About"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Introduction from "../components/Introduction"
import Menu from "../components/Menu"
import Skills from "../components/Skills"

const Home = () => {
  return (
    <>
        <Introduction />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Menu />
    </>
  )
}

export default Home