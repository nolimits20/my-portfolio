'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='bg-[#081C15] w-full h-[10dvh] flex justify-between items-center fixed top-0 left-0 right-0 z-50'>
      <div className='px-4 md:px-12'>
        <Image src='/O_prev_ui.png' alt='my logo' height={60} width={60} className='md:h-[100px] md:w-[100px]' />
      </div>
      
      {/* Hamburger menu for mobile */}
      <div className='md:hidden px-4'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='absolute top-[10dvh] left-0 right-0 bg-[#081C15] md:hidden'>
          <ul className='flex flex-col items-center py-4'>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer py-2'>Home</li>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer py-2'>About</li>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer py-2'>Skills</li>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer py-2'>Projects</li>
            <li className='hover:text-[#CAF0F8] hover:cursor-pointer py-2'>Contact</li>
          </ul>
        </div>
      )}

      {/* Desktop menu */}
      <div className='text-white hidden md:block'>
        <ul className='flex gap-x-20 px-12 font-semibold'>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'>Home</li>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'>About</li>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'>Skills</li>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'>Projects</li>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header