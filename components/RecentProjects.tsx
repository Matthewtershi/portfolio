import { projects } from '@/data'
import React from 'react'
import { HoverEffect } from './ui/CardHover'
// import { motion } from 'framer-motion';
// import { slideIn } from './ui/motion';

const RecentProjects = () => {
  return (
    // variants={slideIn('left', 'tween', 0.2,1)}
    <div className="z-10 pb-20 mb-50"  id="projects">
        <h1 className="heading py-10">
            A small selection of {' '}
            <span className="text-purple"> recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {projects.map(({ id, title, description, img, iconLists, link }) => (
            <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] loadinright">
                <HoverEffect
                id={id}
                title={title}
                description={description}
                img={img}
                iconLists={iconLists}
                link={link}
                />
            </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects