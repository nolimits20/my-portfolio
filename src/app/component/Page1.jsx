import React from 'react'
import Image from 'next/image'
import { BsLinkedin, BsGithub, BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { TbFileCv } from "react-icons/tb";

const Page1 = () => {
  return (
    <div>
        <div className='mt-20 min-h-screen w-full bg-[#90E0EF]'>
            <div className='w-1/2'>
            <div className='px-12 pt-10'>
                <Image src='/O.png' alt='my-logo' width={200} height={200}/>
            </div>
                <h1 className='text-[#0077B6] font-extrabold text-5xl pt-12 px-12'>Oladele<span className='text-[#03045E]'> Akomolede</span></h1>
                <p className='px-12 text-lg font-semibold mt-5'>I&apos;m a junior frontend developer with a passion for creating engaging and user-friendly web interfaces. With a solid foundation in HTML, CSS, JavaScript, Node.js, GitHub. I&apos;m eager to apply my skills to real-world projects and continue learning new technologies. I have experience working with modern frameworks like React, Next-Js and am committed to writing clean, efficient code. I&apos;m excited to collaborate with experienced developers, contribute to innovative projects, and grow my expertise in frontend development</p>
            </div>
            <div className='flex px-12 gap-x-1 mt-5'>
                <button className='bg-transparent text-[#03045E] p-4 border-2 border-[#03045E] font-semibold'>
                    Contact Me
                </button>
                <button className='bg-[#03045E] border-2 border-transparent text-white p-4'>
                    lets Talk
                </button>
                
            </div>
            <div className='mt-14'>
                <ul className='text-[#03045E] px-12 font-bold flex gap-x-8 text-3xl'>
                    <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsLinkedin/></li>
                    <li className='hover:text-[#CAF0F8] hover:cursor-pointer'> <BsGithub/></li>
                    <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><TfiEmail/></li>
                    <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><BsTwitterX/></li>
                    <li className='hover:text-[#CAF0F8] hover:cursor-pointer'><TbFileCv/></li>
                </ul>
                </div>
            
        </div>
    </div>
  )
}

export default Page1