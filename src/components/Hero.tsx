'use client'
import React from 'react'
import Image from 'next/image'
import {TypeAnimation} from 'react-type-animation';


const Hero = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='lg:col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='text-yellow-100 mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold '>
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-yellow-200
           via-yellow-700 to-yellow-950'>Hello, I'm {''}
             </span>
             <br></br>
             <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Unaiza Sheikh',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'JS,TS,HTML,CSS',
        1000,
        'Next Js Developer',
        1000
      ]}
      wrapper="span"
      //speed={50}
      
      repeat={Infinity}
    />
             
             </h1>
        <p className='text-[#A8A8A8] text-lg lg-text-xl mb-6'>I am a  passionate Frontend Web Developer with my skills in React
            and next js with typescript, Javascript, Html, Css and Tailwind.
            I am a team player and a quick learner with good communication skills.
        </p>
        <div>
            <button className='bg-white hover:bg-slate-200 text-black rounded-full py-5 px-7 mr-4
            bg-gradient-to-br from-yellow-200 via-yellow-700 to-yellow-950 w-full sm:w-fit'>Contact Me</button>
            <button className='bg-gradient-to-br from-yellow-200 via-yellow-700 to-yellow-950  text-white border border-white 
            rounded-full py-4 px-6 mt-6  w-full sm:w-fit'>
              <span className=' '>Download CV</span>
              </button> 
        </div>
        </div>
        <div className=' col-span-5 flex justify-center place-self-center mt-4 lg-mt-0'>
          <div className='rounded-full bg-[#121212] w-[250px] h-[100px] lg:w-[400px] lg:h-[200px] relative '>
            <Image src="/Doll.jpg"
             alt="hero"
              width={300} 
              height={100}
               className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero