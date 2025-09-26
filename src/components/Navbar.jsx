import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex  justify-center md:justify-between item-center '>
            <div className='text-2xl font-bold hidden md:inline text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500'>VISHAL
            </div>
            <div className='space-x-6'>
                  <a href="#home"className='hover:text-grey-400'>Home</a>
                  <a href="#About" className='hover:text-grey-400'>About Me</a>
                  <a href="#Projects" className='hover:text-grey-400'>Projects</a>
                  <a href="#contact" className='hover:text-grey-400'>contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full '>Contact Me</button>
      </div>
    </nav>
  )
}

export default Navbar