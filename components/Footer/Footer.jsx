import React from 'react'
import logo from '../../assets/jdgymlogo.png'
import { BiPhoneCall } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    const  nav_Link = [
        {href: '/#service',key:'Service',label:'Service'},
        {href: '/#about',key:'About',label:'About'},
        {href: '/#join',key:'Join',label:'Join'},
    ]   
  return (
    <div className='dark:bg-gray-950 dark:text-gray-300 py-2 bg-[#f7f8f3]'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-between '>
            <div className='flex flex-row gap-2 items-center'> 
                <img
                 src={logo}
                 className='w-20 hover:scale-105 duration-500'
                 alt='' />
                 <a href="https://www.facebook.com/dilawarali.baig/">
                 <FaFacebook className='text-2xl hover:scale-105 duration-300'/>
                 </a>
                    
                 <a href="https://www.instagram.com/dilawaralibaig/">
                 <FaInstagram  className='text-2xl hover:scale-105 duration-300'/>
                 </a>
                 <a href="https://www.linkedin.com/in/dilawar-baig-5b328a308/">
                 <FaLinkedin 
                 className='text-2xl hover:scale-105 duration-300'/>
                 </a>
                 
                  </div>
                <div className='flex gap-2 items-center'>
                    <BiPhoneCall  className=' animate-pulse text-xl'/>
                    <p className='font-semibold'>+92 312-2205748</p>
                </div>
                 <div className='flex flex-row gap-5 items-center'> 
                    {nav_Link.map(({key,label,href})=> (
                        <ul className='hover:textcolor font-semibold text-md' key={key}>
                            <a href={href}>

                            <li>{label}</li>
                            </a>

                        </ul>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer