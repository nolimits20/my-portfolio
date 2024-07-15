import React from 'react'
import Copyright from './Copyright'
import { BsLinkedin, BsGithub, BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { TbFileCv } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='bg-[#081C15] w-full py-6 md:py-0 md:h-[20dvh] flex flex-col md:flex-row justify-between items-center'>
      <ul className='text-white px-4 md:px-12 font-bold flex gap-x-6 md:gap-x-8 text-2xl md:text-3xl mb-4 md:mb-0'>
        <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsLinkedin/></li>
        <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsGithub/></li>
        <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><TfiEmail/></li>
        <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsTwitterX/></li>
        <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><TbFileCv/></li>
      </ul>
      <div className='text-white px-4 md:px-12'>
        <div className='flex font-semibold hover:text-[#CAF0F8] hover:cursor-pointer text-sm md:text-lg text-center md:text-left'>
          <Copyright/>
        </div>
      </div>
    </div>
  )
}

export default Footer