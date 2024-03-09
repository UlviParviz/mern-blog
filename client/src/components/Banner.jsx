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
    speed: 600,
    fade: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div className="w-full h-[550px] sm:h-[450px] md:h-[650px]">
        <img className="w-full h-full object-cover" src={BannerImage1} alt="" />
      </div>
      <div className="w-full h-[550px] sm:h-[450px] md:h-[650px]">
        <img className="w-full h-full object-cover" src={BannerImage2} alt="" />
      </div>
      <div className="w-full h-[550px] sm:h-[450px] md:h-[650px]">
        <img className="w-full h-full object-cover" src={BannerImage3} alt="" />
      </div>
    </Slider>
  );
}
