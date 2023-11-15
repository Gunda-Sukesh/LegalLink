import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import { BsFillPhoneFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
const Contact = () => {
    return (
        <div className='bg-black w-full h-screen text-white flex flex-col items-center justify-start '>
            <h1 className='text-[#3498db] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold p-4 md:mb-10 md:mt-5'>Contact Us</h1>
            {/* <p className='md:text-base sm:text-sm text-xs'>We're here to assist you. Reach out to us with your questions, concerns, or feedback. Contact us using the information provided below.</p> */}
            <div className='w-full flex flex-col md:flex-row justify-evenly items-center p-4 md:mb-10'>
                <div className='flex flex-col justify-center items-center m-2'>
                    <MdLocationPin size={70} />
                    <h1>Address</h1>
                    <p className='text-[#3498db]'>PESU RR</p>
                </div>
                <div className='flex flex-col justify-center items-center m-2'>
                    <HiOutlineMail size={70} />
                    <h1>email</h1>
                    <p className='text-[#3498db]'>yyogesh9296ls@gmail.com</p>
                    <p className='text-[#3498db]'>sukeshgunda05@gmail.com</p>
                </div>
                <div className='flex flex-col justify-center items-center m-2'>
                    <BsFillPhoneFill size={70} />
                    <h1>Phone</h1>
                    <p className='text-[#3498db]'>080102 97297</p>
                </div>
            </div>

            <Link to="/"><button className='text-white font-medium hover:bg-[#2e84b3d1] p-2 bg-[#3498db] w-[200px] rounded-md'>Back</button></Link>
        </div>
    )
}

export default Contact