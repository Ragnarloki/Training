import React from 'react'
import { BsThreeDots } from "react-icons/bs";

function Chat_bot() {
  return (
    <div className='font-times'>
        
    <div className='flex justify-center h-full md:h-[540px]'>
    <div className="bg-white   rounded-lg shadow-md w-[96%] md:w-[95%] ">
       <div className='bg-[#F5CF6B] h-14 w-full flex justify-end '><BsThreeDots className='my-2 mx-3 ' size={40}/>
            
       </div>
       <div className='text-xl'>
               <div className='flex justify-start m-5 md:m-8'>
                   <button className='bg-gray-200 rounded-md h-10 w-60'>  Hello! how may i help you  </button>
               </div>
               <div className='flex justify-end mx-5 md:mx-10'>
                 <button className='mx-5 bg-gray-200 rounded-md h-10 w-40'>Have a doubt</button>
                 <button className='mx-5 bg-gray-200 rounded-md h-15 w-40'>  Scan a question  </button>
               </div>
            </div>
    </div>
    </div>
    </div>
  )
}

export default Chat_bot