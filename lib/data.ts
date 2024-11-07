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
      "Train a model using your face to create photos of yourself in any style.",
    tags: ["Typescript", "Next.js", "React", "Tailwind", "Resend", "Supabase", "Stripe"],
    imageUrl: prophotowizardImg,
    link: "https://prophotowizard.com/"
  },
  {
    title: "Launch Potion",
    description:
      "An agency that automates tasks such as lead generation, customer retention..etc. using Nextjs and Make.com.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind", "Stripe"],
    imageUrl: launchpotionImg,
    link: "https://LaunchPotion.com/"
  },
  {
    title: "AI Chat App",
    description:
      "A chat app that allows users to talk in any language, and receive chat in any language, with an ai extension translating.",
    tags: ["React", "Next.js", "Stripe", "Tailwind", "Firebase"],
    imageUrl: chatappImg,
    link: "https://chat-ai-beryl-six.vercel.app"
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