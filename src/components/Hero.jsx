import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import Banners from "./Banners";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <div className="relative w-full bg-white text-white min-h-screen overflow-x-hidden px-8">
      {/* Banner Section Overlapping */}
      <div className="absolute top-0 left-0 w-full mt-8">
        <Banners />
      </div>

      {/* Hero Content */}
      <div className="relative top-16 flex flex-col md:flex-row gap-10 pt-[250px] px-6 md:px-12">
   <div className="flex flex-col flex-grow space-y-4 " >
  <h1 className="text-2xl md:text-4xl lg:text-4xl text-gray-600 font-bold tracking-tight leading-snug font-serif">
    Elevate Your Brand with{" "}
        <span className="text-[#6F4E37]">
          <Typewriter
            words={["FlestaPro","FlestaPro","FlestaPro" ]}
            loop={true}
            cursor
            // cursorStyle="|"
            typeSpeed={300}
            deleteSpeed={200}
            delaySpeed={2000}
          />
        </span>
  </h1>
  <h2 className="text-xl md:text-2xl text-gray-600">
    Your Trusted Growth Partner
  </h2>
  <p className="text-base md:text-lg text-gray-500 max-w-lg">
    We craft **stunning websites, impactful designs, and powerful digital solutions**  
    that help businesses **stand out & grow** in the digital world.
  </p>
  <p className="text-base md:text-lg text-gray-500 max-w-lg ">
    Our expertise:  
    <span className="text-[#6F4E37] font-semibold"> Web Development</span>,  
    <span className="text-[#6F4E37] font-semibold"> Web Design</span>, and  
    <span className="text-[#6F4E37] font-semibold"> Graphic Design</span>.  
    Let’s build something great together! 🚀
  </p>
  <button className="bg-[#6F4E37] hover:transition-2 hover:shadow-md py-2 rounded-md w-full md:w-36 lg:w-36 font-semibold">projects</button>
</div>


        {/* Right Side Content */}
        <div data-aos="fade-left" className="h-fit w-full md:w-1/3 lg:w-1/4 flex flex-col gap-6">
          <p className="text-lg border-l-4 border-[#6F4E37] pl-4 text-gray-500 leading-relaxed">
            We craft seamless digital experiences with cutting-edge technologies.
            Our expertise includes <span className="text-[#6F4E37] font-semibold">Web Development</span>,  
            <span className="text-[#6F4E37] font-semibold"> Web Design</span>, and  
            <span className="text-[#6F4E37] font-semibold"> Graphic Design</span>.
            Elevate your brand with stunning visuals and powerful digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
