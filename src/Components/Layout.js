import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='top-0 backdrop-blur-sm bg-slate-100/80 flex flex-row justify-between items-center p-8 px-14 text-gray-800 fixed w-full'>
        <div>
            <h1 className='text-2xl font-semibold text-blue-600'>Gowtham N</h1>
        </div>
        <div className='hidden md:block'>
            <Link to='/' className='mx-5 hover:underline hover:underline-offset-8 transition-all duration-500'>Home</Link>
            <Link to='/about' className='mx-5 hover:underline hover:underline-offset-8 transition-all duration-500'>About</Link>
            <Link to='/work' className='mx-5 hover:underline hover:underline-offset-8 transition-all duration-500'>Work</Link>
            <a href='/Assets/Resume.pdf' download className='mx-5 hover:underline hover:underline-offset-8 transition-all duration-500'>Resume</a>
            <Link to='/contact' className='border-2 border-blue-600 rounded-full p-4 mx-5 text-blue-600 hover:bg-blue-600 hover:text-slate-100 transition-all duration-500'>Contact Me</Link>
        </div>
        <div className='block md:hidden'>
          <button className='focus:outline-none' onClick={toggleMenu}>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <div className='block md:hidden absolute top-20 right-0 w-full bg-slate-100'>
            <div className='p-4'>
              <Link to='/' className='block py-2 text-center hover:bg-blue-600 hover:text-slate-100'>Home</Link>
              <Link to='/about' className='block py-2 text-center hover:bg-blue-600 hover:text-slate-100'>About</Link>
              <Link to='/work' className='block py-2 text-center hover:bg-blue-600 hover:text-slate-100'>Work</Link>
              <a href='/Assets/Resume.pdf' download className='block py-2 text-center hover:bg-blue-600 hover:text-slate-100'>Resume</a>
              <Link to='/contact' className='block py-2 text-center border-2 border-blue-600 rounded-full mt-5 mx-auto w-64 text-blue-600 hover:bg-blue-600 hover:text-slate-100'>Contact Me</Link>
            </div>
          </div>
        )}
    </nav>
    )
  }
       
export default Layout