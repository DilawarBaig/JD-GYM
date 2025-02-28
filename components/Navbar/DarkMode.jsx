import React, { useEffect, useState } from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'

const DarkMode = () => {
    const [theme,setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light')

    const element = document.documentElement;


    useEffect(()=> {
        if(theme === 'dark'){
            element.classList.add('dark')
            localStorage.setItem('theme','dark')
        }else{
            element.classList.remove('dark')
            localStorage.setItem('theme','light')
        }
    },[theme])
    
  return (
    <div>
        {theme === 'dark' ? <BiSolidSun 
        className='text-xl hover:text-yellow-400'
        onClick={()=> setTheme('light')}
        /> : <BiSolidMoon
        className='text-lg'
        onClick={()=> setTheme('dark')}
        />}
    </div>
  )
}

export default DarkMode