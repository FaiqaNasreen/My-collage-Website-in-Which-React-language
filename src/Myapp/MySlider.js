import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles
import "./style/Slider.css" // Import your custom styles

function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src="/edu5.jpg" alt="landen" />
        </div>
        <div className="slide">
          <img src="/edu7.jpg" alt="islamabad" />
        </div>
        <div className="slide">
          <img src="/edu6.png" alt="lahore" />
        </div>
       
      </Slider>
    </div>
  );
}

export default MySlider;

