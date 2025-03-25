import React, { useState } from "react";
import logo from "../assets/logfp.png";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

// #6F4E37
// #EFDCAB


const navLinks = [
  { name: "Home", path: "/", exact: true },
  { name: "About", path: "/about", exact: true },
  { name: "Services", path: "/services", exact: true },
  { name: "Contact", path: "/contact", exact: true },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="w-full border-b-2 border-[#6F4E37] bg-white/50 px-4 py-2 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-4">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 object-cover rounded-lg"
        />
        <span className="text-3xl font-bold tracking-tighter text-[#6F4E37] font-serif">
          FlestaPro
        </span>
      </NavLink>
      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-4">
        <ul className="flex items-center gap-10 font-semibold text-md sm:text-lg md:text-xl lg:text-xl">
          {navLinks.map((link, idx) => (
            <li key={idx} title={link?.name} className="font-sans text-gray-500 hover:text-[#6F4E37] hover:underline">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-[#6F4E37]" : "hover:[#6F4E37]"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <NavLink
          className="bg-[#6F4E37] py-2 px-4 hover:transition-1 rounded-lg text-white font-bold"
          aria-label="Get started with us"
          title="Get started"
          to="/services"
          onClick={() => setOpenNav(false)}
        >
          Get Started
        </NavLink>
        <NavLink
          className="border-2 border-[#6F4E37] py-2 px-4 hover:bg-[#6F4E37] hover:text-white bg-white rounded-lg bg-none text-[#6F4E37] font-bold"
          aria-label="Talk with us"
          title="Lets talk"
          to="/contact"
          onClick={() => setOpenNav(false)}
        >
          Lets Talk
        </NavLink>
      </div>
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          className="flex items-center gap-2 px-1 py-1 text-[#6F4E37] border-2 border-[#6F4E37] rounded-md"
          aria-label="Toggle navigation menu"
          onClick={() => setOpenNav(!openNav)}
          title="menu"
        >
          <IoMenu size={28} />
        </button>
        {openNav && (
          <div className="absolute top-0 left-0 right-0 bg-black/50 shadow-lg flex items-start justify-between px-6 py-4 text-white">
            <ul className="w-full font-bold flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <li key={idx} title={link?.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "text-[#EFDCAB]" : "hover:[#EFDCAB]"
                    }
                    onClick={() => setOpenNav(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <div className="md:hidden flex items-center gap-4">
                <NavLink
                  className="bg-[#6F4E37] py-2 px-4 hover:bg-[#EFDCAB] rounded-lg text-white font-bold hover:text-gray-500"
                  aria-label="Get started with us"
                  title="Get started"
                  to="/services"
                  onClick={() => setOpenNav(false)}
                >
                  Get Started
                </NavLink>
                <NavLink
                  className="border-[#6F4E37] py-2 px-4 hover:bg-[#EFDCAB]  bg-white rounded-lg bg-none text-[#6F4E37] font-bold hover:text-gray-500"
                  aria-label="Talk with us"
                  title="Lets talk"
                  to="/contact"
                  onClick={() => setOpenNav(false)}
                >
                  Lets Talk
                </NavLink>
              </div>
            </ul>
            <button
              className="flex items-center gap-2 px-4 py-2 text-white border-[#6F4E37] hover:bg-[#EFDCAB] focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
              aria-label="Close navigation menu"
              onClick={() => setOpenNav(!openNav)}
              title="close"
            >
              <IoClose size={28} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;