import React from 'react';
import image6 from '../assets/img/ethereum.png';
import image7 from '../assets/img/heroimage.png';
import image8 from '../assets/img/bitcon.png';

const Tradingplan = () => {
  return (
    <div>
      <div className="mb-20 bg-[white] text-black" style={{ marginTop: '100px' }}>
        <div className='py-10'>
          <h3 className="text-center uppercase">...Search Our Courses...</h3>
          <h1 className="text-center text-3xl font-bold ">Pick <span className="text-[pink]"> A Courses.</span> </h1>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8" >
          <div className="w-full shadow-xl flex flex-col p-4 my-4 hover:shadow-[blue] hover:shadow-md rounded-tr-[3rem] rounded-bl-[3rem] rounded-lg hover:scale-100 duration-300" style={{ marginTop: '70px' }}>
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={image6} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">SILVER PLAN</h2>
            <p className="text-center text-2xl font-bold">5Trades per day</p>
            <div className='text-center font-medium'>
              <p className="py-2 border-b mx-8 mt-8">Insatnt Trading</p>
              <p className="py-2 border-b mx-8">Demo</p>
              <p className="py-2 border-b mx-8">Leverage Upto 2X</p>
              <p className="py-2 border-b mx-8">Round The Clock Suppor & Assistance</p>
              <p className="py-2 border-b mx-8">Leverage Upto 2X</p>
              <p className="py-2 border-b text-2xl mx-8">$500</p>
              <button className="bg-[#000000] md:w-[140px] w-full shadow-[pink] hover:shadow-[black] hover:shadow-md hover:bg-[#ACA7CA] hover:text-[black] rounded-tr-[1rem] rounded-bl-[1rem] font-medium my-6 mx-auto py-3 text-white">Start Trading</button>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 hover:shadow-[blue] hover:shadow-md rounded-tr-[3rem] rounded-bl-[3rem] rounded-lg hover:scale-100 duration-500" style={{ marginTop: '70px' }}>
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={image7} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">GOLD PLAN</h2>
            <p className="text-center text-2xl font-bold">15 Trades Per Day</p>
            <div className='text-center font-medium'>
              <p className="py-2 border-b mx-8 mt-8">Instant Trading</p>
              <p className="py-2 border-b mx-8">Demo Trading</p>
              <p className="py-2 border-b mx-8">Leverage Upto 2X, 5X</p>
              <p className="py-2 border-b mx-8">Round The Clock Support & Assistance</p>
              <p className="py-2 border-b text-2xl mx-8">$5000</p>
              <button className="bg-[#000000] md:w-[140px] w-full shadow-[pink] hover:shadow-[black] hover:shadow-md hover:bg-[#ACA7CA] hover:text-[black] rounded-tr-[1rem] rounded-bl-[1rem] font-medium my-6 mx-auto py-3 text-white">Start Trading</button>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 hover:shadow-[blue] hover:shadow-md rounded-tr-[3rem] rounded-bl-[3rem] rounded-lg hover:scale-100 duration-500" style={{ marginTop: '70px' }}>
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={image8} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">DIAMOND PLAN</h2>
            <p className="text-center text-2xl font-bold">35 Trades Per Day</p>
            <div className='text-center font-medium'>
              <p className="py-2 border-b mx-8 mt-8">Instant Trading</p>
              <p className="py-2 border-b mx-8">Demo Trading</p>
              <p className="py-2 border-b mx-8">Leverage Upto 2X, 5X, 10X</p>
              <p className="py-2 border-b mx-8">Round The Clock Support & Assistance</p>
              <p className="py-2 border-b text-2xl mx-8">$10,000</p>
              <button className="bg-[#000000] md:w-[140px] w-full shadow-[pink] hover:shadow-[black] hover:shadow-md hover:bg-[#ACA7CA] hover:text-[black] rounded-tr-[1rem] rounded-bl-[1rem] font-medium my-6 mx-auto py-3 text-white">Start Trading</button>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 hover:shadow-[blue] hover:shadow-md rounded-tr-[3rem] rounded-bl-[3rem] rounded-lg hover:scale-100 duration-500" style={{ marginTop: '70px' }}>
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={image6} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">GOLD PLAN</h2>
            <p className="text-center text-2xl font-bold">Unlimited Trades Per Day</p>
            <div className='text-center font-medium'>
              <p className="py-2 border-b mx-8 mt-8">Instant Trading</p>
              <p className="py-2 border-b mx-8">Demo Trading</p>
              <p className="py-2 border-b mx-8">Leverage Upto 2X, 5X, 10X, 20X</p>
              <p className="py-2 border-b mx-8">Round The Clock Support & Assistance</p>
              <p className="py-2 border-b text-2xl mx-8">$50,000</p>
              <button className="bg-[#000000] md:w-[140px] w-full shadow-[pink] hover:shadow-[black] hover:shadow-md hover:bg-[#ACA7CA] hover:text-[black] rounded-tr-[1rem] rounded-bl-[1rem] font-medium my-6 mx-auto py-3 text-white">Start Trading</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tradingplan