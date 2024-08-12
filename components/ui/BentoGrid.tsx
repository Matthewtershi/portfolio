"use client";

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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
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

  useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
          // currentIndex = (currentIndex + 1) % images.length;
          currentIndex = (Math.floor(Math.random() * images.length));
          setCurrentImage(images[currentIndex]);
      }, 10000);
      return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,35,1) 0%, rgba(59, 59,68,1) 26%, rgb(93, 108,11,1) 100%",
      }}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        {currentImage && (
          <img
            src={currentImage}
            alt={currentImage}
            // className="object-cover w-full h-full"
            className={`w-full h-full ${
              id === 5 ? "object-contain" : "object-cover"
            }`}
          />
        )}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full z-10 text-center bg-transparent p-4">
        <h2 className="text-5xl font-bold text-purple">
          <span
            className="relative"
            style={{
              textShadow: "1px 1px 0 black, -1px -1px 0 black, -1px 1px 0 black, 1px -1px 0 black", 
              letterSpacing: "0.05em",
              lineHeight: "1.2",
            }}
          >
            {title}
          </span>
        </h2>
        <p className="mt-2 text-white text-lg font-bold">
          <span
            className="relative"
            style={{
              textShadow: "1px 1px 0 black, -1px -1px 0 black, -1px 1px 0 black, 1px -1px 0 black",  
              letterSpacing: "0.05em",
              lineHeight: "1.2",
            }}
          >
            {description}
          </span>
        </p>
      </div>
    </div>
  );
};
