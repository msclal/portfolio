import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import meThinks from "@/public/projects/meThinks.png";
import Citrus from "@/public/projects/citrus.png";
import bioLink from "@/public/projects/bioLink.png";
import rparts from "@/public/projects/r-parts.png";
import garf from "@/public/projects/garfai.png";
import bbb from "@/public/projects/bbb.png";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";

const Projects = () => {
  const projectsData = [
    {
      title: "meThinks...",
      role: "Lead Developer & Product Manager",
      subTitle: "Twitter-BeReal Style thought posting",
      description: "Led a team of 4 people ",
      image: meThinks,
      github: "https://github.com/msclal/project-methinks",
      deployed: "https://me-thinks.herokuapp.com/feed",
      tech: (
        <div className="flex gap-x-2 text-sm text-gray-500">
          <SiFigma />
          <TbBrandNextjs />
          <SiTailwindcss />
          <SiMongodb />
          <SiSocketdotio />
        </div>
      ),
    },
    {
      title: "bioLink",
      role: "Front-end Developer",
      subTitle:
        "AI-driven health insights and live chatting with local experts",
      description: "",
      image: bioLink,
      github: "https://github.com/minsooerickim/bioLink",
      deployed: null,
      tech: (
        <div className="flex gap-x-2 text-sm text-gray-500">
          <TbBrandNextjs />
          <SiTailwindcss />
          <SiMongodb />
          <SiOpenai />
          <SiSocketdotio />
        </div>
      ),
    },
    {
      title: "Citrus Hack",
      role: "Lead Developer & On-Call Tech Support",
      subTitle:
        "California Inland Empire's largest hackathon with 725+ hackers",
      description: "Spearheaded Frontend Development",
      image: Citrus,
      github: "https://github.com/citrushack/citrushack2023",
      deployed: "https://www.citrushack.com/",
      tech: (
        <div className="flex gap-x-2 text-sm text-gray-500">
          <SiFigma />
          <TbBrandNextjs />
          <SiTailwindcss />
          <SiMongodb />
        </div>
      ),
    },
    {
      title: "R-Parts",
      role: "Front-end Developer",
      subTitle:
        "Secondhand Marketplace for UCR students seeking parts for engineering classes",
      description: "Led 4 engineers",
      image: rparts,
      github: "https://github.com/shahdivyank/r-parts",
      deployed: "r-parts.vercel.app",
      tech: (
        <div className="flex gap-x-2 text-sm text-gray-500">
          <SiFigma />
          <TbBrandNextjs />
          <SiTailwindcss />
          <SiFirebase />
        </div>
      ),
    },
    {
      title: "Garf AI",
      role: "Full-stack Developer & Product Owner",
      // subTitle:
      //   "Personal AI assistant to enrich my friend group's daily workflows",
      subTitle:
        "AI-powered personal assistant to enrich our friend group's daily workflows",
      description: "Led 4 engineers",
      image: garf,
      github: "https://github.com/msclal/Garf",
      deployed: "https://garfai.vercel.app/",
      tech: (
        <div className="flex gap-x-2 text-sm text-gray-500">
          <TbBrandNextjs />
          <SiTailwindcss />
          <SiOpenai />
        </div>
      ),
    },
    {
      title: "bitByBIT",
      role: "Full-stack Developer",
      subTitle:
        "Leetcode-esque platform for beginner UCR students to improve programming fundamentals",
      description: "Led 4 engineers",
      image: bbb,
      github: "https://github.com/acm-ucr/bitByBIT",
      deployed: null,
      tech: (
        <div className="flex gap-x-2 text-sm text-gray-500">
          <SiFigma />
          <TbBrandNextjs />
          <SiTailwindcss />
          <SiFirebase />
          <p className="text-xs">Judge0</p>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 2.7 } }}
      exit={{ opacity: 0, y: 0 }}
      id="projects"
      className="grid sm:grid-cols-2 gap-5 md:gap-8 pb-0 mb-0 place-items-center"
    >
      {projectsData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </motion.div>
  );
};

export default Projects;
