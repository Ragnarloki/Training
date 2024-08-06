import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import question2 from "../../assets/images/question2.png"
import { Link } from 'react-router-dom';
import Mentor from '../course/Mentor';
import MaskGroup from "../../assets/images/Mask group.png"
import checkList from "../../assets/images/check_list.png"

const programs = [
  {
    id: 1,
    image: 'path-to-image-1.jpg',
    title: 'Full Stack Development',
    duration: '3/6/9/12 Months',
  },
  {
    id: 2,
    image: 'path-to-image-2.jpg',
    title: 'Full Stack Development',
    duration: '3/6/9/12 Months',
  },
  {
    id: 3,
    image: 'path-to-image-3.jpg',
    title: 'Full Stack Development',
    duration: '3/6/9/12 Months',
  },
  {
    id: 4,
    image: 'path-to-image-4.jpg',
    title: 'Full Stack Development',
    duration: '3/6/9/12 Months',
  },
  {
    id: 5,
    image: 'path-to-image-5.jpg',
    title: 'Full Stack Development',
    duration: '3/6/9/12 Months',
  },
  {
    id: 6,
    image: 'path-to-image-6.jpg',
    title: 'Full Stack Development',
    duration: '3/6/9/12 Months',
  },
  {
    id: 7,
    image: 'path-to-image-7.jpg',
    title: 'Full Stack Development',
    duration: '3/6/9/12 Months',
  },
  {
    id: 8,
    image: 'path-to-image-8.jpg',
    title: 'Full Stack Development',
    duration: '3/6/9/12 Months',
  },
  {
    id: 9,
    image: 'path-to-image-9.jpg',
    title: 'Full Stack Development',
    duration: '3/6/9/12 Months',
  },
];


const arrowStyles = {
  color: "black", // Change this to your desired color
  fontSize: "30px",
  zIndex: 1,
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyles, right: 25 }}
      onClick={onClick}
    >
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyles, left: 25 }}
      onClick={onClick}
    >
    </div>
  );
};

const Assignment = () => {
 
  

  return (
    <div  className='bg-[#17212E]'>
      
      
    <div>
        <div className=' flex text-3xl text-white'>
       <input type="button" className='m-5 -mr-0' value={`<`} />
       <h1  className='m-5  font-semibold'>Assignment</h1>
      </div>
      <div className='hidden md:block mt-[50%] absolute h-full  w-20'>
            <img src={MaskGroup}  className='size-14 flex justify-center m-3 mb-10' alt="" />
            <Link to={"/Assignment/"}><img src={checkList}  className=' size-14 mx-4 mb-5' alt="" /></Link> 
      </div>
      <section className=" text-black pb-12 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-8"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-12">
          {programs.map((program) => (
            <div key={program.id} className="bg-[white] p-6 rounded-2xl  text-center border border-2 border-[#F5CF6B]">
              <div className="w-full h-[w-full] mb-4">
                <img
                  src={question2}
                  alt={program.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <h3 className="text-lg font-semibold ">HTML Assignment 1</h3>
              <p className="text-gray-600 mb-4 flex justify-center"><>Deadline:&nbsp;</>30 mins</p>
              <Link to={"/Question/"} className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:text-white hover:bg-[#17212E]">
                Start Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
    <Mentor />
    </div>
  );
};

export default Assignment;
