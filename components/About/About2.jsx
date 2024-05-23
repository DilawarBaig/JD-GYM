import React from 'react'
import bannerimg from '../../assets/jdg3.jpg'

const About2 = () => {
  return (
    <div className='py-20 dark:bg-gray-950 bg-gray-100 dark:text-[#f7f8f3]  duration-500 '>
        <div className='container mx-auto '>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-9 place-items-center  '>
                <div>
                    <div className='flex items-center gap-4 bg-red-300'>
                        <div>
                            <h1 className='font-bold textcolor text-7xl'>01</h1>
                        </div>
                        <div>
                            <p className='textcolor'>Global Fitness</p>
                            <h1 className='text-2xl sm:text-4xl font-bold'>Personal Training At Its Best</h1>
                        </div>
                    </div>
                    <div>

                    <p> Our personalized training program is designed to help you achieve your fitness goals efficiently.
                        <br /><br /> Our expert trainers not only guide you through effective workouts but also provide tailored diet charts to optimize your progress. </p>
                        <button className='outline_btn my-4'>Get Started</button>
                    </div>
                </div>
                <div>
                    <img 
                    src={bannerimg}
                    alt=''
                    className='sm:scale-125 max-h-[300px] drop-shadow-md mx-auto'
                    />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About2