import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import clothingstoreImg from "@/public/clothingstoreimg.png";
import archcompanyImg from "@/public/archcompanyimg.png";
import chatappImg from "@/public/chatappimg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Georgian College",
    description:
      "I graduated with a 3 year electrical engineering technology diploma",
    icon: React.createElement(LuGraduationCap),
    date: "2011",
  },
  {
    title: "Graduated University",
    location: "Ottawa University",
    description:
      "I graduated with a Civil Engineering Degree with a double major in Structural Engineering and Project Management",
    icon: React.createElement(CgWorkAlt),
    date: "2014",
  },
  {
    title: "Drone Technician and Operator",
    location: "Drone Unit",
    description:
      "More than 75 productions worked to date",
    icon: React.createElement(FaReact),
    date: "2014 - present",
  },
  {
    title: "Developer",
    location: "Drone Unit",
    description:
      "For the last 3 years, Ive accumilated hundreds of hours on Udemy courses, and even more hours on youtube tutorials. I started with what I knew, C++ for Arduino, moved to Javascript, then to Flutter, Nuxt3 and now React/NextJS",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Clothing Store",
    description:
      "A clothing store built mockup using Printful API to bring in real products",
    tags: ["React", "Typescript", "Next.js", "Tailwind"],
    imageUrl: clothingstoreImg,
    link: "https://outdoor-store-hjlx2igkf-brettzky10.vercel.app/"
  },
  {
    title: "Arcitectural Website",
    description:
      "A website for an arcitectural brand that showcases parallax and other packages.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: archcompanyImg,
    link: "https://architecture-company-3heg3jfvk-brettzky10.vercel.app/"
  },
  {
    title: "AI Chat App",
    description:
      "A AI chat app that allows users to talk in any language and receive chat in any language with an ai extension translating.",
    tags: ["React", "Next.js", "Stripe", "Tailwind", "Firebase"],
    imageUrl: chatappImg,
    link: "https://github.com/brettzky10/chat-ai"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Arduino",
  "Flutter",
  "Nuxt 3",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Planetscale",
  "PostgreSQL",
  "Framer Motion",
] as const;