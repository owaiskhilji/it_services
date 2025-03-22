import React from "react";
import { FaUsers, FaBriefcase, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/about/c-1.jpg";
import img2 from "../assets/about/c-2.jpg";

const About = () => {
  return (
    <div className=" w-full h-full min-h-screen bg-[#6F4E37] text-white p-8">
    <div>
      <h1 className=" text-3xl md:text-5xl lg:text-5xl font-bold tracking-tighter font-serif text-center mb-8">
        <span className="text-[#EFDCAB]"> About</span> Us
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* About Section */}
        <div className="w-full flex flex-col gap-4 md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4 font-serif">Our Story</h2>
          <p className="text-xl mb-4 border-b-2 border-l-2 border-[#EFDCAB] rounded-lg p-4">
          We are a creative digital agency driven by a passion for designing and developing innovative digital solutions. Our goal is to help businesses grow and strengthen their online presence in the digital world.
          </p>
          <img
            src={img2}
            alt="Our Story"
            className="w-full h-full  max-h-[25rem] md:max-h-[30rem] object-cover rounded-lg mb-4"
          />
        </div>
        {/* Team Section */}
        <div className="w-full md:w-1/2 p-4 bg-white text-gray-600 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-600 font-serif">
            Meet Our Team
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 mb-4">
              <FaUsers className="text-[#EFDCAB] text-3xl" />
              <span className="text-lg font-bold text-gray-600">Innovative Minds Behind FlestaPro
              </span>
            </div>
            <p className="text-lg mb-4 text-gray-500">
            At FlestaPro, our team is a blend of skilled developers, creative designers, and strategic thinkers who are passionate about crafting exceptional digital experiences. We specialize in Web Development, Web Design, and Graphic Design, working collaboratively to turn ideas into reality. With a commitment to innovation and excellence, we bring visionary solutions that elevate brands and make an impact in the digital world.
            </p>
            <img
              src={img1}
              alt="Team"
              className="w-full h-full max-h-[25rem] md:max-h-[30rem] object-cover rounded-lg mb-4"
            />
            <Link
              to={"/services"}
              className="bg-[#6F4E37] hover:bg-[#EFDCAB] hover:text-gray-500 hover:border-2 text-white font-bold px-4 py-2 rounded-lg w-fit"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
  
      </div>
    </div>
  );
};

export default About;
