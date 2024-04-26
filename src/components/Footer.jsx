import React from 'react';
import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import BitcoinImg from '../assets/img/bitcoin.png';
import MastercardImg from '../assets/img/mastercard.png';
import VisaImg from '../assets/img/visa.png';
import LOGO from '../assets/img/logo.jpeg';

const Footer = () => {
  return (
    <footer className='lg:pt-24 pt-0' data-aos='fade-up' data-aos-offset='450'>
      <div className="container mx-auto lg:mb-24">
        <div className='flex flex-col gap-12 lg:flex-row'>
          <div><img className='lg:h-[3rem] h-full w-[3rem] rounded-full w-full' src={LOGO} alt='' /></div>
          <div className='flex flex-1 flex-col gap-16 lg:flex-row'>
            <div className='text-center w-full lg:text-left'>
              <div className='text-xl font-medium'>Quick Links</div>
              <ul className='space-y-4 text-gray'>
                <li
                 className='hover:text-blue scale-105 cursor-pointer duration-300'>Home
                </li>
                <li
                 className='hover:text-blue scale-105 cursor-pointer duration-300'>Products
                </li>
                <li
                 className='hover:text-blue scale-105 cursor-pointer duration-300'>About
                </li>
                <li
                 className='hover:text-blue scale-105 cursor-pointer duration-300'>Features
                </li>
                <li
                 className='hover:text-blue scale-105 cursor-pointer duration-300'>Contact
                </li>
              </ul>
            </div>
            <div className='text-center w-full lg:text-left'>
              <div className='text-xl font-medium'>Resources Links</div>
              <ul className='space-y-4 text-gray'>
                <li
                   className='hover:text-blue cursor-pointer scale-105 duration-300'>Download Whitepapper
                </li>
                <li
                   className='hover:text-blue cursor-pointer scale-105 duration-300'>Smart Token
                </li>
                <li
                   className='hover:text-blue cursor-pointer scale-105 duration-300'>Blockchain Explore
                </li>
                <li className='hover:text-blue cursor-pointer scale-105 duration-300'>
                  Crypto API
                </li>
                <li className='hover:text-blue cursor-pointer scale-105 duration-300'>Interest
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className='lg:ml-[80px]'>
              <h3 className='h3 font-medium text-center mb-10 lg:text-left'>We accept following payment systems</h3>
              <div className='flex justify-center items-center gap-6'>
                <img className='cursor-pointer' src={VisaImg} alt='' />
                <img className='cursor-pointer' src={MastercardImg} alt='' />
                <img className='cursor-pointer' src={BitcoinImg} alt='' />
                <img className='cursor-pointer' src={BitcoinImg} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-12 '>
        <div className="container mx-auto flex flex-col gap-y-6 items-center lg:flex-row lg:justify-between lg:gap-y-0">
          <div>
            &copy; 2024 LUCRUM PATH. All rights reserved.
          </div>
          <div className='flex gap-x-8 text-2xl'>
            <h3 className='hover:text-blue cursor-pointer transition'><IoLogoYoutube /></h3>
            <h3 className='hover:text-blue cursor-pointer transition'><IoLogoInstagram /></h3>
            <h3 className='hover:text-blue cursor-pointer transition'><IoLogoTwitter /></h3>
            <h3 className='hover:text-blue cursor-pointer transition'><IoLogoLinkedin /></h3>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
