import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaCamera } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import clothingstoreImg from "@/public/clothingstoreimg.png";
import prophotowizardImg from "@/public/prophotowizard.png";
import archcompanyImg from "@/public/archcompanyimg.png";
import launchpotionImg from "@/public/launchpotion.png";
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
      "More than 75 productions worked to date including 'The Boys', 'Handmaid's Tale', 'See' and many more...",
    icon: React.createElement(FaCamera),
    date: "2014 - 2024",
  },
  {
    title: "Developer",
    location: "Launch Potion",
    description:
      "Building fullstack apps and automating tasks for clients.",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Pro Photo Wizard",
    description:
      "Turn photos of yourself into new locations and characters.",
    tags: ["Typescript", "Next.js", "React", "Tailwind", "Resend", "Supabase", "Stripe"],
    imageUrl: "/prophotowizard.png",//prophotowizardImg,
    link: "https://www.prophotowizard.com"
  },
  {
    title: "Launch Potion",
    description:
      "An agency that delivers tailored automation-in-a-box packages to growth businesses.",
    tags: ["TypeScript", "Next.js", "React",  "Tailwind", "Stripe", "Make.com", "Zapier"],
    imageUrl: "/launchpotion.png",
    link: "https://www.launchpotion.com"
  },
  /* {
    title: "Was Made Locally",
    description:
      "Local made goods toolbelt. Giving locals the tools to compete.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind", "Stripe Connect", "Supabase"],
    imageUrl: launchpotionImg,
    link: "https://www.wasmadelocally.com/"
  }, */
  {
    title: "Bearear",
    description:
      "A chat app that allows users to talk and receive chat using their preferred language...removing language barriers.",
    tags: ["React", "Next.js", "Stripe", "Tailwind", "Firebase"],
    imageUrl: "/bearear.png",//chatappImg,
    link: "https://bearear.com"
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
  "Make.com,",
] as const;