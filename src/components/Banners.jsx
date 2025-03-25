import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/banners/Banner1.png";
import banner2 from "../assets/banners/Banner1.png";
import banner3 from "../assets/banners/Banner1.png";

function Banners() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds delay
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const banners = [banner1, banner2, banner3]; // Multiple banners

  return (
    <div className="slider-container w-full max-w-screen-lg mx-auto px-4">
      <Slider {...settings}>
        {banners.map((img, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={img}
              className="w-full h-auto max-h-[300px] object-cover rounded-md"
              alt={`Banner ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banners;
