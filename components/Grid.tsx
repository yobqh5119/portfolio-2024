import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section>
      <BentoGrid>
        {gridItems.map(({ id, title, description, img, className, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            className={className}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid