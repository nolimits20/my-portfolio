'use client'
import React from 'react';
import Image from 'next/image';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { TbFileCv } from 'react-icons/tb';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Page1 = () => {
  return (
    <div className='mt-16 min-h-screen w-full relative flex flex-col md:flex-row'>
      {/* Background divs */}
      <div className='absolute  top-0 left-0 w-full md:w-2/3 h-1/2 md:h-full bg-[#081C15] z-0'></div>
      <div className='absolute  top-1/2 md:top-0 left-0 md:left-2/3 w-full md:w-1/3 h-1/2 md:h-full bg-[#52B788] z-0'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col md:flex-row w-full'>
        <div className='w-full  md:w-2/3 p-6 md:p-12 text-white'>
          <motion.div
            className='mb-6 md:mb-10'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image src='/O.png' alt='my-logo' width={150} height={150} className='w-32 md:w-auto'/>
          </motion.div>
          <motion.p
            className='pb-6 text-[#52B788] font-semibold'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Hello Everyone 
          </motion.p>
          <motion.h1
            className='font-extrabold text-3xl md:text-5xl mb-3 md:mb-5'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className='text-[]'>I&apos;M</span> OLADELE AKOMOLEDE
          </motion.h1>
          <motion.p
            className='text-base md:text-lg font-semibold mb-3 md:mb-5'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I&apos;m a Frontend developer with a passion for creating engaging and user-friendly web interfaces. With a solid foundation in HTML, CSS, JavaScript, Node.js, GitHub. I&apos;m eager to apply my skills to real-world projects and continue learning new technologies. I have experience working with modern frameworks like React, Next.js and am committed to writing clean, efficient code. I&apos;m excited to collaborate with experienced developers, contribute to innovative projects, and grow my expertise in frontend development.
          </motion.p>
          
          <motion.div
            className='flex flex-col items-start gap-y-4'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className='flex flex-col sm:flex-row gap-4 mt-14 pt-10 md:pt-0 md:mt-5 mx-auto md:mx-0'>
              <button className='bg-[#52B788] md:bg-transparent text-[#081C15] md:text-white p-3 w-[300px]  md:p-4 border-2 border-[#081C15] md:border-white font-semibold hover:bg-white hover:text-[#081C15] md:w-[200px]'>
                Contact Me
              </button>
              <button className='bg-[#081C15] md:bg-[#52B788] border-2 border-none md:border-transparent text-[#52B788] md:text-[#081C15] p-3 md:p-4 font-semibold hover:bg-white w-[300px] md:w-[200px]'>
                Let&apos;s Talk
              </button>
            </div>
            
            {/* Icon list */}
            <motion.ul
            className='flex justify-center md:justify-start gap-x-6 md:gap-x-16 mt-8 md:mt-12 text-2xl text-[#081C15] md:text-3xl md:text-[#52B788] w-full'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            >
            <Link href={'https://www.linkedin.com/in/oladele-akomolede'} target='blank'>
              <li className='hover:text-[#4ffaaa] hover:cursor-pointer'><BsLinkedin/></li>
            </Link>
            <Link href={'https://github.com/nolimits20'} target='blank'>
              <li className='hover:text-[#4ffaaa] hover:cursor-pointer'><BsGithub/></li>
            </Link>
            <Link href={'mailto:oladeleakomolede43@gmail.com'}>
              <li className='hover:text-[#4ffaaa] hover:cursor-pointer'><TfiEmail/></li>
            </Link>
            <Link href={'https://x.com/officialnolimt'} target='blank'>
              <li className='hover:text-[#4ffaaa] hover:cursor-pointer'><BsTwitter/></li>
            </Link>
            <Link href={'/oladele.pdf'} target='blank'>
              <li className='hover:text-[#4ffaaa] hover:cursor-pointer'><TbFileCv/></li>
            </Link>
            </motion.ul>
          </motion.div>
        </div>

        <div className='w-full md:w-1/3 relative'>
          {/* Profile picture */}
          <motion.div
            className='flex items-center justify-center py-12 md:py-0 md:absolute md:inset-0'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Image
              src='/pics-new.png'
              alt='profile picture'
              width={300}
              height={300}
              className='border-4 border-[#52B788] md:w-[500px] md:h-[500px]'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page1;