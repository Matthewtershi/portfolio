import { projects } from '@/data'
import React from 'react'
import { HoverEffect } from './ui/CardHover'

const RecentProjects = () => {
  return (
    <div className="z-10 py-20" id="projects">
        <h1 className="heading py-10">
            A small selection of {' '}
            <span className="text-purple"> recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {projects.map(({ id, title, description, img, iconLists, link }) => (
            <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh]">
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