import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full md:mb-5 mb-[100px] pb-10 relative overflow-hidden" id="contact">
        <div className="w-full absolute left-0 bottom-0 h-[300px]">
            <img src="/footer-grid.svg" className="w-full h-full opacity-65 object-cover" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Reach <span className="text-purple">out!</span>
            </h1>
            <p className="text-white-200 mt-5 text-center"> Got a question or want to collaborate? I'm open to connect! </p>

            <a href="mailto:matthewtershi@gmail.com">
                <MagicButton
                    title="Get in touch!"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>

        <div className="relative z-10 flex mt-15 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Matthew</p>
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <img src={profile.img} width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
