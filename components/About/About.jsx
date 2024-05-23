import React from 'react'
import bannerimg from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='py-28 dark:bg-gray-900 bg-[#f7f8f3] dark:text-[#f7f8f3]  duration-500 '>
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
                            <h1 className='text-2xl sm:text-4xl font-bold'>AbOUT US</h1>
                        </div>
                    </div>
                    <div>

                    <p>JD GYM is a team effort. We operate in a transparent, professional, but also high energy and fun environment where everyone has a voice that matters. We are selfless in our approach. 
                        <br /><br />We invest in our team members so that we can fully invest in our clients.</p>
                        <button className='outline_btn my-4'>Get Started</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About