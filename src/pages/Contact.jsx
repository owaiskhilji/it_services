import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
// #6F4E37
// #EFDCAB
const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const templateParams = {
      from_name: subject,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_kje6q8m", // ✅ Your EmailJS Service ID
        "template_46oejsg", // ✅ Your EmailJS Template ID
        templateParams,
        "94qs4QscbFYqEwCFM" // ✅ Your EmailJS Public Key
      )
      .then(
        () => setStatus("Email Sent Successfully!"),
        (error) => setStatus("Failed to Send Email: " + error.text)
      );
  };

  return (
    <div className="w-full h-full min-h-screen bg-[#6F4E37] text-white p-8">
      <div >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter font-serif text-center mb-8">
          <span className="text-[#EFDCAB]">Contact</span> Us
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4 font-serif">Get in Touch</h2>
            <p className="text-xl mb-4 text-white">
              Have questions or inquiries? Reach out to us, and we'll be happy to assist you!
            </p>
            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-[#EFDCAB] text-2xl" />
              <span className="text-lg text-white">+1 937 793-4647</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="text-[#EFDCAB] text-2xl" />
              <span className="text-lg text-white">flestapro@gmail.com</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-4 bg-white text-gray-600 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-[#EFDCAB] font-serif">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="p-4 border border-gray-500 rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 border border-gray-500 rounded-lg"
                required
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-4 border border-gray-500 rounded-lg h-40"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#EFDCAB] hover:bg-[#6F4E37] text-gray-500 hover:text-white font-bold py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
            {/* Status Message */}
            {status && (
              <p className="mt-4 text-lg font-bold text-[#6F4E37]">{status}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
