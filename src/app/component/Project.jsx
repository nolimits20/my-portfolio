'use client'
import React from 'react'
import { projects } from '../component/data'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-100px 0px'
  })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1.2, delay: index * 0.3, ease:'easeOut' }}
      className='rounded-lg overflow-hidden relative'
      style={{
        paddingTop: '75%', // 4:3 aspect ratio
      }}
    >
      <div 
        className='absolute top-0 left-0 w-full h-full'
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(27, 67, 50, 0.8)', // Semi-transparent background color
        }}
      ></div>
      <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-black'></div>
      <div className='absolute top-0 left-0 right-0 p-4'>
        <h2 className='text-white text-xl font-semibold mb-2'>{project.name}</h2>
      </div>
      <div className='absolute bottom-0 left-0 right-0 p-4'>
        <p className='text-gray-200 mb-4 text-sm'>{project.description}</p>
        <div className='flex justify-between'>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='bg-[#52B788] text-[#081C15] px-4 py-2 rounded hover:bg-[#74C69D] transition-colors'>Demo</a>
          <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className='bg-[#52B788] text-[#081C15] px-4 py-2 rounded hover:bg-[#74C69D] transition-colors'>Source Code</a>
        </div>
      </div>
    </motion.div>
  )
}

const Project = () => {
  return (
    <div className='bg-[#081C15] min-h-screen w-full relative p-8'>
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9baca2] from-67% to-[#a7cead] to-33%'></div>
      <h1 className='text-[#52B788] font-bold text-3xl px-12 mt-16 mb-12 tracking-widest uppercase border-b border-[#52B788] pb-4'>Projects</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Project