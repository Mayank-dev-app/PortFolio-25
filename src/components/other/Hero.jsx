
import { ArrowRight, Download } from "lucide-react";
import image from "../../assets/myimage/StudentImage.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className='min-h-screen flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-10 px-7 flex-col-reverse md:flex-row'>
            {/* Right Container */}
            <div className='md:w-[50%] text-xl text-white font-serif'>
                <h1 className='text-yellow-300 text-4xl font-extrabold'>Mayank Sharma</h1>
                <p className='text-lg text-gray-300 leading-relaxed mb-6'>I build end-to-end web applications using React, Node.js and modern tooling. I focus on clean UI, performant code, and shipping features that users love. Currently making real-world projects and preparing for engineering interviews.</p>
                <div className='flex gap-7 mt-4 flex-wrap sm:flex-nowrap'>
                    <Link
                        to="/projects"
                        className="flex gap-1 items-center border border-yellow-400 rounded-2xl px-7 py-2 text-yellow-400 
                        font-medium transition-all duration-300 hover:bg-yellow-400 hover:text-blue-600 cursor-pointer shadow-md"
                    >
                        <span>View Projects</span> <ArrowRight />
                    </Link>

                    <button
                        className="flex gap-1 items-center border border-yellow-400 rounded-2xl px-7 py-2 
                      bg-yellow-400 text-blue-600 font-medium shadow-md cursor-pointer
                      transition-all duration-300 hover:bg-transparent hover:text-yellow-400"
                    >
                        <span>My Resume</span> <Download />
                    </button>
                </div>
            </div>
            {/* Left Container */}
            <div className='flex justify-center '>
                <img
                     src={image}
                    alt="My image"
                    className="size-72 md:size-96 object-cover rounded-full shadow-2xl border-4 border-yellow-300 transition-transform duration-300 hover:scale-105 hover:shadow-yellow-400" />
            </div>
        </section>
    )
}

export default Hero
