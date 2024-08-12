"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

export const HoverEffect = ({
  id,
  title,
  description,
  img,
  iconLists,
  link,
  className,
}: {
  id: number;
  title: string;
  description: string;
  img: string;
  iconLists: string[];
  link: string;
  className?: string;
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Link
      href={link}
      className="relative group block p-2 h-full w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <Card>
        <div className="relative">
          <img
            src={img}
            alt={title}
            className="rounded-2xl object-cover w-full h-48"
          />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
                {iconLists.map((icon) => (
                    <div key={icon} className="border rounded-full border-white/[0.2] bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center">
                        <img src={icon} className="p-2" alt={icon}/>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center">
                <p className="flex lg:text-l md:text-m text-sm text-purple">
                    Click to view repo
                    <FaLocationArrow className="ms-3" color="#CBACF9"/>
                </p>
            </div>
        </div>
      </Card>
    </Link>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
