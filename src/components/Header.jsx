import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LOGO from '../assets/img/logo.jpeg';

const Header = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }
  return (
    <div className=" text-white px-[2rem] w-full z-10 fixed top-0 flex bg-gray-900/90 justify-between  items-center ">
      <Link to='/'>
      <div><img className='h-[2.5rem] rounded-full w-full' src={LOGO} alt='' /></div>
        </Link>
        <ul  className="hidden  mb- text-center md:flex group cursor-pointer"> 
        <Link to='/'>
          <li className="p-4 hover:border-b border-gray-600 hover:scale-105 duration-300">Home</li>
          </Link>
          <Link to='/Aboutus'>
          <li className="p-4 hover:border-b border-gray-600 hover:scale-105 duration-300">About Us</li>
          </Link>
          <Link to='/Tradingplan'>
          <li className="p-4 hover:border-b border-gray-600 hover:scale-105 duration-300">Trading Plans</li>
          </Link>
          <Link to='/FAQs'>
          <li className="p-4 hover:border-b border-gray-600 hover:scale-105 duration-300 ">FAQs</li>
          </Link>
          <Link to='/Contact'>
          <li className="p-4 hover:border-b border-gray-600 hover:scale-105 duration-300 ">Contact Us</li>
          </Link>
          <Link to='/SignUp'>
          <li className="p-4 hover:border-b border-gray-600 hover:scale-105 duration-300">SignUp</li>
          </Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden cursor-pointer border-2 rounded-tr-xl rounded-bl-xl">
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
        </div>
        <div className={nav ? "fixed left-0 top-0 w-[60%] h-[30rem] py-4 rounded-br-[12rem] border-r  border-r-gray-900 bg-gray-900/90 ease-in-out duration-0" : "fixed left-[-100%]"}>
          <ul className="uppercase p-8 cursor-pointer ">
          <Link to='/'>
          <li className="p-4 hover:border-b border-gray-600 hover:scale-105 duration-300">Home</li>
          </Link>
          <Link to='/Aboutus'>
          <li className="p-4 hover:border-b border-gray-600 hover:scale-105 duration-300">About Us</li>
          </Link>
          <Link to='/Tradingplan'>
          <li className="p-4 hover:border-b border-gray-600 hover:scale-105 duration-300">Trading Plans</li>
          </Link>
          <Link to='/FAQs'>
          <li className="p-4 hover:border-b border-gray-600 hover:scale-105 duration-300 ">FAQs</li>
          </Link>
          <Link to='/Contact'>
          <li className="p-4 hover:border-b border-gray-600 hover:scale-105 duration-300 ">Contact Us</li>
          </Link>
          <Link to='/SignUp'>
          <li className="p-4 hover:border-b border-gray-600 hover:scale-105 duration-300">SignUp</li>
          </Link>
          </ul>
        </div>
    </div>
    
  )
}

export default Header






























