import React from "react";
import { Link } from "react-router-dom";

// #6F4E37
// #EFDCAB

const ServiceCard = ({ service }) => {
  return (
    <div className="z-20 border-2 border-[#EFDCAB] p-4 w-full h-full rounded-lg flex flex-col gap-4">
      <h2 className="text-xl text-[#EFDCAB] font-bold font-rowdies">
        {service?.title}
      </h2>
      <p className="text-sm">{service?.description}</p>
      <Link
        to={`/services/service?type=${service?.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
        className="px-4 py-2 w-fit rounded-lg bg-[#EFDCAB] hover:bg-[#6F4E37] hover:border-2 text-gray-600 hover:text-white"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;
