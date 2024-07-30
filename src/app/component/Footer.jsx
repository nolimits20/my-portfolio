import React from 'react';
import Copyright from './Copyright';
import { BsLinkedin, BsGithub, BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { TbFileCv } from "react-icons/tb";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-[#081C15] w-full py-6 md:py-0 md:h-[20dvh] flex flex-col md:flex-row justify-between items-center'>
      <ul className='text-white px-4 md:px-12 font-bold flex gap-x-6 md:gap-x-8 text-2xl md:text-3xl mb-4 md:mb-0'>
        <Link href='https://www.linkedin.com/in/oladele-akomolede' target='_blank'>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsLinkedin/></li>
        </Link>
        <Link href='https://github.com/nolimits20' target='_blank'>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsGithub/></li>
        </Link>
        <Link href='mailto:oladeleakomolede43@gmail.com'>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><TfiEmail/></li>
        </Link>
        <Link href='https://x.com/officialnolimt' target='_blank'>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsTwitterX/></li>
        </Link>
        <Link href='/oladele.pdf' target='_blank'>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><TbFileCv/></li>
        </Link> 
      </ul>
      <div className='text-white px-4 md:px-12'>
        <div className='flex font-semibold hover:text-[#CAF0F8] hover:cursor-pointer text-sm md:text-lg text-center md:text-left'>
          <Copyright/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
