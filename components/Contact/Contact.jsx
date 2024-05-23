import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-950 dark:text-gray-300 min-h-[320px]'>
        <div className='container mx-auto pt-24'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 dark:bg-gray-900 bg-[#f7f8f3] place-items-center p-7 '>
                <div className='col-span-2'>
                    <h1 className='text-3xl sm:text-4xl font-bold text-black/80 dark:text-white'> <span className='textcolor'>Sweat Now, Shine Later</span>. Your body is a reflection of your lifestyle choices.</h1>
                </div>
                <div className='col-span-1 text-center grid place-items-center'>
                    <button className='primary_btn'>Contact Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact