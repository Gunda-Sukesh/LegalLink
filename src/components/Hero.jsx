import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#3498db] font-bold p-2 md:text-3xl sm:text-2xl text-xl'>Effortless Case Management</p>
            <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold md:py-6'>Collaboration Made Easy.</h1>
            <div className='flex justify-center items-center py-3'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold pr-2'>Fast,flexible management for</p>
                <Typed strings={['Lawyers','Clients','Students']} typeSpeed={140} backSpeed={140} loop className='md:text-3xl sm:text-2xl text-xl font-bold'/>
            </div>
            <p className='md:text-xl sm:text-sm text-xs text-gray-600'>Empowering Legal Excellence: Streamlined Case Management and Fast, Flexible Financing for Lawyers.</p>
            <Link to="/signup"><button className='bg-[#3498db] w-[200px] text-white mx-auto py-2 my-2 rounded-md font-medium hover:bg-[#2e84b3d1]'>Get Started</button></Link>
        </div>
    </div>
  )
}

export default Hero