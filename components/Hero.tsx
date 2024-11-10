import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { MagicButton } from './ui/MagicButton'
import { Compare } from './ui/compare'
import { FaLocationArrow } from 'react-icons/fa6'

import "animate.css"
import sunset from "../data/assets/sunset.png"
import code from "../data/assets/code.png"

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl pb-60 pt-32 mb-20 items-center">
        <div>
            <Spotlight className="inset-y-0 right-0 h-screen" fill="purple" />
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="-top-40 -left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className="flex justify-center relative my-20 z-30">
            <div className="max-w-[95vw] md:max-w-2xl lg:max-w-[30vw] flex flex-col justify-center">
                <h2 className="uppercase tracking-widest text-cs text-left text-blue-100 max-w-80"> 
                    project graduated
                </h2>

                <TextGenerateEffect 
                    className="text-left text-6xl lg:text-7xl"
                    words="Hi, I'm Matthew"
                />

                <p className="text-left md:tracking wider mb-4 text-md md:text-xl animate__animated animate__fadeInLeft">
                    I&apos;m currently a freshman at Texas A&M University
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

            <div className=" ml-[10vw] w-[30vw]">
                <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
                    <Compare
                        firstImage={code.src}
                        secondImage={sunset.src}
                        firstImageClassName="object-cover object-left-top"
                        secondImageClassname="object-cover object-left-top"
                        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                        slideMode="hover"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero