import Image from 'next/image';

export default function HomePage() {
    return (
      <div className="relative overflow-hidden h-screen flex justify-center items-center text-white flex-col">
         <div className="relative z-10 flex flex-col items-center">
            <Image className='rounded-full border-8 border-[#0c0c48aa]' src="/images/jj.JPG" alt="Hero Image" width={150} height={150} />
            <h1 className=' text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
                Creating dynamic web Application 
                <span className="text-cyan-200">
                    website , Web Design
                    </span>  
                </h1>
         </div>
      </div>
    );
}