import React,{useState} from 'react'
const NewsLetter = () => {
    const[email,setEmail] = useState("")
  return (
    <div className='w-full bg-black text-white p-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 py-4 my-2'>
            <div className='col-span-2 mr-auto'>
                <h1 className='text-white font-bold md:text-3xl sm:text-2xl text-xl py-2'>Want tips & tricks to optimize your flow?</h1>
                <p className='mb-2'>Sign up to our newsletter and stay upto date</p>
            </div>
            <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input type='email' placeholder='Enter your email' className='p-2 w-full text-black rounded outline-none mr-2'  value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                <button className='bg-[#3498db] text-black rounded-md w-[200px] mx-auto p-2 my-4 font-medium hover:bg-[#2e84b3d1]'>Notify Me</button>
            </div>
            <p>We care about your data.Read our <span className='text-[#3498db] underline cursor-pointer'>Privacy policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter