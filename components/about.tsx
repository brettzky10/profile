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
      

      <p>
        <span className="italic">I automate ineffiencies in early stage businesses. I create webapps with Nextjs & Typescript, Flutter/dart for mobile, and arduinos to automate the physical world. I am a member of IATSE667 and have worked as part of the drone team on over 75 productions including Umbrella Academy, the Boys, and Handmaid&apos;s Tale. </span> {" "}
      </p>
    </motion.section>
  );
}