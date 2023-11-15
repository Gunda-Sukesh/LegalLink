import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/Ai';
import {Link} from 'react-router-dom'
//AiOutlineMenu
const NavBar = () => {
    const[nav,setNav]=useState(true);
    const handler = () => {
        setNav(!nav);
    }
  return (
    <div className='flex justify-between items-center h-24 px-4 text-white '>
        <h1 className='w-full text-3xl font-bold text-[#3498db]'>LegalLink.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 whitespace-nowrap cursor-pointer'><Link to="/">Home</Link></li>
            <li className='p-4 whitespace-nowrap cursor-pointer'><Link to="/login">Login</Link></li>
            <li className='p-4 whitespace-nowrap cursor-pointer'><Link to="/signup">Sign up</Link></li>
            <li className='p-4 whitespace-nowrap cursor-pointer'><Link to="/aboutus">About</Link></li>
            <li className='p-4 whitespace-nowrap cursor-pointer'><Link to="/contacts">Contact</Link></li>
        </ul>
        <div onClick={handler} className='block md:hidden'>
            {(nav)?<AiOutlineMenu size={25} className='cursor-pointer'/>:<AiOutlineClose size={25} className='cursor-pointer'/>}
            
        </div>
        <div className={(nav)?'fixed left-[-100%]':'fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-800 bg-black ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#3498db] m-4 pt-3'>LegalLink.</h1>
        <ul className='p-4 uppercase'>
            <li className='p-4 whitespace-nowrap border-b border-r-gray-800 cursor-pointer'><Link to="/">Home</Link></li>
            <li className='p-4 whitespace-nowrap border-b border-r-gray-800 cursor-pointer'><Link to="/login">Login</Link></li>
            <li className='p-4 whitespace-nowrap border-b border-r-gray-800 cursor-pointer'><Link to="/signup">Sign up</Link></li>
            <li className='p-4 whitespace-nowrap border-b border-r-gray-800 cursor-pointer'><Link to="/aboutus">About</Link></li>
            <li className='p-4 whitespace-nowrap'><Link to="/contacts">Contact</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar