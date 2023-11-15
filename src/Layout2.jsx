import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import { MdClass } from 'react-icons/md'
const Layout2 = () => {
  // const location=useLocation();
  // console.log("hi",location.state.email,location.state.password)
  return (
    <>
        <div className='flex min-h-screen bg-[#F1F6F9] overflow-scroll'>
            <Menu />
            <Outlet/>
        </div>
        
    </>
  )
}

export default Layout2