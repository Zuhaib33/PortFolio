import React from 'react'
import ContactUs from './Emial.jsx'
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import './contact.css'


const Contacts = () => {
  return (

    <div className='md:flex md:flex-wrap p-6  overflow-hidden justify-between mt-5  
    text-white bg-[#080e24]  'id='contact'>

      <div className=' md:w-1/2 '>
        <h1 className='text-6xl md:text-8xl font-bold mb-3 tracking-tighter'>
          Contact
        </h1>
        <img className='md:w-70 h-80 rounded-3xl' src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?
        w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=
        M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />

        <a href="https://wa.me/923013345308">
          <FaWhatsapp size={50} color="#25D366" className='inline m-5 icon '/>
        </a>

        <a href="https://www.linkedin.com/in/muhammad-zuhaib-zulfiqar-39114336a/">
          <FaLinkedin size={50} color="#0A66C2"className='inline m-5 icon' />
        </a>

        <a href="https://github.com/Zuhaib33">
          <FaGithub size={50} color="#000000"className='inline m-5 icon' />
        </a>

        <a href="m.zuhaibofficial@gmail.com">
          <FaEnvelope size={50} color="#EA4335"className='inline m-5 icon' />
        </a>

      </div>

      <ContactUs />
    </div>

  )
}

export default Contacts
