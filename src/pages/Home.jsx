import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {


  return (
    <div>
  {/* <modalContext.Provider value={{modal,setmodal}}> */}
      <Hero />
      <About />
      <Services />
      <Work />
      <Projects />
      <Contact />
      
    {/* </modalContext.Provider> */}
    </div>
  );
};

export default Home;
