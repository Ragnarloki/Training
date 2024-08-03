import React from 'react';

const testimonials = [
  { name: 'Customer 1', text: 'Great service!' },
  { name: 'Customer 2', text: 'Loved it!' },
  { name: 'Customer 3', text: 'Highly recommend!' },
];

const Testimonials = () => {
  return (
    <div className="bg-darkBlue text-white p-8">
      <h2 className="text-center text-2xl font-bold mb-8">Testimonials</h2>
      <div className="flex space-x-8 justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg w-1/3">
            <p className="mb-4">"{testimonial.text}"</p>
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
