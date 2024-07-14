import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#03045E] w-full h-[10dvh] flex justify-between items-center fixed top-0 left-0 right-0 z-50'>
      <h1 className='text-white px-12 font-semibold hover:text-[#CAF0F8] hover:cursor-pointer text-3xl'>O A</h1>
      <div className='text-white'>
        <ul className='flex gap-x-20 px-12 font-semibold'>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'>Home</li>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'>About</li>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'>SKills</li>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'>Projects</li>
          <li className='hover:text-[#CAF0F8] hover:cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header