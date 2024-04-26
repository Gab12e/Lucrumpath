import React from 'react';
import Image from '../assets/img/hero-img.png';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { HiChartBar, HiGlobe, HiUser } from 'react-icons/hi';
import Image1 from '../assets/img/why-img.png';
import CalcForm from '../components/CalcForm';
import FeaturesSection1 from './FeaturesSection1';
import FeaturesSection2 from './FeaturesSection2';
import FeaturesSection3 from './FeaturesSection3';


const Home = () => {
    return (
        <section className='py-[3rem] '>
            <div className="container mx-auto">
                <div className='flex flex-col items-center lg:flex-row'>
                    <div className='flex-1'>
                        <div className='bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]'
                            data-aos='fade-down'
                            data-aos-delay='400'>
                            <div className='flex items-center justify-between text-sm lg:text-base'>
                                <div className='bg-white text-darkblue rounded-full font-medium py-1 px-4'>75% SAVE</div>
                                <div>For the Black Friday weekend</div>
                            </div>
                        </div>
                        <h1 className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6'
                            data-aos='fade-down'
                            data-aos-delay='500'> Fastest & secure platform to invest in crypto.</h1>
                        <p className='max-w-[440px] leading-relaxed mb-8 '
                            data-aos='fade-down'
                            data-aos-delay='600'> Buy and sell cryptocurrencies, trusted by 10M wallet with over $30 billion in transactions.</p>
                        <button className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base' data-aos='fade-up'
                            data-aos-delay='700'>
                            Try for free
                            <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' />
                        </button>
                    </div>
                    <div className='flex-1' data-aos='fade-up' data-aos-delay='600'>
                        <img src={Image} alt='' />
                    </div>
                </div>
            </div>
            <div className="container mx-auto  data-aos='fade-up' data-aos-delay='1200 pt-[16rem]">
                <div className='flex flex-col gapy-6 lg:flex-row lg:justify-between'>
                    <div>
                        <div className="flex items-center gap-x-6">
                            <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
                                <HiChartBar />
                            </div>
                            <div>
                                <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">$30B</div>
                                <div className='text-gray'>Digital Currency Exchange</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
                            <HiUser />
                        </div>
                        <div>
                            <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">$10+</div>
                            <div className='text-gray'>Trusted Wallets Investor</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
                            <HiGlobe />
                        </div>
                        <div>
                            <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">195</div>
                            <div className='text-gray'>Countries Supported</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto pt-[12rem]">
                <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
                    <div className='order-2 lg:order-1' data-aos='fade-right' data-aos-offset='400'>
                        <img src={Image1} alt="/" />
                    </div>
                    <div className='order-1 lg:order-2 max-w-[480px]' data-aos='fade-left' data-aos-offset='400'>
                        <h2 className='section-title'>Why you should choose US </h2>
                        <p className='section-subtitle'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews. </p>
                        <button className='btn px-6'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='container mx-auto pt-[12rem]'>
                <div className='text-center'>
                    <h2 className='section-title' data-aos='fade-up' data-aos-delay='1200'>Check how much you can earn</h2>
                    <p className='section-subtitle text-lg mb-16 max-w-[622px] mx-auto' data-aos='fade-up' data-aos-delay='1200'>Let's check your hash rate to see how much you will earn today.</p>
                </div>
                <CalcForm />
            </div>
            <div className='w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-14 shadow-primary pt-[8rem]' data-aos='fade-up' data-aos-offset='500'>
                <form className='flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0'>
                    <input className='input placeholder:text-darkblue' type="text" placeholder='Enter your hash rate' />
                    <select className='select'>
                        <option value="">TH/s</option>
                        <option value="">H/s</option>
                        <option value="">KH/s</option>
                        <option value="">MH/s</option>
                        <option value="">GH/s</option>
                    </select>
                    <button className='btn text-white px-8 flex self-start'>Calculate</button>
                </form>
                <div className='mt-24'>
                    <div className='text-blue font-medium mb-4'>
                        ESTIMATED 24 HOUR REVENUE:
                    </div>
                    <div className='text-[32px] font-bold mb-3'>
                        0.055 130 59 ETH <span className='text-blue'>($1275)</span>
                    </div>
                    <div className='text-gray-500 tracking-[1%]'>
                        Revenue will change based on mining difficulty and Ethereum
                    </div>
                </div>
            </div>
            <div className="pt-12 lg:pt-[10rem] bg-violet">
      <div className="container mx-auto">
        <div className='text-center max-w-[758px] mx-auto mb-24'>
          <h2 className='section-title' data-aos='fade-up' data-aos-offset='400'>
            Market sentiments, portfoilio, and run the infrastructure of your choice
          </h2>
        </div>
        <FeaturesSection1 />
        <FeaturesSection2 />
        <FeaturesSection3 />
      </div>
    </div>
        </section>
    )
}

export default Home