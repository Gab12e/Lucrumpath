import React from 'react';
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";


const Contact = () => {
  return (
    <div className="container mx-auto mt-[5rem] lg:mt-[7rem] ">
      <h1 className='text-center text-2xl py-5 font-semibold underline h-full'>Contact Us</h1>
      
      <div className="max-w-full text-center mx-auto grid md:grid-cols-3 gap-8" >
        <div className='bg-[white] border hover:shadow-[black] hover:shadow-md rounded-tr-[3rem] rounded-bl-[3rem] rounded-lg text-black h-[20rem]'>
        <div className='mt-[5.5rem]'>
        <TfiLocationPin className='mx-auto hover:text-[white] hover:bg-[green] shadow hover:shadow-[black] hover:shadow-md rounded-tr-[1rem] cursor-pointer pt-2 rounded-bl-[1rem] rounded hover:scale-105 duration-500 p-2' size={60}/>
        <h1>ADRESS</h1>
        <p>United States</p>
        </div>
        </div>
        <div className='bg-[white] border hover:shadow-[black] hover:shadow-md rounded-tr-[3rem] rounded-bl-[3rem] rounded-lg text-black h-[20rem]'>
        <div className='mt-[5.5rem]'>
        <FiPhoneCall className='mx-auto hover:text-[white] hover:bg-[green] shadow hover:shadow-[black] hover:shadow-md rounded-tr-[1rem] cursor-pointer pt-2 rounded-bl-[1rem] rounded hover:scale-105 duration-500 p-2' size={60}/>
        <h1>PHONE</h1>
        <p>"</p>
        </div>
        </div>
        <div className='bg-[white] border hover:shadow-[black] hover:shadow-md rounded-tr-[3rem] rounded-bl-[3rem] rounded-lg text-black h-[20rem]'>
        <div className='mt-[5.5rem]'>
        <AiOutlineMail  className='mx-auto hover:text-[white] hover:bg-[green] shadow hover:shadow-[black] hover:shadow-md rounded-tr-[1rem] cursor-pointer pt-2 rounded-bl-[1rem] rounded hover:scale-105 duration-500 p-2' size={60} />
        <h1>EMAIL</h1>
        <p>help@lucrumpathfx.com</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact