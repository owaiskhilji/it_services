import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicePage from "./components/ServicePage";
import Projectmodal from "./components/Projectmodal";
import NotFound from "./pages/NotFound";
import Footer from "./common/Footer";

function App() {
  
  return (
    <main className="">
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/service" element={<ServicePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Projectmodal/>
      <Footer />
    </main>
  );
}

export default App;
