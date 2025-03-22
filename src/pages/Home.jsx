import React from "react";
import Hero from "../components/Hero";
// import Banners from "../components/Banners";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Projects from "../components/Projects";
// import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
