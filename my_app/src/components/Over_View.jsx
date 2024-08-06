import React, { useEffect, useState } from 'react'
import "./overview.css"
import question from "../assets/images/question.jpeg"
import Aos from "aos";
import 'aos/dist/aos.css'
import Stack from './Stack';
import Benifit from './Benifit';
function Over_View() {
 
  useEffect(()=> {
    Aos.init({duration:1000});
  },[])
  
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
   };

   const handle =() =>{
    setShowForm(false);
   }
  

  

  return (
    <div className="relative h-screen font-times">
    
    <div className={` ${showForm ? 'opacity-25' : ''} z-0`}>
      <Stack  />
    <div className={`m-5 md:m-10 h-full `}>
        <h1 className='font-bold text-3xl'>OVERVIEW</h1>
    <div className=' grid grid-cols-1 mt-5 md:grid-cols-2'>
        <div  className='overview m-2 -ml-0  mb-8 md:-mb-0' >
        <p className=' my-3 text-xl  mx-5 md:text-3xl  font-[professional]  '>
        The Fullstack Live Class is an immersive, interactive program designed to transform you into a proficient fullstack developer. Covering both front-end and back-end development, the course includes HTML, CSS, JavaScript, React.js, Node.js, Express.js, SQL, NoSQL, and deployment strategies. Through live sessions with industry experts, hands-on projects, and collaborative learning, you’ll gain practical experience and build a portfolio of real-world work. With access to mentorship, comprehensive learning materials, and career support, this program is ideal for aspiring developers, professionals transitioning to tech, and those wanting to expand their web development skills.
        </p>
        </div>
        <div className='flex justify-center align-middle   h-[420px] md:h-[480px]'  >
          <div className='question p-7 md:p-10 -mb-10 rounded-xl'>
            <img className=' size-[250px] md:size-[300px]' src={question} alt="" />
           <div className='text-center text-2xl mt-3 font-normal'>
           <h1>Full Stack</h1>
           <h1 className=''>Development</h1>
           <div >
            
        
        <div className="">
        {(
        <button onClick={handleClick} className={`my-8 font-extralight  text-xl rounded-md hover:text-white hover:bg-[#17212E] bg-[#F5CF6B] h-10 w-52 `}>REGISTER NOW</button>
      )}
      </div>
           </div>
           </div>
        
           <button className='text-center  bg-[#F5CF6B] w-56 md:w-72 font-normal text-2xl my-8 rounded-md h-12'  >Syllabus & schedule</button>
        </div>
        </div>
    </div>
    </div>
    <Benifit />
    </div>
    
{/* RegisterForm */}

    <div className={` inset-0 bg-cover bg-center ${showForm ? 'fixed' : ''}`} >
    {showForm && 
    <div>
       <div className="flex justify-center align-middle mx-3 md:-m-0 items-center min-h-screen ">
      <div className="bg-white p-6 md:p-8 rounded-2xl   w-full max-w-md border border-2 border-[#F5CF6B]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-center">Register Now!</h2>
          <button onClick={handle} className="text-gray-500">✕</button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
            <input type="email" placeholder="Enter your email ID" className="mt-1 block w-full p-2 placeholder-black rounded-md bg-[#FAF2DE] " />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Enter your Name" className="mt-1 block w-full  p-2  placeholder-black  rounded-md bg-[#FAF2DE]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
            <input type="text" placeholder="+91" className="mt-1 block w-full p-2 placeholder-black rounded-md bg-[#FAF2DE]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Domain Of Interest <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Enter your Preferred Domain" className="placeholder-black mt-1 block w-full p-2   bg-[#FAF2DE] rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Choose Your Plan <span className="text-red-500">*</span></label>
            <div className="flex flex-wrap gap-2 mt-2">
              {['3 Months', '6 Months', '9 Months', '12 Months'].map((plan, index) => (
                <div key={index} className="flex-1 bg-[#FAF2DE] p-2 text-center  text-sm border border-gray-300 rounded-md cursor-pointer ">
                  <p className='font-semibold'>{plan}</p>
                  <p className='font-bold'>Rs: 6000</p>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="w-full bg-yellow-400 text-white p-2 rounded-md mt-4">Register</button>
        </form>
      </div>
    </div>
    </div>}
    
    </div>
    
    </div>
  )
}

export default Over_View