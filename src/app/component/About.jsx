'use client'
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const About = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controlsLeft.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
      controlsRight.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controlsLeft.start({ x: -100, opacity: 0 });
      controlsRight.start({ x: 100, opacity: 0 });
    }
  }, [controlsLeft, controlsRight, inView]);

  return (
    <div ref={ref} className='bg-[#081C15] min-h-screen w-full relative flex flex-col md:flex-row'>
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#95D5B2] from-67% to-[#D8F3DC] to-33%'></div>
      
      {/* Left side double-layer container */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={controlsLeft}
        className='w-full md:w-1/2 h-64 md:h-auto relative mb-8 md:mb-0 flex items-center justify-center'
      >
        <div className='absolute top-4 left-2 right-2 bottom-2 md:top-8 md:left-4 md:right-4 md:bottom-4 bg-[#1B4332] rounded-lg'></div>
        <div className='absolute top-8 left-4 right-4 bottom-4 md:top-16 md:left-8 md:right-8 md:bottom-8 bg-[#2D6A4F] rounded-lg flex items-center justify-center'>
          <Image
            src='/pics-replace.png'
            alt='about pics'
            width={300}
            height={300}
            className='w-48 h-48 md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-lg filter grayscale hover:grayscale-0 hover:hue-rotate-180 transition duration-500 ease-in-out'
          />
        </div>
      </motion.div>

      {/* Right side content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={controlsRight}
        className='w-full md:w-1/2 p-6 md:p-12 overflow-y-auto'
      >
        <h1 className='text-white font-bold text-4xl md:text-6xl mb-4 md:mb-8'>ABOUT <span className='text-[#52B788]'>ME</span></h1>
        <div className='w-20 md:w-24 border-t-4 border-green-600 mb-6 md:mb-8'></div>
        
        <p className='text-white mb-4 md:mb-6'>Hey there! I&apos;m a frontend developer based in Lagos, Nigeria. I&apos;m all about creating delightful user experiences through clean code, pixel-perfect designs, and a dash of creativity.</p>
        
        <h2 className='text-[#52B788] font-bold text-xl md:text-2xl mb-3 md:mb-4'>What I Do</h2>
        <p className='text-white mb-4 md:mb-6'>🌐 <span className='font-semibold'>Frontend Magic:</span> I specialize in turning design mockups into living, breathing websites. HTML, CSS, and JavaScript are my trusty companions—I wield them like a wizard crafting spells. Whether it&apos;s a responsive landing page or a complex web app, I&apos;m up for the challenge.</p>
        
        <p className='text-white mb-4 md:mb-6'>🎨 <span className='font-semibold'>Design Lover:</span> I have a soft spot for aesthetics. Beautiful interfaces make my heart skip a beat. When I&apos;m not pushing pixels, you&apos;ll find me browsing Dribbble, seeking inspiration, and occasionally doodling UI ideas on napkins.</p>
        
        <p className='text-white mb-4 md:mb-6'>🚀 <span className='font-semibold'>Performance Geek:</span> Slow websites? Not on my watch! I optimize for speed, because nobody likes waiting. From lazy loading images to minimizing HTTP requests, I&apos;m on a mission to make the web faster.</p>
        
        <h2 className='text-[#52B788] font-bold text-xl md:text-2xl mb-3 md:mb-4'>My Toolbox</h2>
        <p className='text-white mb-2'>🔧 <span className='font-semibold'>Languages:</span> HTML, CSS, JavaScript (and a sprinkle of TypeScript)</p>
        <p className='text-white mb-2'>🎨 <span className='font-semibold'>Frameworks & Libraries:</span> React.js, Next.js (because server-side rendering rocks!)</p>
        <p className='text-white mb-4 md:mb-6'>🔍 <span className='font-semibold'>Tools:</span> VS Code (my trusty sidekick), Git (version control ninja), and a strong cup of coffee (essential for late-night coding sessions)</p>
        
        <p className='text-[#52B788] italic'>Remember, every line of code I write is a step toward making the web a better place. Thanks for stopping by! 🙌</p>
      </motion.div>
    </div>
  );
};

export default About;
