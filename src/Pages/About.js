import React from 'react'
import Layout from '../Components/Layout'

function About() {
  return (
    <div className="min-h-screen flex flex-col tracking-wide leading-relaxed text-center lg:text-justify">
        <Layout />
        <div className="flex-1 bg-slate-100">
            <div className="mx-auto px-6 lg:px-14 flex flex-col justify-center text-gray-900">
                <div className="flex flex-col lg:flex-row items-center mt-32 mb-16">
                    <div className="flex-1 lg:mr-16">
                    <img src="/Assets/my1.jpg" alt="Profile" className="rounded-xl mb-10" />
                    </div>
                    <div className="flex-1 lg:px-10 flex flex-col justify-center text-justify">
                    <p className="mb-4 text-lg lg:text-xl">Vanakkam! I'm Gowtham N. I'm a third-year software engineering student at VIT Chennai with a passion for innovation and a love for technology. As an aspiring software engineer, I've always been fascinated by the possibilities of artificial intelligence and the internet of things. My curiosity has led me to explore these fields, and I'm always looking for ways to push the boundaries and discover new and innovative solutions.</p>
                    <p className="mb-4 text-lg lg:text-xl">What sets me apart is my ability to wear many hats. I'm a true jack-of-all-trades, with expertise in everything from web development to hardware integrations. I'm not afraid to dive into new areas and take on new challenges, and I'm always eager to expand my skillset and learn new things.</p>
                    <p className="mb-4 text-lg lg:text-xl">In my free time, I enjoy tinkering with new technologies and experimenting with different ideas. I'm an innovator at heart, and I'm always looking for ways to apply my skills and knowledge to create something truly unique and creative. Whether it's building a new app or developing a new algorithm, I'm always up for a challenge and excited to see where my ideas will take me.</p>
                    </div>
                </div>
                <div className="flex flex-col my-16">
                    <h1 className="text-4xl lg:text-5xl font-semibold mb-8 text-center lg:text-left">Capabilities</h1>
                    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-lg lg:text-xl">
                    <li className="mb-4">UI Design</li>
                    <li className="mb-4">UX Design</li>
                    <li className="mb-4">Full-Stack Dev</li>
                    <li className="mb-4">Machine learning</li>
                    <li className="mb-4">Artificial intelligence</li>
                    <li className="mb-4">Internet of Things</li>
                    </ul>
                </div>
                <div className="flex flex-col my-16">
                    <h1 className="text-4xl lg:text-5xl font-semibold mb-8 text-center lg:text-left">Achievements</h1>
                    <ul className="grid grid-cols-1 gap-6 text-lg lg:text-xl">
                        <li className="mb-4">Top 25 in Grandmaster Level of Spellbee International</li>
                        <li className="mb-4">96th percentile in JEE Mains</li>
                        <li className="mb-4">90th percentile in JEE Advanced</li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center h-full pt-10 pb-20 text-gray-900'>
                    <h1 className='text-3xl md:text-5xl font-semibold'>Work Experience</h1>
                    <ul className='grid grid-cols-1 gap-6 text-lg py-10'>
                        <li className=' flex flex-col md:flex-row'>
                            <div className='w-full md:w-2/5 text-gray-500'>
                                <h1 className='text-xl md:text-3xl font-semibold mb-3'>PlaceXP</h1>
                                <h1 className='text-sm md:text-md mb-3'>June 2022 - Present</h1>
                            </div>
                            <div className='flex-1'>
                                <h1 className='text-xl md:text-3xl font-semibold mb-3'>Managing Director</h1>
                                <p className='text-sm md:text-md mb-3'>Developed a web app solution which informs students about how the placement procedure is undertaken in various prestigious companies and ways to prepare for it.</p>
                                <a href='https://placexp.software' className='text-sm md:text-xl text-gray-600 hover:text-blue-600 hover:underline hover:underline-offset-8'>Explore the website <span className='font-semibold'>→</span></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About