import React from 'react'
import './skills'
import { FaCss3, FaHtml5, FaJs, FaReact, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaJ } from 'react-icons/fa6';
import { SiCplusplus } from "react-icons/si";


const skills = () => {
    return (
        <div className="flex flex-wrap gap-6 overflow-hidden text-white bg-[#00030f] 
    rounded-lg p-6 shadow-xl md:mx-2 mx-0 justify-around mt-5" id='Skills' >
            <div>
                <h1 className="text-8xl font-bold">Skills</h1>
                <div className='md:grid md:grid-cols-3  md:w-3/4 gap-17 justify-between md:mt-10  
                grid grid-cols-2 md:px-4 icons'>
                    <FaHtml5 size={80} color="#E34F26" />
                    <FaCss3 size={80} color="#1572B6"  />
                    <FaJs size={80} color="#F7DF1E"  />
                    <FaReact size={80} color="#61DAFB"  />
                    <FaBootstrap size={80} color="#7952B3"  />
                    <SiTailwindcss size={80} color="#38BDF8"/>
                    <FaGithub size={80} color="#181717"  />
                    <SiCplusplus size={80} color="#00599C" />
                </div>
            </div>

            <div className="md:w-1/2 md:mt-20 ">
                <div className='bg-[#010727] flex flex-wrap rounded-2xl md:mb-10 mt-5'>
                    <FaJ size={70} color="#F7DF1E" className='inline'/>
                    
                        
                    <ul className='inline'>
                        <li className='text-xl font-bold mb-1'>JavaScript </li>
                        <li>Dynamic Typing,Event Handling,DOM Manipulation</li>
                        <li>ES6+ Features,Asynchronous Programming,API handling</li>
                  
                    </ul>
                  

                </div>
                 <div className='bg-[#010727] flex flex-wrap rounded-2xl md:mb-10 mt-5'>
                    <FaReact size={70} color="#61DAFB" className='inline'/>
                    
                        
                    <ul className='inline'>
                        <li className='text-xl font-bold mb-1'>React.js </li>
                        <li>Component-Based Architecture,Virtual DOM,React Hooks</li>
                        <li>JSX Syntax,State Management,State Management</li>
                  
                    </ul>
                  

                </div>
                  <div className='bg-[#010727] flex flex-wrap rounded-2xl md:mb-10 mt-5'>
                    <FaGithub size={70} color="#181717" className='inline'/>
                    
                        
                    <ul className='inline'>
                        <li className='text-xl font-bold mb-1'>GitHub </li>
                        <li>Version Control,Portfolio Hosting,Push code</li>
                        {/* <li>arry object function name function name</li> */}
                  
                    </ul>
                  

                </div>
            </div>

        </div>

    )
}

export default skills
