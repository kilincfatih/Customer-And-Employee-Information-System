import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/WelcomeScreenComponent.css';
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import image4 from '../img/image4.jpg';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "25px" }}
      onClick={onClick}
    >
      &#10094;
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "25px" }}
      onClick={onClick}
    >
      &#10095;
    </div>
  );
};

const WelcomeScreenComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='welcome-slider'>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Görsel 1" />
        </div>
        <div>
          <img src={image2} alt="Görsel 2" />
        </div>
        <div>
          <img src={image3} alt="Görsel 3" />
        </div>
        <div>
          <img src={image4} alt="Görsel 4" />
        </div>
      </Slider>
    </div>
  );
};

export default WelcomeScreenComponent;
