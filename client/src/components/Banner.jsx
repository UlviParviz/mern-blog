import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage1 from '../assets/images/pexels-expect-best-351264.jpg'
import BannerImage2 from '../assets/images/pexels-markus-spiske-2990644.jpg'
import BannerImage3 from '../assets/images/pexels-pixabay-248547.jpg'

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
        <img className="w-[100%] h-[100%] " src={BannerImage1} alt="" />
      </div>
      <div className="w-[100%] h-[550px]" >
        <img className="w-[100%] h-[100%] " src={BannerImage2} alt="" />
      </div>
      <div className="w-[100%] h-[550px]" >
        <img className="w-[100%] h-[100%] " src={BannerImage3} alt="" />
      </div>
    </Slider>
  );
}