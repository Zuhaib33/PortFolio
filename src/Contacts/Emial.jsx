import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
let ContactUs
export default  ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w8bzti5', 'template_dgmkygj', form.current, {
        publicKey: '_z4fQCVgN8Snf8Qi0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Your Email is send Successfully.")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='bg-[#111424] text-black mt-3 md:mt-15 rounded-lg md:w-1/2 '>
      <form ref={form} onSubmit={sendEmail} >
      <label className='text-3xl text-white  ml-3 md:mt-5' >Name</label>
      <br />
      <input type="text" name="name" className='bg-[#3c4052] text-white w-2/3 mx-5 mt-3  
       md:mt-10 text-xl h-8 p-1 duration-300 rounded-xl' />
      <br />
      <label className='text-3xl text-white md:pt-5  ml-3'>Email</label>
      <br />
      <input type="email" name="email" className='bg-[#3c4052] text-white w-2/3 mx-5 mt-3 
        md:mt-10 text-xl h-8 p-1 duration-300  rounded-xl'/>
      <br />
      <label className='text-3xl text-white  ml-3'>Message</label>
      <br />
      <textarea name="message" className='bg-[#3c4052] text-white w-2/3 mx-5 mt-3 
        md:mt-10 text-lg  duration-300 rounded-xl'/>
      <br />
      {/* <input type="submit" value="Send" /> */}
      <button type="submit" className={` bg-[#3c4052] text-white w-fit mx-5 mt-3 p-2
      text-xl  duration-300 rounded-2xl m-2` } value="Send">Send</button>
    </form>
    </div>
  );
};
