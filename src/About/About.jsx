import { FcRight } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-wrap gap-6 overflow-hidden text-white bg-black 
    rounded-lg p-6  shadow-xl md:mx-5 mx-0 mt-5 justify-around " id="about">
      
      <div>
        <h1 className="text-8xl font-bold mb-5 md:mb-0">About</h1>
        <img
          src="https://images.unsplash.com/photo-1562907550-096d3bf9b25c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRhcmslMjBjb2RlfGVufDB8fDB8fHww"
          alt="Profile"
          className="md:w-full md:mt-30 h-100 object-cover rounded-lg "
        />
      </div>

      <div className="md:w-1/3 md:mt-25">
        <div className="md:mt-25" >
          
          <h1 className=" text-3xl"> <FaArrowRight size={40} className="inline mr-2"/>
           Frontend Developer</h1>
        <p className=" text-xl tracking-wide">
          A Frontend Developer who builds clean, responsive, and user-friendly web 
                    interfaces using React.js and modern web technologies.
        </p>
      </div>
      <div className="mt-10" >
        <h1 className=" text-3xl"><FaArrowRight className="inline mr-2" size={40}/>
        React.js Developer</h1>
        <p className=" text-xl tracking-wide">
        A detail-oriented React.js Developer skilled in creating efficient, modular,
         and scalable user interfaces with React Hooks and modern JavaScript.
        </p>
      </div>
     
      </div>

    </div>
  )
}

export default About
