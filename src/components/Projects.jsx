import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import devImg from "../assets/services/webdev.png";
import designImg from "../assets/services/webdes.png";
import grades from "../assets/services/grades.png";

const Projects = () => {
  return (
    <div className="w-full p-4 h-full min-h-screen border-t border-[#EFDCAB]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 my-8">
        <div className="flex flex-col gap-4 px-8">
          
          <h2 className="text-4xl font-bold tracking-light font-serif text-gray-600">
            Orus Projects -{" "}<span className="text-[#6F4E37]">A Glimpse</span>{" "}of Our Hard Work
          </h2>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <p className="text-xl tracking-normal">
            We provide digital markerting services to help clients increase
            visibility and reach their target audience more effectively. We have
            assisted various clients, some of the results that have been
            achieved are below:
          </p>
          <div className="flex gap-4">
            <Link
              className="text-xl font-semibold text-[#EFDCAB] rounded-lg py-2 hover:text-[#6F4E37] transition-colors duration-300 w-fit"
              to={"/services"}
              title="view our work"
            >
              View Our Work
              <GoArrowUpRight className="inline-block" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 items-center">
        <div className="flex flex-col gap-2 p-2">
          <img
            src={devImg}
            alt="web dev image"
            className="w-full max-w-sm h-64 md:h-96 rounded-lg object-cover"
          />
          <h3 className="text-2xl font-bold tracking-tighter font-serif text-gray-600">
            Web Development
          </h3>
          <p className="text-md w-full max-w-sm text-gray-500 tracking-normal">
          At FlestaPro, we craft bespoke web development solutions to elevate your business. Our cutting-edge technologies and user-focused designs ensure a standout digital presence.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <img
            src={designImg}
            alt="web design image"
            className="w-full max-w-sm h-64 md:h-96 rounded-lg object-cover"
          />
          <h3 className="text-2xl font-bold tracking-tighter font-serif text-gray-600">Web Design</h3>
          <p className="text-md w-full max-w-sm text-gray-500 tracking-normal">
            We create visually appealing and user-friendly websites that enhance
            your brand's identity and customer experience.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <img
            src={grades}
            alt="marketing image"
            className="w-full max-w-sm h-64 md:h-96 rounded-lg object-cover"
          />
          <h3 className="text-2xl font-bold tracking-tighter font-serif text-gray-600">Graphic Design</h3>
          <p className="text-md w-full max-w-sm text-gray-500 tracking-normal">
          FlestaPro provides innovative and creative graphic design solutions to make your brand stand out. We specialize in logo design, social media visuals, and marketing materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
