import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";

import avatar1 from "../assets/avatar1.jpeg";
import avatar2 from "../assets/avatar2.jpeg";
import avatar3 from "../assets/avatar3.jpeg";

const testimonials = [
  {
    name: "John Doe",
    occupation: "Chief Executive Officer",
    image: avatar1,
    content:
      "DigitalByte has been my go-to for digital marketing and web development for the past five years. They have consistently provided exceptional service, attention to detail, and innovative solutions. I highly recommend them to anyone looking to improve their business and attract more customers.",
  },
  {
    name: "Jane Smith",
    occupation: "Sales Manager",
    image: avatar2,
    content:
      "Ive been using DigitalByte for the past five years and they have consistently been great at helping me improve my business. They have provided excellent customer service, attention to detail, and innovative solutions. I highly recommend them to anyone looking to improve their business and attract more customers.",
  },
  {
    name: "Mark Johnson",
    occupation: "Product Manager",
    image: avatar3,
    content:
      "DigitalByte has been my go-to for digital marketing and web development for the past five years. They have consistently provided exceptional service, attention to detail, and innovative solutions. I highly recommend them to anyone looking to improve their business and attract more customers.",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full h-full max-h-[80%] p-4 my-8 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 my-8">
        <div className="flex flex-col gap-4 px-8">
          <h3 className="text-3xl font-semibold text-gray-400 tracking-tighter">
            Our Testimonials
          </h3>
          <h2 className="text-5xl font-bold tracking-light capitalize font-rowdies">
            What Our <span className="text-teal-400">Customers</span> Say About
            Us
          </h2>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <p className="text-xl tracking-normal">
            We've been using providing an exceptional service to our clients for
            over a decade and are incredibly satisfied with the results. Our
            commitment to quality, attention to detail, and our ability to
            provide innovative solutions are unparalleled. Here is what some of
            our clients have to say about our service.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-8  py-5">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex flex-col gap-4 p-6 rounded-xl border-2 border-gray-400 w-full max-w-xs mx-auto relative"
          >
            <BiSolidQuoteLeft size={34} className="text-teal-400" />
            <p className="text-gray-600 text-xs">{testimonial.content}</p>
            <hr className="text-gray-600" />
            <div className="grid grid-cols-2 items-center gap-2">
              <div className="flex flex-col gap-2">
                <h4 className="text-md font-bold text-gray-800 tracking-normal">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-gray-600 tracking-normal">
                  {testimonial.occupation}
                </p>
              </div>
              <div className="flex justify-end">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
