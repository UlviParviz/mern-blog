import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  var settings = {
    arrows: false,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed:6000,
    fade: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider  {...settings}>
      <div className="w-[100%] h-[550px]" >
        <img className="w-[100%] h-[100%] " src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" />
      </div>
      <div className="w-[100%] h-[550px]" >
        <img className="w-[100%] h-[100%] " src="https://promova.com/content/sport_idioms_3a57e5deed.png" alt="" />
      </div>
      <div className="w-[100%] h-[550px]" >
        <img className="w-[100%] h-[100%] " src="https://www.internacionalhi.com/wp-content/uploads/2018/03/agenda-analysis-business-plan-990818.jpg" alt="" />
      </div>
    </Slider>
  );
}