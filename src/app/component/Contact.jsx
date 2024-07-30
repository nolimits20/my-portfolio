'use client'
import React from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [result, setResult] = React.useState("")
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa47b919-68b2-49f7-bc31-b197a85095ab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error('Error sending message. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className='bg-[#081C15] min-h-screen w-full relative p-8 flex flex-col lg:flex-row items-center justify-center ' id='contact'>
      <ToastContainer />
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9baca2] to-[#a7cead]'></div>
      
      <div className='flex justify-center w-full lg:w-5/12 lg:hidden mb-8'>
        <Image
          src='/Send-message.png'
          alt='message'
          width={500}
          height={500}
          className='object-contain'
        />
      </div>

      <div className='bg-[#52B788] p-10 rounded-lg shadow-lg w-full lg:w-7/12 flex flex-col items-center lg:items-start mb-8 lg:mb-0'>
        <h2 className='text-3xl font-bold mb-6 text-[#fff] text-center lg:text-left'>Contact Me</h2>
        <form className='space-y-4 w-full' onSubmit={onSubmit}>
          <div>
            <label className='block text-[#081C15] mb-2' htmlFor='name'>Name</label>
            <input 
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#081C15]'
              type='text' 
              id='name' 
              name='name' 
              required 
            />
          </div>
          <div>
            <label className='block text-[#081C15] mb-2' htmlFor='email'>Email</label>
            <input 
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#081C15]'
              type='email' 
              id='email' 
              name='email' 
              required 
            />
          </div>
          <div>
            <label className='block text-[#081C15] mb-2' htmlFor='subject'>Subject</label>
            <input 
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#081C15]'
              type='text' 
              id='subject' 
              name='subject' 
              required 
            />
          </div>
          <div>
            <label className='block text-[#081C15] mb-2' htmlFor='message'>Message</label>
            <textarea 
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#081C15]'
              id='message' 
              name='message' 
              rows='4' 
              required 
            ></textarea>
          </div>
          <button 
            className='w-full p-3 bg-[#081C15] text-white rounded-lg hover:bg-[#053c29] transition duration-300'
            type='submit'
          >
            Send Message
          </button>
        </form>
      </div>

      <div className='hidden lg:flex justify-center w-full lg:w-5/12'>
        <Image
          src='/Send-message.png'
          alt='message'
          width={500}
          height={500}
          className='object-contain'
        />
      </div>
    </div>
  );
}

export default Contact;
