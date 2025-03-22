import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import webhero from "../assets/design-hero.jpg";
import devhero from "../assets/dev-hero.jpg";
import socialhero from "../assets/social-hero.jpg";
import brandinghero from "../assets/branding-hero.jpg";
import adhero from "../assets/advertise-hero.jpg";

import devill from "../assets/ills/dev-ill.jpg";
import designill from "../assets/ills/design-ill.jpg";
import socialill from "../assets/ills/social-ill.jpg";
import brandingill from "../assets/ills/brand-ill.jpg";
import adill from "../assets/ills/ad-ill.jpg";

import website from "../assets/Website.jpg";

export const servicesList = [
  {
    id: 1,
    title: "Web Design",
    heropic: webhero,
    ill: designill,
    endpic: website,
    description:
      "We craft visually stunning, user-centric web designs that ensure seamless navigation and high engagement. Our designs are modern, responsive, and conversion-focused.",
    keyFeatures: [
      "Fully Responsive Layouts",
      "User-Friendly & Interactive UI",
      "Custom Graphics & Animations",
      "Optimized for Fast Loading",
      "Mobile-First Approach",
      "Conversion-Focused Design",
    ],
    process: [
      "Consultation & Research",
      "Wireframing & Prototyping",
      "UI/UX Design",
      "Development & Testing",
      "Final Review & Launch",
    ],
    testimonials: [
      {
        client: "John Doe",
        feedback:
          "Their web design completely transformed our business! User engagement has increased dramatically.",
      },
      {
        client: "Adrian Venoin",
        feedback:
          "Beautiful, functional, and intuitive design—exactly what we needed for our brand!",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    heropic: devhero,
    ill: devill,
    endpic: website,
    description:
      "We create fast, scalable, and secure websites using MERN, React, Next.js, Shopify, and WordPress, ensuring high performance and reliability.",
      keyFeatures: [
        "Custom Web Development",
        "Modern Web Applications",
        "E-Commerce Solutions",
        "API Development & Integration",
        "Performance Optimization",
        "Scalability & Security Enhancements",
        "Cross-Browser & Mobile Compatibility",
      ],
    process: [
      "Requirement Gathering & Planning",
      "Frontend & Backend Development",
      "Database & API Integration",
      "Performance Optimization",
      "Testing & Debugging",
      "Deployment & Maintenance",
    ],
    testimonials: [
      {
        client: "Samuel",
        feedback:
          "Our website now runs smoother, loads faster, and provides an amazing experience!",
      },
      {
        client: "Saleem",
        feedback:
          "Professional and efficient—delivered exactly what we envisioned for our online platform.",
      },
    ],
  },
  {
    id: 3,
    title: "Graphic Design",
    heropic: brandinghero,
    ill: brandingill,
    endpic: website,
    description:
      "We create a strong and memorable brand identity with custom logo designs, digital assets, and marketing materials that set you apart from the competition.",
    keyFeatures: [
      "Professional Logo Design",
      "Complete Brand Identity Package",
      "Business Cards & Brochures",
      "Social Media & Marketing Materials",
      "Business Cards & Print Media",
    ],
    process: [
      "Brand Discovery & Research",
      "Concept Development",
      "Initial Drafts & Revisions",
      "Final Design Approval",
      "Brand Asset Delivery",
    ],
    testimonials: [
      {
        client: "Jake Michal",
        feedback:
          "Their branding gave our business a completely fresh and professional look!",
      },
      {
        client: "Noman",
        feedback:
          "Amazing creativity! Our brand now has a unique and professional identity.",
      },
    ],
  },
];


const ServicePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const serviceType = params.get("type");

  const service = servicesList.find(
    (service) =>
      service.title.toLowerCase().replace(/\s+/g, "-") === serviceType
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      className="w-full h-full min-h-screen p-4 bg-white/35"
      id={service?.title}
    >
      <div className="w-full p-6 h-[25rem] md:h-[40rem]">
        <img
          src={service?.heropic}
          alt={service?.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900">
            {service?.title}
          </h2>
          <p className="text-lg text-gray-600 tracking-normal">
            {service?.description}
          </p>
          <div className="w-full text-center mx-auto p-4  border border-black">
            <h3 className="text-xl uppercase font-bold tracking-tighter border-b-4 w-fit mx-auto text-gray-900">
              Key Features
            </h3>
            <ul className="flex flex-col gap-4 font-semibold list-inside text-gray-600 tracking-normal">
              {service?.keyFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="p-2 my-2 border border-dashed border-black"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <img
            src={service?.ill}
            alt={service?.title}
            className="w-full h-full max-h-[35rem] object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full p-6 my-5">
        <h3 className="text-xl md:text-3xl uppercase w-fit mx-auto font-bold my-4 tracking-tighter text-gray-900">
          Process
        </h3>
        <div className="w-full flex items-center justify-center">
          <ul className="grid grid-cols-1 lg:grid-cols-8 gap-4 items-center list-inside text-gray-600 tracking-normal">
            {service?.process.map((step, index) => (
              <li
                key={index}
                className="flex items-center p-2 border border-gray-600"
              >
                {step}
                <MdOutlineKeyboardDoubleArrowRight className="w-4 h-4 ml-2 text-gray-600" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full p-6 my-5">
        <img
          src={service?.endpic}
          alt={service?.title}
          className="w-full  h-full max-h-[30rem] object-cover rounded-lg"
        />
      </div>
      <div className="w-full p-6 flex items-center justify-center gap-4">
        {service?.testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-4 shadow-sm shadow-black rounded-lg"
          >
            <p className="text-lg text-gray-600 tracking-normal">
              {testimonial.feedback}
            </p>
            <p className="text-sm text-gray-900 tracking-normal">
              - {testimonial.client}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
