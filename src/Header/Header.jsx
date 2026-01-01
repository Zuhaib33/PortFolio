import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
// import {Link} from "react-router-dom"
const Header = () => {
    const [menu, setMenu] = useState(false);
    


    return (
        <nav className=' flex flex-wrap justify-between md:items-center  text-white px-2.5 pt-1.5 
        md:px-5 rounded-b-xl bg-[#3c4052]  '>
            <span className='text-2xl font-bold tracking-wide'>PortFolio</span>
            <ul className={`${menu ? "block " : "hidden"} mx-6 py-2 font-semibold md:mt-1 bg-transparent px-2  md:border-none
            md:text-center md:bg-tansparent md:static md:mx-0 md:flex justify-around w-1/2  `}>
                <div >
                    <a to="/about" href="#about">
                        <li className=' transition-all duration-300' >About</li>
                    </a>
                </div>
                <div>
                    <a href="#Skills">
                        <li className=' transition-all duration-300'>Skills</li>
                    </a>
                </div>
                <div>
                    <a href="#Projects">
                        <li className=' transition-all duration-300'>Projects</li>
                    </a>
                </div>
                <div>
                    <a href="#contact">
                        <li className=' transition-all duration-300'>Contacts</li>
                    </a>
                </div>
            </ul>


            {menu ? (
                <IoClose
                    size={30}
                    color="ffff"
                    className="md:hidden absolute right-10 top-1.5 transition-all duration-300 cursor-pointer"
                    onClick={() => setMenu(false)}
                />
            ) : (
                <HiMenuAlt3
                    size={40}
                    color="#ffff"
                    className="md:hidden absolute right-10 top-1.5  transition-all duration-300 cursor-pointer"
                    onClick={() => setMenu(true)}
                />
            )}
        </nav>

    )
}

export default Header
