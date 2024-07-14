import React from 'react'
import Copyright from './Copyright'
import { BsLinkedin, BsGithub, BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { TbFileCv } from "react-icons/tb";

const Footer = () => {
  return (
        <div className='bg-[#03045E] w-full h-[20dvh] flex justify-between items-center'>
          <ul className='text-white px-12 font-bold flex gap-x-8 text-3xl'>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsLinkedin/></li>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer'> <BsGithub/></li>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><TfiEmail/></li>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsTwitterX/></li>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><TbFileCv/></li>
         </ul>
          <div className='text-white'>
            <div className='flex px-12 font-semibold hover:text-[#CAF0F8] hover:cursor-pointer text-lg'>
             <Copyright/>
            </div>
          </div>
        </div>
  )
}

export default Footer