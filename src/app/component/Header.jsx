import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#03045E] w-full h-[10dvh] flex justify-between items-center'>
      <h1 className='text-white px-12 font-semibold'>O A</h1>
      <div className='text-white'>
        <ul className='flex gap-x-20 px-12 font-semibold'>
          <li>Home</li>
          <li>About</li>
          <li>SKills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header