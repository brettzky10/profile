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
        As of 2024, I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. My core stack
        is{" "}
        <span className="font-medium">
          Next.js(React), Typescript and Prisma(mySQL, postgresql..)</span>
        , but I am also familiar with Flutter, C++ and Nuxt/Vue.
      </p>

      <p>
        <span className="italic">I am the fast learning, problem solving engineer that your team has been looking for.</span> {" "}
      </p>
    </motion.section>
  );
}