import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section className="mt-5 mb-20">
        <BentoGrid>
            {gridItems.map((item) => (
                <BentoGridItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                    images={item.images}
                    imgClassName={item.imgClassName}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid