import { useState, useEffect } from "react"
import './home.css'


const Home = () => {

    const str = ["I am M.Zuhaib", "I am Frontend Developer", "I am React.js Developer "];

    const [intro, setIntro] = useState(str[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % str.length;
                setIntro(str[nextIndex]);
                return nextIndex;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const words = intro.split(" ");


    return (
        <div className='flex flex-wrap  px-3 text-white justify-around p-10 md:p-20 bg-[#050114ea]'>
            <div className='px-3 md:mt-10  md:w-2/4'>
                <h1 className='text-3xl md:text-6xl font-bold  tracking-tighter'>
                    Hello'
                    <span >
                        {words.map((word, i) => (
                            <span
                                key={`${word}-${i}`}
                                className="inline-block mr-2 animate-word"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            >
                                {word}
                            </span>
                        ))}
                    </span>
                </h1>
                <p className='text-xl md:text-2xl '>
                    I am a Frontend Developer with strong expertise in building scalable,
                    responsive, and user-centric web applications using React.js and modern
                    JavaScript. I focus on writing clean, maintainable code and delivering
                    high-quality user experiences
                </p>
                <a href="#contact">
                    <button className='mt-1.5 md:mt-3 text-white font-semibold p-1.5 text-sm
                md:text-xl hover:opacity-95 duration-300 rounded-3xl bg-[#465697]
                hover:scale-105'>Contact me</button>
                </a>
            </div>
            <div>
                {/* imge styling */}
                <img src="src\zuhaib.jpeg" alt=""
                    className='  w-70 h-70 rounded-full mx-2 mb-5 md:mt-18
    object-cover
    border-4 bg-[#27315e]
    shadow-[0_0_45px_rgba(168,85,247,0.7)]
    
    transition-all duration-700 ease-in-out
    hover:scale-110 hover:rotate-2
    hover:shadow-[0_0_80px_rgba(236,72,153,1)]
    
    animate-float animate-glow animate-hue'/>
            </div>

        </div>
    )
}

export default Home
