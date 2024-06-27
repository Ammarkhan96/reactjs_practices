import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
     className=""
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="black"
      />
        <div className="pt-40 w-full text-center z-10 relative">
            <h1
            className=" md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent
            bg-gradient-to-b from-neutral-50 to-neutral-700"
            >Master the Art of Music</h1>
            <p 
            className='mt-4 font-normal text-base md:text-large text-neutral-800 
            max-w-lg mx-auto'
            >Dive into your comprehensive music courses and
              transform your musical journey today. Whether 
              you're a beginner or looking to refine your
              skills, join us to unlock your true potential. </p>

              <div className='mt-4'>
                <Link href={"/courses"}>
                 <Button borderRadius='1.75rem'
                 className="bg-white dark:bg-transparent text-black dark:text-black
                  border-neutral-200 "
                 >Explore courses</Button> 
                </Link>
              </div>
        </div>
    </div>
  )
}

export default HeroSection