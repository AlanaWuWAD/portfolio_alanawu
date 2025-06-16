import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useEffect, useRef, useState } from "react";

const Layout = () => {
  const headerRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(()=>{
    const appearance = new IntersectionObserver(
      ([entry])=>{
        setShowMenu(!entry.isIntersecting)
      },
      {threshold: 0.1}
    )

    if(headerRef.current) appearance.observe(headerRef.current)
    return () => {
      if (headerRef.current) appearance.unobserve(headerRef.current)
    }
  },[])

  return (
    <div>
      <header ref={headerRef}>
        <Header />
      </header>
      <main >
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <Menu visible={showMenu} /> 
    </div>
  );
};

export default Layout;
