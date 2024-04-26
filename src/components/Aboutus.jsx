import React from 'react'

const Aboutus = () => {
  return (
    <div className=" bg-whit text-black bg-[white] my-[5rem] container mx-auto  w-full shadow-xl shadow-gray-500 flex flex-col p-4 pb-[4rem] rounded-tr-[3rem] rounded-tl-[3rem] rounded-bl-[3rem] rounded-br-[3rem] rounded-lg">
      <h1 className='pt-[2rem] font-bold text-xl underline text-center'>ABOUT US</h1>
      <div className='py-[2rem]'>
      <div className=''>
        <h1 className=' text-[20px] font-bold text-2xl'>Summary</h1>
        <p>Welcome to <span className='text-[red] font-bold'>LUCRUM PATH</span>, where innovation meets opportunity in the dynamic world of digital currencies. Founded by a team of passionate blockchain enthusiasts, we are committed to empowering individuals and businesses with the tools and knowledge to navigate the exciting landscape of cryptocurrency.</p>
      </div>
      <div className='py-[2rem] '>
        <h1 className=' text-[20px] font-bold text-2xl'>Secure Platform</h1>
        <p>Our mission is to provide a reliable platform that simplifies the complexities of cryptocurrency trading and investing. We strive to offer insightful resources, cutting-edge technology, and a user-friendly interface tailored to both beginners and seasoned traders alike.</p>
        </div>
        <div className='py-[2rem] '>
        <h1 className=' text-[20px] font-bold text-2xl'>Cutomer-Built Engine</h1>
        <p>At <span className='font-bold text-[red]'>LUCRUM PATH</span>, we believe in the transformative potential of blockchain technology and its ability to redefine the future of finance. Whether you're looking to buy your first Bitcoin or exploring advanced trading strategies, we're here to support you every step of the way.</p>
        </div>
        <div className='py-[2rem] '>
        <h1 className=' text-[20px] font-bold text-2xl'>Driving Innovation</h1>
        <p>Join us on this thrilling journey towards financial freedom and discover the endless possibilities that await in the world of cryptocurrencies. Together, we can shape the future of finance and build a more inclusive and decentralized economy for all.</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus