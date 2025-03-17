import React from "react";

import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

import { gridItems } from "@/lib/metadata";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(
          (
            {
              id,
              img,
              title,
              spareImg,
              className,
              description,
              imgClassName,
              titleClassName,
            },
            i,
          ) => (
            <BentoGridItem
              key={i}
              id={id}
              img={img}
              title={title}
              spareImg={spareImg}
              className={className}
              description={description}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
