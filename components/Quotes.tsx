import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Quotes = () => {
  return (
    <div className="mt-20 mb-10" id="projects">
        <h1 className="heading">
            A set of {' '}
            <span className="text-purple"> quotes </span>
            {' '} I like to live by
        </h1>
        <div className="flex flex-col items-center md:mt-10">
            <InfiniteMovingCards className="h-[50vh] flex flex-col rounded-md antialiaseed md:h-[30rem] overflow-hidden items-center relative"
                items={testimonials}
                direction="right"
                speed="slow"
            />
            {/*<div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                {companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                        <img 
                            src = {img}
                            className="md:w-10 w-5"
                        />
                        <img 
                            src = {img}
                            className="md:w-24 w-20"
                        />
                    </div>
                ))}
                
            </div>*/}
        </div>
    </div>
  )
}

export default Quotes