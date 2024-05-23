import React from 'react'
import bannerimg from '../../assets/jdg2.jpg'

const About3 = () => {
  return (
    <div className='py-20 dark:bg-gray-900 bg-[#f7f8f3] dark:text-[#f7f8f3]  duration-500 '>
        <div className='container '>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center'>
                <div>
                    <img 
                    src={bannerimg}
                    alt=''
                    className='sm:scale-125 max-h-[300px] drop-shadow-md mx-auto'
                    />
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <h1 className='font-bold textcolor text-7xl'>01</h1>
                        </div>
                        <div>
                            <p className='textcolor'>Global Fitness</p>
                            <h1 className='text-2xl sm:text-4xl font-bold'>Equipment</h1>
                        </div>
                    </div>
                    <div>

                    <p>At Structure Health & Fitness, we are dedicated to transforming your fitness aspirations into reality. Our range of fitness equipment is meticulously designed to cater to all your exercise needs, whether you’re a beginner or a seasoned athlete.
                        <br /><br />We invest in our team members so that we can fully invest in our clients.</p>
                        <button className='outline_btn my-4'>Get Started</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About3