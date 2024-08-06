// src/components/FullScreenCarousel.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import App from "../../assets/images/App1.jpeg"
import Web from "../../assets/images/Web1.jpg"
import Ai from "../../assets/images/Aiml.jpg"

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 25 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 25, zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const FullScreenCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div >
      <Slider {...settings}>
     
        <div className="h-[400px] md:h-[550px]">
        <img src={Web} className='h-full w-full' alt="" />
        </div>

        <div className="h-[400px] md:h-[550px] ">
          <img src={App} className='h-full w-full' alt="" />
        </div>
       
        <div className="h-[400px] md:h-[550px]">
        <img src={Ai} className='h-full w-full bg-cover' alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default FullScreenCarousel;
