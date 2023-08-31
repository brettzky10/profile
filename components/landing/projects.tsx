"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const projects = [
  {
    title: "Fable Writer",
    description:
      "A NextJS web app that allows users to write, share, and collaborate. Leverages LLMs for realistic character chats.",
    link: "https://google.com",
    stack: "NextJS, Typescript, Prisma, Pinecone, Planetscale"
  },
  {
    title: "Print on Demand",
    description:
      "A NextJS web app that allows users to purchase merchandise, which is fullfilled by Printful.",
      link: "https://google.com",
      stack: "NextJS, Typescript"
  },
  {
    title: "Profile Creator",
    description:
      "A NextJS web app that allows users to leverage OpenAI & Replicate APIs to create professional headshots and write bios using AI.",
      link: "https://google.com",
      stack: "NextJS, Typescript, Prisma, Vercel PostgreSQL"
  },
  // ...rest of the projects
];

export const Projects = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {projects.map((project, idx) => (
          <div
            key={project?.link}
            className="relative group  block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground" // required for the background to follow
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
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
              <Link
                href={project?.link}
              >
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                    {project.title}
                  </h4>
                  <p className="mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <p className="mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm">
                    {project.stack}
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};