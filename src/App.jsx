import { useState } from "react";
import Navbar from "./components/Navclsbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-dark text-white" : "bg-light text-dark"}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About dark={dark} setDark={setDark} />
      <Skills />
      <Projects dark={dark} setDark={setDark} />
      <Contact dark={dark} setDark={setDark} />
      <Footer />
    </div>
  );
}

export default App;