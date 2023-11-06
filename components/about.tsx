"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Civil Engineering</span> and a diploma in Electrical Engineering, I decided to pursue my
        passion for drones. For the last 8 years I helped a friend build a drone company, using custom arduino based drones, that is now the go to drone company in Canada for film and television for studios.{" "}
        <span className="font-bold">I have worked on over 75 productions including the Boys, Star Trek Discovery, and Handmaids Tale</span>.{" "}
        <span className="font-medium">In the last couple years, I have shifted focus to getting better at programming.</span> I <span className="underline">love</span> the
        feeling of problem solving using code and figuring out solutions is addictive. After 3 years and hundreds of hours of tutorials, my understanding of popular frameworks has exploded. As of 2023, my core stack
        is{" "}
        <span className="font-medium">
          Next.js, Typescript and Prisma(mySQL, postgresql..)</span>
        . I am also familiar with Flutter and Nuxt 3. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I work on building my Sprinter van into an RV, arduino projects and playing with my dog. {" "}
      </p>
    </motion.section>
  );
}