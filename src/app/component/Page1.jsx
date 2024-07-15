import React from 'react'
import Image from 'next/image'
import { BsLinkedin, BsGithub, BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { TbFileCv } from "react-icons/tb";

const Page1 = () => {
  return (
    <div className='mt-16 min-h-screen w-full relative flex flex-col md:flex-row'>
      {/* Background divs */}
      <div className='absolute top-0 left-0 w-full md:w-2/3 h-1/2 md:h-full bg-[#081C15] z-0'></div>
      <div className='absolute top-1/2 md:top-0 left-0 md:left-2/3 w-full md:w-1/3 h-1/2 md:h-full bg-[#52B788] z-0'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col md:flex-row w-full'>
        <div className='w-full md:w-2/3 p-6 md:p-12 text-white'>
          <div className='mb-6 md:mb-10'>
            <Image src='/O.png' alt='my-logo' width={150} height={150} className='w-32 md:w-auto'/>
          </div>
          <h1 className='font-extrabold text-3xl md:text-5xl mb-3 md:mb-5'>Oladele Akomolede</h1>
          <p className='text-base md:text-lg font-semibold mb-3 md:mb-5'>I&apos;m a junior frontend developer with a passion for creating engaging and user-friendly web interfaces. With a solid foundation in HTML, CSS, JavaScript, Node.js, GitHub. I&apos;m eager to apply my skills to real-world projects and continue learning new technologies. I have experience working with modern frameworks like React, Next.js and am committed to writing clean, efficient code. I&apos;m excited to collaborate with experienced developers, contribute to innovative projects, and grow my expertise in frontend development.</p>
          
          <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-4 mb-6 md:mb-10'>
            <button className='bg-transparent text-white p-3 md:p-4 border-2 border-white font-semibold hover:bg-white hover:text-[#03045E]'>
              Contact Me
            </button>
            <button className='bg-[#52B788] border-2 border-transparent text-[#03045E] p-3 md:p-4 font-semibold hover:bg-white'>
              Let&apos;s Talk
            </button>
          </div>
        </div>

        <div className='w-full md:w-1/3 relative'>
          {/* Icons positioned at top center for mobile, top right for desktop */}
          <ul className='absolute top-4 sm:top-16 left-1/2 transform -translate-x-1/2 md:left-auto md:right-8 flex gap-x-4 md:gap-x-8 text-xl md:text-2xl text-[#081C15] z-20'>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsLinkedin/></li>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsGithub/></li>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><TfiEmail/></li>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsTwitterX/></li>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><TbFileCv/></li>
          </ul>
          
          {/* Profile picture */}
          <div className='flex items-center justify-center py-12 md:py-0 md:absolute md:inset-0'>
            <Image
              src='/pics-new.png'
              alt='profile picture'
              width={300}
              height={300}
              className='border-4 border-[#52B788] md:w-[500px] md:h-[500px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page1