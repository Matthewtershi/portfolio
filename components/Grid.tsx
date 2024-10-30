import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <div>
      <h1 className="heading mb-10">
            A set of my favorite {' '}
            <span className="text-purple"> memories </span>
        </h1>
      <section className="mt-5 mb-20 rounded-3xl border border-slate-800 p-3" style={{ userSelect: 'none' }}>
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
    </div>
  )
}

export default Grid