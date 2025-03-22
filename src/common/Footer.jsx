import React from "react";
import logo from "../assets/logfp.png";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#ffff] text-gray-800  border-t-2">
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-4">
          <div className="flex flex-col gap-4 px-8">
            <Link to="/" className="flex items-center gap-4">
              <img src={logo} alt="logo" className="w-32 h-32 w-auto" />
              <h2 className="text-3xl font-bold text-gray-600 font-serif tracking-tighter">
                FlestaPro
              </h2>
            </Link>
            <div className="flex gap-4">
              <Link to="#" className="text-gray-600">
                <FaSquareXTwitter size={24} />
              </Link>
              <Link to="#" className="text-gray-600">
                <FaInstagramSquare size={24} />
              </Link>
              <Link to="#" className="text-gray-600">
                <IoLogoTiktok size={24} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-8">
            <h2 className="text-2xl font-semibold text-gray-600 tracking-tighter">
              Contact Us
            </h2>
            <p className="text-lg tracking-normal text-gray-500">Phone: +1 (937) 793-4647</p>
            <p className="text-lg tracking-normal text-gray-500">Email: flestapro@gmail.com</p>
          </div>
          <div className="flex flex-col gap-4 px-8">
            <h2 className="text-2xl font-semibold text-gray-600 tracking-tighter">
              Quick Links
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Link to="#" className="text-gray-500">
                Home
              </Link>
              <Link to="#" className="text-gray-500">
                About
              </Link>
              <Link to="#" className="text-gray-500">
                Services
              </Link>
              <Link to="#" className="text-gray-500">
                Work
              </Link>
              <Link to="#" className="text-gray-500">
                Projects
              </Link>
            
            
              <Link to="#" className="text-gray-500">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-8">
            <h2 className="text-2xl font-semibold text-gray-600 tracking-tighter">
              Company
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Link to="#" className="text-gray-500">
                Blog
              </Link>
              <Link to="#" className="text-gray-500">
                Careers
              </Link>
              <Link to="#" className="text-gray-500">
                Press
              </Link>
              <Link to="#" className="text-gray-500">
                Team
              </Link>
              <Link to="#" className="text-gray-500">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-8 border-t-2 bg-[#6F4E37]">
          <p className="text-white tracking-normal">
            © {new Date().getFullYear()} FlestaPro. All rights reserved.
          </p>
        </div>
      </div>
      <div className="lg:hidden bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Site Name */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Digital Byte Logo"
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-xl font-bold font-serif text-gray-600">Flesta Pro</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-4 text-center mt-4 md:mt-0">
            <a href="/" className="hover:text-gray-500 transition">
              Home
            </a>
            <a href="/about" className="hover:text-gray-500 transition">
              About Us
            </a>
            <a href="/services" className="hover:text-gray-500 transition">
              Services
            </a>
            <a href="/contact" className="hover:text-gray-500 transition">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#EFDCAB] text-white rounded-fulltransition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#EFDCAB] text-white rounded-full transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#EFDCAB] text-white rounded-full transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#EFDCAB] text-white rounded-fulltransition"
            >
              
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#6F4E37] text-white text-center py-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Flesta Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
