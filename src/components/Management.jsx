import React from 'react'
import pad from '../assets/pic1.jpg'
import {Link} from 'react-router-dom'
const Management = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={pad} alt="law-management"/>
            <div className='flex flex-col justify-center'>
              <p className='text-[#3498db] font-bold'>LAW MANAGEMENT DASHBOARD</p>
              <h1 className='font-bold md:text-3xl sm:text-2xl text-xl py-2'>Manage Legal Data Centrally</h1>
              <p>At LegalLink, we're committed to simplifying law case management. Our platform streamlines case organization, deadlines, and collaboration, benefiting legal professionals and firms. Let us handle the administrative tasks, so you can focus on delivering exceptional legal services to your clients.</p>
              <Link to="/signup"><button className='bg-black text-white rounded-md w-[200px] mx-auto p-2 my-4 font-medium'>Get Started</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Management