import React from 'react'
import logo from '../../assets/jdgymlogo.png'
import { BiPhoneCall } from 'react-icons/bi'
import { LiaRebel } from 'react-icons/lia'
import DarkMode from './DarkMode'

const Navbar = () => {
  const  nav_Link = [
        {href: '/#service',key:'Service',label:'Service'},
        {href: '/#about',key:'About',label:'About'},
        {href: '/#join',key:'Join',label:'Join'},
    ]   
  return (
    <>
    <div className='shadow-lg dark:bg-black/70 bg-white/70 dark:text-gray-300 - w-full duration-500 py-4 fixed z-30'>
        <div className='container  mx-auto'>
            <div
            className='flex items-center justify-between'>
                 <div className='flex items-center gap-2'>
                    <BiPhoneCall
                    className='text-2xl animate-pulse hover:scale-105 duration-300' />
                    <p>+92 312-2205748</p></div>
                 <div><img
                 src={logo}
                 className='w-20 sm:w-24 absolute top-0 right-1 sm:left-1/2 m-2 sm:m-0 sm:-translate-x-1/2 hover:scale-105 duration-300'
                 alt='' /> </div>
                 <div className='hidden sm:block'>
                    <ul className='flex gap-8 items-center'>
                        {nav_Link.map(({href,key,label}) => (
                            <a href={href}
                            className='inline-block text-lg font-semibold hover:textcolor duration-200 relative group '>
                            <li key={key}>{label}
                            <span className='inline-block absolute color h-[2px] w-0 -bottom-1 transition-all group-hover:w-full duration-300 left-0'></span>
                            </li>
                        </a>
                        ))}
                        <DarkMode />
                        </ul>
                 </div>
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Navbar