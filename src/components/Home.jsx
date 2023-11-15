import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Management from './Management'
import NewsLetter from './NewsLetter'
import Login from './Login'
import Signup from './Signup'
import Menu from './Menu'
const Home = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Management/>
        <NewsLetter/>
        {/* <Menu></Menu> */}
    </div>
  )
}

export default Home