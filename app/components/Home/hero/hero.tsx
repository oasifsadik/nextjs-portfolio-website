"use client";
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import TypeWriter from 'typewriter-effect';
import ParticlesHero from './ParticalBackground';

export default function HomePage() {
    return (
      <div className="relative  h-screen flex items-center justify-center  text-white overflow-hidden flex-col">

        <ParticlesHero />
         <div className="relative z-10 flex flex-col items-center">
            <Image className='rounded-full border-8 border-[#0c0c48aa]' src="/images/jj.JPG" alt="Hero Image" width={150} height={150} />
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
                Creating Web Products, <br />Brands,
                <span className="text-cyan-200">
                     And Experiences.
                </span>  
            </h1>
            <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
                Hi ! I'm Jisan A - Passionate 
                <span className="text-cyan-200 font-bold">
                    <TypeWriter options={{ strings: ['Frontend Developer', 'Backend Developer', 'Web Developer'], autoStart: true, loop: true, delay: 75, deleteSpeed:50, wrapperClassName: "pl-2",}} />
                </span>
            </h2>
          <button
              className="
                mt-6
                px-12 py-4
                bg-blue-800 hover:bg-blue-900
                transition-all duration-300
                rounded-full
                text-lg font-medium
                flex items-center justify-center
                gap-3
              "
            >
            <span className="whitespace-nowrap">See My Work</span>
            <BsArrowRight className="w-5 h-5 shrink-0" />
            </button>


         </div>
        </div>
        );
}