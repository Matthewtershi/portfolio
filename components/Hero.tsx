import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const words = ["Past", "Present", "Future"];

const Hero = () => {
  return (
    <div className="pb-60 pt-36 mb-20">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="-top-40 -left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className="flex justify-center relative my-20 z-30">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-cs text-center text-blue-100 max-w-80"> 
                    project graduated
                </h2>

                <TextGenerateEffect 
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    words="Hi, I'm Matthew"
                />

                <p className="text-center md:tracking wider mb-4 text-md md:text-xl">
                    I'm currently a freshman at Texas A&M University
                    interested in <span className="text-purple">machine learning</span>, <span className="text-purple">environmental work</span>, and <span className="text-purple">service</span>
                </p>

                <a href="#projects">
                    <MagicButton 
                    title="Explore"
                    icon={<FaLocationArrow />}
                    position = 'right'
                />
                </a>
            </div>

            {/* <div className="bg-pink-50 mx-[15vw]">
                animation
            </div> */}
        </div>
    </div>
  )
}

export default Hero