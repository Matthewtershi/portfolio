"use client"

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  images,
  imgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  images: string[];
  imgClassName?: string;
}) => {
    const [currentImage, setCurrentImage] = useState(images?.[0]);

    {/*useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            setCurrentImage(images[currentIndex]);
        }, 10000);
        return () => clearInterval(interval);
    }, [images])*/}

    return (
        <div
        className={cn(
            "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
            className
        )}
        style={{
            background: 'rgb(4,7,29)',
            backgroundColor: 'linear-gradient(90deg, rgba(2,0,35,1) 0%, rgba(59, 59,68,1) 26%, rgb(93, 108,11,1) 100%',
        }}
        >
            {/*<div className={`${id === 6} && 'flex justify-center h-full`}>
                <div className="w-full h-full absolute">
                    {img && (<img 
                        src={img} 
                        alt={img} 
                        className = {cn(imgClassName, 'object-cover, object-center')}/>
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
                    {spareImg && (<img 
                        src={spareImg} 
                        alt={spareImg} 
                        className = {('object-cover, object-center w-full h-full')}/>
                    )}
                </div>
                left off here
            </div> */}
            

            <div className="relative w-full h-full">
                {currentImage && (
                <img 
                    src={currentImage} 
                    alt={currentImage} 
                    className={cn(imgClassName, 'object-cover object-center w-full h-full')}
                />
                )}
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                {description}
                </div>
            </div>
        </div>
    );
};
