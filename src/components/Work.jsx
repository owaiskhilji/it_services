import React,{useEffect} from "react";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaGears } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";




const Workingsteps = [
  {
    icon: <MdOutlineDocumentScanner size={32} />,
    title: "Project Planning",
    description:
      "We will carefully plan the project, including all necessary details, resources, and timeline. This includes understanding your needs, budget, and technical requirements.",
  },
  {
    icon: <HiOutlineLightBulb size={32} />,
    title: "Design & Development",
    description:
      "We will create a visually appealing and user-friendly design for your website, and then develop the website using the technologies you've specified. We will also ensure that the website is responsive and mobile-friendly.",
  },
  {
    icon: <FaGears size={32} />,
    title: "Testing & Optimization",
    description:
      "We will thoroughly test your website to ensure that it meets all your expectations and that it is accessible to a wide range of users. We will also optimize your website for search engines and improve its loading speed.",
  },
  {
    icon: <GoGoal size={32} />,
    title: "Launch & Maintenance",
    description:
      "Once your website is live, we will monitor it for any issues or bugs, and make necessary adjustments to ensure that it continues to meet your needs and is accessible to a wide range of users.",
  },
];

const Work = () => {
  
    useEffect(() => {
      AOS.init({ duration: 3000,once:true });
    }, []);
  
  return (
    <div className="w-full px-4 md:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
        <div className="flex flex-col gap-4 px-8">
          <h3 className="text-3xl font-semibold text-gray-600 tracking-tighter font-serif">
            Here are the steps
          </h3>
          <h2 className="text-4xl font-bold tracking-light text-gray-600 capitalize font-serif">
            How do we <span className="text-[#6F4E37]">Work</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <p className="text-xl tracking-normal text-gray-500">
            We have a structured work process to ensure that the projects
            handled can be completed properly in a specified time range and
            according to your needs. Here are some common stages in the work
            process that we offer.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-8  py-5">
        {Workingsteps.map((step) => (
          <div
          data-aos="fade-up"
            key={step.title}
            className="p-4 bg-[#EFDCAB] shadow-sm shadow-[#6F4E37] rounded-lg text-center z-0"
          >
            <div className="flex items-center justify-center flex-col gap-4">
              {step.icon}
              <div className=" flex flex-col gap-2">
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="text-sm">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
