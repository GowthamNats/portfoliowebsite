import React from 'react'
import Layout from '../Components/Layout'

function Contact() {

    const recipient = 'gowtham.nats@gmail.com';
    const subject = 'Your concern';
    const body = 'Describe your concern';

    const handleComposeEmailClick = () => {
        const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl);
    };

  return (
    <div className='w-full h-screen flex flex-col tracking-wide bg-slate-100 text-center md:text-start'>
        <Layout className='' />
        <div className='h-full pt-12 md:pt-20 flex flex-col items-center justify-center gap-5'>
            <a href='https://www.linkedin.com/in/gowtham-n-b2289a1b8/' className='w-[300px] text-center py-4 rounded-md bg-blue-800 text-slate-100 hover:bg-slate-100 border-2 border-blue-800 hover:text-gray-800 transition-all duration-100'>LinkedIn</a>
            <a href='https://www.instagram.com/gowtham_nats/' className='w-[300px] text-center py-4 rounded-md bg-gradient-to-r from-pink-500 to-orange-500 text-slate-100 border-2 border-pink-500 hover:from-slate-100 hover:to-slate-100 hover:text-gray-800 transition-all duration-500'>Instagram</a>
            <a href='https://twitter.com/Gowtham05796409' className='w-[300px] text-center py-4 rounded-md bg-blue-500 text-slate-100 border-2 border-blue-500 hover:bg-slate-100 hover:text-gray-800 transition-all duration-100'>Twitter</a>
            <button onClick={() => handleComposeEmailClick()} className='w-[300px] text-center py-4 rounded-md bg-red-600 text-slate-100 border-2 border-red-600 hover:bg-slate-100 hover:text-gray-800 transition-all duration-100'>Gmail</button>
        </div>
    </div>
  )
}

export default Contact