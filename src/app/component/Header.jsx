'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  }

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/Skills' },
    { name: 'Projects', href: '/Project' },
    { name: 'Contact', href: '/Contact' }
  ]

  return (
    <div className='bg-[#081C15] w-full h-[10dvh] flex justify-between items-center fixed top-0 left-0 right-0 z-50'>
      <div className='px-4 md:px-12'>
        <Image src='/O_prev_ui.png' alt='my logo' height={60} width={60} className='md:h-[100px] md:w-[100px]' />
      </div>
      
      {/* Hamburger/Close menu for mobile */}
      <div className='md:hidden px-4'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white focus:outline-none'>
          <motion.div
            initial={false}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </motion.div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='absolute top-[10dvh] left-0 right-0 bg-[#081C15] md:hidden'
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className='flex flex-col items-center py-4 text-white'>
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={menuItemVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  className='hover:text-[#CAF0F8] hover:cursor-pointer py-2 w-full text-center transition-all duration-300 ease-in-out hover:bg-[#0D2E1F]'
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop menu */}
      <div className='text-white hidden md:block'>
        <ul className='flex gap-x-20 px-12 font-semibold'>
          {menuItems.map((item, index) => (
            <li key={index} className='hover:text-[#CAF0F8] hover:cursor-pointer'>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header