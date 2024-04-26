import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';

const Section1 = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div className="lg:w-full w-[90%] col-span-2 justify-between mx-auto lg:col-span- h-ful shadow-lg shadow-gray-400 rounded-3xl p-2">
                <button onClick={() => setIsOpen((prev) => !prev)} className='p-1 pl-2 w-full justify-between flex items-center cursor-pointer border-1 border-transparent duration-300 font-bold text-lg tracking-wider'>
                  <div className='justify-between  flex'>
                    {!isOpen ? (
                      <AiOutlineCaretDown className='mt-1 mr-1' size={20} />
                    ) : (
                      <AiOutlineCaretUp className='mt-1 mr-1' size={20} />
                    )}
                    <h1 className='font-medium text-[12px]'>What ducuments do I  need to provide when opening account ?</h1>
                  </div>
                </button>
                {isOpen && (
                  <div className='w-full'>
                    <div className='flex'>
                      <ul className='border-1 items-center ml-3 border-black'>
                        <li className='text-[11px]'>You will need to provide a copy of a valid government-issued ID. (Passport, driver license, and ID card).</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
    </div>
  )
}

export default Section1