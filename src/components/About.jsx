import React,{useEffect} from "react";
import img from "../assets/about/about.png";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {

  useEffect(() => {
    AOS.init({ duration: 3000,once:true });
  }, []);



  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 px-10 pt-8">
  
  <div data-aos="zoom-in" className="flex flex-col gap-4 px-8">
    <h3 className="text-3xl font-semibold text-gray-500 font-serif">
      About Us
    </h3>
    <h2 className="text-4xl font-bold text-gray-600 tracking-light capitalize font-serif">
      Transform Your Brand with  
      <span className="text-[#6F4E37]"> FlestaPro</span>
    </h2>
    <p className="text-md tracking-normal text-gray-500">
      We specialize in **Web Development, Web Design, and Graphic Design**,  
      delivering sleek, high-performance digital solutions that make your  
      business **stand out and grow.**  
    </p>
    <p className="text-lg tracking-normal text-gray-500">
      Whether you need a **stunning website**, a **modern UI/UX design**,  
      or **eye-catching graphics**, FlestaPro turns your vision into reality.  
      We blend creativity with cutting-edge technology to craft experiences  
      that leave a lasting impact.  
    </p>
    <p className="text-lg tracking-normal text-gray-500 font-semibold">
      Let's build something amazing together! 🚀
    </p>
    <Link
      to={"/about"}
      title="Learn more about us"
      className="text-xl w-fit font-bold text-[#6F4E37] hover:underline flex items-center gap-1"
    >
      Learn More
      <GoArrowUpRight className="inline-block" />
    </Link>
  </div>
  <div data-aos="zoom-in" className="w-full flex items-center justify-center">
    <img
      src={img}
      alt="About Webment Digital"
      className="w-full max-w-sm rounded-lg object-cover"
    />
  </div>
</div>


  );
};

export default About;
