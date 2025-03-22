import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../assets/banners/123.png";

function Banners() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container w-full overflow-x-hidden">
      <Slider {...settings}>
        {/* Banner Image */}
        <div className="flex justify-center">
          <img
            src={banner}
            className="w-full h-[200px] md:h-[250px] lg:h-[250px] object-cover mx-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={banner}
            className="w-full h-[200px] md:h-[250px] lg:h-[250px] object-cover mx-auto rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={banner}
            className="w-full h-[200px] md:h-[250px] lg:h-[250px] object-cover mx-auto rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Banners;
