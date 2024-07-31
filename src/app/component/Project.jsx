'use client'
import React from 'react'
import Image from 'next/image'
import { projects } from '../component/data'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease:'easeOut' }}
      className='rounded-lg overflow-hidden relative mb-8 bg-[#081C15]'

    >
      <h2 className='text-white text-lg font-semibold p-4'>{project.name}</h2>
      <div className='w-full h-64 sm:h-72 md:h-80 relative'>
        <Image 
          src={project.image} 
          alt={project.name}
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className='p-4'>
        <p className='text-gray-200 mb-4 text-xs'>{project.description}</p>
        <div className='flex justify-between'>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='bg-[#52B788] text-[#081C15] px-3 py-2 sm:py-4 sm:px-8 rounded sm:text-lg text-sm hover:bg-[#74C69D] transition-colors'>Demo</a>
          <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className='bg-[#52B788] text-[#081C15] px-3 py-2 sm:py-4 sm:px-8 rounded sm:text-lg text-sm hover:bg-[#74C69D] transition-colors'>Source Code</a>
        </div>
      </div>
    </motion.div>
  )
}

const Project = () => {
  return (
    <div id='project' className='bg-[#081C15] min-h-screen w-full relative p-4 sm:p-8'>
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9baca2] from-67% to-[#a7cead] to-33%'></div>
      <h1 className='text-[#52B788] font-bold text-2xl sm:text-3xl px-4 sm:px-12 mt-8 sm:mt-16 mb-8 sm:mb-12 tracking-widest uppercase border-b border-[#52B788] pb-4'>Projects</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-12'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Project