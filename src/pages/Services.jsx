import React from "react";
import { FaUsers, FaBriefcase, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";
import hookpic from "../assets/services/s-close.jpg";
import img2 from "../assets/services/services-hero.avif";
import { servicesList } from "../config/data";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[#6F4E37] text-white p-8">
    <div>
      <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tighter font-rowdies text-center mb-8">
        <span className="text-[#EFDCAB] font-serif"> Our</span> Services
      </h1>

      {/* Services Section */}
      <div className="w-full flex flex-col md:flex-row gap-4 p-4">
        <img
          src={img2}
          alt="Our Story"
          className="w-full h-full  max-h-[25rem] md:max-h-[30rem] object-cover rounded-lg mb-4"
        />
        <div className="flex flex-col gap-4 mb-4 border-b-2 border-l-2 border-[#EFDCAB] rounded-lg p-4">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4 font-serif">
            We're <span className="text-[#EFDCAB]"> Dedicated</span>
          </h2>
          <p className="text-xl text-white">
          At FlestaPro, we specialize in Web Development, Web Design, and Graphic Design to bring your digital vision to life. Whether you need a modern, high-performance website, a stunning, user-friendly design, or eye-catching graphics that elevate your brand, we’ve got you covered. Our expert team blends creativity with technology to craft custom solutions that help your business stand out in the digital world. With FlestaPro, your brand doesn’t just grow—it thrives!
          </p>
          <Link
            to={"/contact"}
            className="px-4 py-2 my-6 w-fit rounded-lg hover:bg-[#6F4E37] bg-[#EFDCAB] hover:border-2 text-gray-600 hover:text-white"
          >
            Talk to Us
          </Link>
        </div>
      </div>
      {/* Our Services */}
      <div className="my-6">
        <h2 className="text-3xl font-bold font-serif text-[#EFDCAB] mb-4 text-center">
          What we offer
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      {/* Hook Picture*/}
      <div className="w-full flex flex-col md:flex-row gap-4 p-4">
        <img
          src={hookpic}
          alt="Hook Picture"
          className="w-full h-full max-h-[25rem] md:max-h-[30rem] object-cover rounded-lg mb-4"
        />
      </div>
      {/* Achievements Section */}
      <div className="w-full flex flex-col gap-4 p-4">
        <div className="grid grid-cols-1">
          <div className="p-4 bg-white shadow-[#EFDCAB] shadow-md text-gray-600 rounded-lg flex flex-col items-center gap-4">
            <FaBriefcase className="text-[#EFDCAB] text-5xl" />
            <h3 className="text-2xl font-bold font-serif">Projects</h3>
            <p className="text-lg text-center text-gray-500">
            We bring your ideas to life with expert Web Development, Web Design, and Graphic Design solutions. Combining creativity and technology to deliver excellence in every project!
                       </p>
            <Link
              //to={"/portfolio"}
              className="text-white px-4 py-2 my-6 w-fit rounded-lg bg-[#6F4E37] hover:bg-[#EFDCAB] hover:text-gray-600"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
