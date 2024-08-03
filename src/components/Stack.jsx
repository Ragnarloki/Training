import React, { useEffect } from 'react'
import person from "../assets/images/person.jpeg"
import "./overview.css"
import Over_View from './Over_View'
import Benifit from './Benifit'
import Aos from "aos";
import 'aos/dist/aos.css'
function Stack() {
   
  useEffect(()=> {
    Aos.init({duration:2000});
  },[])

  return (
   <div className=''>
     <div className='h-[450px] md:h-[550px] top '>
       <div className=''>
       <img className=' image p-8  md:ml-[325px] rounded-full'  src={person} data-aos="fade-right" alt="" />
       </div>
      <div className='font-bold ml-4  text-5xl text-white font-mono md:ml-[36%]'>
      <div className='md:text-7xl' data-aos="fade-left">
        <h1 className=''>Full Stack</h1>
         <h1 className='ml-5 md:ml-40 mt-5'>Development</h1>
      </div>
      </div>
    </div>
    
   </div>
  )
}

export default Stack