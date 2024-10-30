import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Skills = () => {
  return (
    <div className="py-20 mt-40" id="about">
        <h1 className="heading">
            A few of  {' '}<span className="text-purple"> my Skills </span>
            {/* rotating graph element for a backend */}
        </h1>
        
    </div>
  )
}

export default Skills