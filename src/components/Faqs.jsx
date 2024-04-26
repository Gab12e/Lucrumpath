import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

const Faqs = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="text-center bg-[white] text-black">
        <div className='max-w-full mx-auto px-[2rem] lg:px-[1rem] py-16 w-full'>
          <p className='text-xl font-bold text-center tracking-widest uppercase text-[#5651e5]'>
            Frequently Ask Question
          </p>
          <h2 className='py-[2rem]'>Get In Touch</h2>
          <div id="Contact" className='grid lg:grid-cols-3 gap-8'>
            {/* left */}
            <div className="lg:w-full w-[90%] col-span-2  justify-between mx-auto lg:col-span- h-ful shadow-lg shadow-gray-400 rounded-3xl p-2">
              <div className='font-medium rounded-lg text-black mt-4 bg-[white] border shadow-xl justify-between mx-auto items-center w-full'>
                <button onClick={() => setIsOpen((prev) => !prev)} className='p-1 pl-2 w-full justify-between flex items-center cursor-pointer border-1 border-transparent duration-300 font-bold text-lg tracking-wider'>
                  <div className='justify-between flex'>
                    {!isOpen ? (
                      <AiOutlineCaretDown className='mt-1 ' size={20} />
                    ) : (
                      <AiOutlineCaretUp className='mt-1' size={20} />
                    )}
                    <h1 className='font-medium text-[12px]'>What methods are available for deposition funds into my account ?</h1>
                  </div>
                </button>
                {isOpen && (
                  <div className='w-full'>
                    <div className='flex'>
                      <ul className='border-1 items-center ml-3 border-black'>
                        <li className='text-[11px]'>The methods available for funding your account are by cryptocurrency (Bitcoin, Ethereum, LitCoin, and many more). We do not accept Fiat on our trading platform as we are fully a cryptocurrency organization.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className='my-4'>
              <Section1 />
              </div>
              <div className='my-4'>
              <Section2 />
              </div>
              <div className='my-4'>
              <Section3 />
              </div>
              <div className='my-4'>
              <Section4 />
              </div>
              <div className='my-4'>
              <Section5 />
              </div>
              <div className='my-4'>
              <Section6 />
              </div>
              
            </div>
            {/* right */}
            <div className=" w-full h-aut shadow-lg shadow-gray-400 rounded-xl lg:p-2">
              <div className="p-1">
                <form>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-1">
                    <div className="flex flex-col">
                      <label className="uppercase text-start text-sm py-1">Name</label>
                      <input className="border-2 rounded-lg p-1 text-black flex border-gray-300 dark:bg-black" type="text" required />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-start text-sm py-1">Phone Number</label>
                      <input className="border-2 rounded-lg p-1 text-black flex border-gray-300 dark:bg-black" type="text" required />
                    </div>
                  </div>
                  <div className="flex flex-col py-1">
                    <label className="uppercase text-start text-sm py-1">Email</label>
                    <input className="border-2 rounded-lg p-1 text-black flex border-gray-300 dark:bg-black" type="email" required />
                  </div>
                  <div className="flex flex-col py-1">
                    <label className="uppercase text-start text-sm py-1">Subjects</label>
                    <input className="border-2 rounded-lg p-1 text-black flex border-gray-300 dark:bg-black" type="text" required />
                  </div>
                  <div className="flex flex-col py-1">
                    <label className="uppercase text-start text-sm py-1">Message</label>
                    <textarea className="border-2 rounded-lg p-1 text-black border-gray-300 dark:bg-black" rows="10"></textarea>
                  </div>
                  <button className='w-full p-4 text-gray- rounded-bl-[2rem] rounded-tr-[2rem] mt-4 dark:bg-black '>Send Message</button>
                </form>
              </div>
            </div>
          </div>
          {/* <div className='flex justify-center py-12'>
              <Link href='/'>
                <div className="rounded-full  shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                  <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                </div>
              </Link>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Faqs