import React from 'react'
import bannerImg from '../../assets/jdg1.jpg'

const Hero = () => {
    const Bystyle = {
        backgroundImage: `url(${bannerImg})`,
        backgroundposition: 'center',
        backgroundRepeat: 'no-repear',
        backgroundSize: 'cover',
        height: "100%",
        width: "100%",
    }
  return (
    <div
    style={Bystyle}
    className='bg-[#f7f8f3] dark:bg-gray-900 duration-300 dark:text-gray-300 '>
        <div className='bg-white/30 dark:bg-black/70'>
            <div className="container  min-h-[620px] flex items-center mx-auto  ">
                <div className='w-full md:w-[550px] mx-auto text-center space-y-5  '>
                    <p className='textcolor font-semibold text-2xl'>Start Your Fitness Journey</p>
                    <h1 className='text-5xl md:text-7xl font-bold'>Your Fitness Journey Begins!</h1>
                    <p className='font-semibold'>"The body achieves what the mind believes</p>
                    <button className='primary_btn'>Get Started</button>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Hero