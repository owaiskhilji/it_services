import React, { useEffect ,useState} from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import Banners from "./Banners";
import modalContext from "../ContextApi/CreateContext"


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);


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
  <button 
 onClick={() => setIsOpen(true)}
  className="bg-[#6F4E37] hover:transition-2 hover:shadow-md py-2 rounded-md w-full md:w-36 lg:w-36 font-semibold">projects</button>
  
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

      {isOpen && (
                <div className="fixed inset-0 p-4 flex justify-center items-center w-full h-full z-[1000] bg-[rgba(0,0,0,0.5)]">
                    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                        <div className="flex items-center pb-3 border-b border-gray-300">
                            <h3 className="text-[#6F4E37] font-serif text-2xl font-semibold flex-1">Projects</h3>
                            {/* Close Icon */}
                            <svg
                                onClick={() => setIsOpen(false)}
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3.5 h-3.5 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                                viewBox="0 0 320.591 320.591">
                                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
                            </svg>
                        </div>

                        <div className="my-6">
                            <h3 className="cursor-pointer text-gray-600 text-lg leading-relaxed hover:underline hover:text-[#6F4E37]">
                            Web Develpoment & Design
                            </h3>
                        </div>
                        <div className="my-6">
                            <h3 className="text-gray-600 cursor-pointer text-lg leading-relaxed hover:underline hover:text-[#6F4E37]">
                            Graphic Design
                            </h3>
                        </div>
                    </div>
                </div>
            )}

    </div>
  );
};

export default Hero;
