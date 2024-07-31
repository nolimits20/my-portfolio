'use client'
import React from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your message has been sent successfully.',
        });
        event.target.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message || 'Something went wrong!',
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'There was an error sending your message. Please try again later.',
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className='bg-[#081C15] min-h-screen w-full relative p-8 flex flex-col lg:flex-row items-center justify-center' 
      id='contact'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9baca2] to-[#a7cead]'></div>
      
      <motion.div className='flex justify-center w-full lg:w-5/12 lg:hidden mb-8' variants={itemVariants}>
        <Image
          src='/Send-message.png'
          alt='message'
          width={500}
          height={500}
          className='object-contain'
        />
      </motion.div>

      <motion.div 
        className='bg-[#52B788] p-10 rounded-lg shadow-lg w-full lg:w-7/12 flex flex-col items-center lg:items-start mb-8 lg:mb-0'
        variants={itemVariants}
      >
        <motion.h2 
          className='text-3xl font-bold mb-6 text-[#fff] text-center lg:text-left'
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        <form className='space-y-4 w-full' onSubmit={onSubmit}>
          <input 
            type="hidden" 
            name="access_key" 
            value="aa47b919-68b2-49f7-bc31-b197a85095ab"
          />
          <motion.div variants={itemVariants}>
            <label className='block text-[#081C15] mb-2' htmlFor='name'>Name</label>
            <input 
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#081C15]'
              type='text' 
              id='name' 
              name='name' 
              required 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label className='block text-[#081C15] mb-2' htmlFor='email'>Email</label>
            <input 
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#081C15]'
              type='email' 
              id='email' 
              name='email' 
              required 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label className='block text-[#081C15] mb-2' htmlFor='subject'>Subject</label>
            <input 
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#081C15]'
              type='text' 
              id='subject' 
              name='subject' 
              required 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label className='block text-[#081C15] mb-2' htmlFor='message'>Message</label>
            <textarea 
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#081C15]'
              id='message' 
              name='message' 
              rows='4' 
              required 
            ></textarea>
          </motion.div>
          <motion.button 
            className='w-full p-3 bg-[#081C15] text-white rounded-lg hover:bg-[#053c29] transition duration-300'
            type='submit'
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <motion.div 
        className='hidden lg:flex justify-center w-full lg:w-5/12'
        variants={itemVariants}
      >
        <Image
          src='/Send-message.png'
          alt='message'
          width={500}
          height={500}
          className='object-contain'
        />
      </motion.div>
    </motion.div>
  );
}

export default Contact;