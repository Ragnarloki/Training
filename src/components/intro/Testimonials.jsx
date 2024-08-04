// src/components/Testimonials.js
import React from 'react';
import man1 from "../../assets/images/man1.png"
import man2 from "../../assets/images/man2.png"
import man3 from "../../assets/images/man3.png"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    image: man1,
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    image: man2,
    quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    image: man3,
    quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold">Testimonials</h2>
     <center>
     <hr className='w-40 mt-3 mb-5 border border-2' />
      
     </center>
      <p className="text-center text-xl mt-2 mb-8">What our customers are saying</p>
    </div>
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-8">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex justify-center items-center">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-11/12 md:w-3/4 lg:w-2/3">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <img
                    src={testimonial.image}
                    alt={`Testimonial ${testimonial.id}`}
                    className="w-full h-full rounded-full object-cover border-4 border-gray-900 absolute -top-16 left-1/2 transform -translate-x-1/2"
                  />
                </div>
                <blockquote className="text-lg italic mt-8">
                  <span className="text-4xl">&ldquo;</span>
                  {testimonial.quote}
                  <span className="text-4xl">&rdquo;</span>
                </blockquote>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    </section>
  );
};

export default Testimonials;
